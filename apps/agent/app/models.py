from typing import Literal, Optional
from typing_extensions import TypedDict

from pydantic import BaseModel, Field


PortfolioMode = Literal["experience", "job-match", "case-study", "auto"]


class PortfolioAIRequest(BaseModel):
    question: str = Field(..., min_length=1)
    mode: PortfolioMode = "auto"


class PortfolioAIResponse(BaseModel):
    answer: str
    resolved_mode: str


class PortfolioAIState(TypedDict):
    question: str
    requested_mode: PortfolioMode
    resolved_mode: Optional[str]
    instruction: Optional[str]
    prompt: Optional[str]
    answer: Optional[str]
