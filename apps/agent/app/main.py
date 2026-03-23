from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

from .config import get_settings
from .gemini import GeminiClient
from .graph import run_portfolio_agent
from .models import PortfolioAIRequest, PortfolioAIResponse

settings = get_settings()

app = FastAPI(
    title="Portfolio Agent Service",
    description="FastAPI + LangGraph backend for the personal portfolio AI assistant.",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.allowed_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/health")
async def health() -> dict[str, str]:
    return {"status": "ok"}


@app.post("/api/portfolio-ai", response_model=PortfolioAIResponse)
async def portfolio_ai(request: PortfolioAIRequest) -> PortfolioAIResponse:
    gemini_client = GeminiClient(
        api_key=settings.gemini_api_key,
        model=settings.gemini_model,
    )

    try:
        result = await run_portfolio_agent(request, gemini_client)
    except ValueError as error:
        raise HTTPException(status_code=500, detail=str(error)) from error
    except RuntimeError as error:
        raise HTTPException(status_code=502, detail=str(error)) from error
    except Exception as error:
        raise HTTPException(
            status_code=500,
            detail="Unexpected error while running the portfolio agent workflow.",
        ) from error

    return PortfolioAIResponse(
        answer=result.answer or "No response text was returned.",
        resolved_mode=result.resolved_mode or "experience",
    )
