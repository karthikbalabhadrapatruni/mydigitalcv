from typing import Literal

from .gemini import GeminiClient
from .models import PortfolioAIRequest
from .portfolio_knowledge import PORTFOLIO_KNOWLEDGE


ModeName = Literal["experience", "job-match", "case-study"]

MODE_INSTRUCTIONS: dict[ModeName, str] = {
    "experience": (
        "Answer like a recruiter-facing portfolio assistant. Be concise, confident, "
        "and evidence-based. Focus on the strengths supported by the portfolio knowledge."
    ),
    "job-match": (
        "Treat the user input as a job description or role brief. Return a short fit summary, "
        "matching strengths, likely strengths, and a closing recommendation sentence. "
        "Stay grounded in the portfolio knowledge only."
    ),
    "case-study": (
        "Explain the requested work theme as a portfolio-style case study using the structure "
        "Challenge, Approach, Stack, Impact. Do not invent confidential client details."
    ),
}


def resolve_mode(requested_mode: str, question: str) -> ModeName:
    if requested_mode in MODE_INSTRUCTIONS:
        return requested_mode  # type: ignore[return-value]

    lowered = question.lower()

    if any(keyword in lowered for keyword in ["job description", "fit for", "match", "hiring"]):
        return "job-match"
    if any(keyword in lowered for keyword in ["case study", "approach", "impact", "architecture"]):
        return "case-study"

    return "experience"


async def generate_portfolio_response(
    request: PortfolioAIRequest, gemini_client: GeminiClient
) -> tuple[str, ModeName]:
    resolved_mode = resolve_mode(request.mode, request.question)

    system_instruction = (
        "You are the AI layer inside Karthik Balabhadrapatruni's portfolio website.\n"
        f"{MODE_INSTRUCTIONS[resolved_mode]}\n\n"
        "Use only the knowledge below as source material. If something is not supported by "
        "the knowledge, say so briefly rather than inventing.\n\n"
        f"Portfolio knowledge:\n{PORTFOLIO_KNOWLEDGE}"
    )

    answer = await gemini_client.generate(
        system_instruction=system_instruction,
        user_prompt=request.question.strip(),
    )

    return answer, resolved_mode
