from __future__ import annotations

from typing import Literal

from langgraph.graph import END, START, StateGraph

from .gemini import GeminiClient
from .models import PortfolioAIRequest, PortfolioAIState
from .portfolio_knowledge import PORTFOLIO_KNOWLEDGE


ModeName = Literal["experience", "job-match", "case-study"]

MODE_INSTRUCTIONS: dict[ModeName, str] = {
    "experience": (
        "Answer like a recruiter-facing portfolio assistant. Be concise, confident, "
        "and evidence-based. Focus on relevant strengths supported by the portfolio knowledge."
    ),
    "job-match": (
        "Treat the user input as a job description or role brief. Return: "
        "1) short fit summary, 2) matching strengths, 3) likely strengths, "
        "4) one closing recommendation sentence. Stay grounded in the portfolio knowledge only."
    ),
    "case-study": (
        "Explain the requested work theme as a polished case study using the structure: "
        "Challenge, Approach, Stack, Impact. Do not invent confidential client details."
    ),
}


def route_mode(state: PortfolioAIState) -> dict:
    explicit_mode = state.requested_mode

    if explicit_mode in MODE_INSTRUCTIONS:
        return {"resolved_mode": explicit_mode}

    question = state.question.lower()

    if any(keyword in question for keyword in ["job description", "job role", "fit for", "match"]):
        return {"resolved_mode": "job-match"}
    if any(keyword in question for keyword in ["case study", "challenge", "approach", "impact"]):
        return {"resolved_mode": "case-study"}

    return {"resolved_mode": "experience"}


def select_prompt_path(state: PortfolioAIState) -> str:
    return state.resolved_mode or "experience"


def build_experience_prompt(state: PortfolioAIState) -> dict:
    return {
        "instruction": MODE_INSTRUCTIONS["experience"],
        "prompt": state.question,
    }


def build_job_match_prompt(state: PortfolioAIState) -> dict:
    return {
        "instruction": MODE_INSTRUCTIONS["job-match"],
        "prompt": state.question,
    }


def build_case_study_prompt(state: PortfolioAIState) -> dict:
    return {
        "instruction": MODE_INSTRUCTIONS["case-study"],
        "prompt": state.question,
    }


def create_portfolio_graph(gemini_client: GeminiClient):
    async def generate_response(state: PortfolioAIState) -> dict:
        system_instruction = (
            "You are the AI layer inside Karthik Balabhadrapatruni's portfolio website.\n"
            f"{state.instruction}\n\n"
            "Use only the knowledge below as source material. If something is not supported "
            "by the knowledge, say so briefly rather than inventing.\n\n"
            f"Portfolio knowledge:\n{PORTFOLIO_KNOWLEDGE}"
        )

        answer = await gemini_client.generate(
            system_instruction=system_instruction,
            user_prompt=state.prompt or state.question,
        )

        return {"answer": answer}

    graph = StateGraph(PortfolioAIState)
    graph.add_node("route_mode", route_mode)
    graph.add_node("build_experience_prompt", build_experience_prompt)
    graph.add_node("build_job_match_prompt", build_job_match_prompt)
    graph.add_node("build_case_study_prompt", build_case_study_prompt)
    graph.add_node("generate_response", generate_response)

    graph.add_edge(START, "route_mode")
    graph.add_conditional_edges(
        "route_mode",
        select_prompt_path,
        {
            "experience": "build_experience_prompt",
            "job-match": "build_job_match_prompt",
            "case-study": "build_case_study_prompt",
        },
    )
    graph.add_edge("build_experience_prompt", "generate_response")
    graph.add_edge("build_job_match_prompt", "generate_response")
    graph.add_edge("build_case_study_prompt", "generate_response")
    graph.add_edge("generate_response", END)

    return graph.compile()


async def run_portfolio_agent(
    request: PortfolioAIRequest, gemini_client: GeminiClient
) -> PortfolioAIState:
    workflow = create_portfolio_graph(gemini_client)
    result = await workflow.ainvoke(
        {
            "question": request.question.strip(),
            "requested_mode": request.mode,
            "resolved_mode": None,
            "instruction": None,
            "prompt": None,
            "answer": None,
        }
    )

    return result
