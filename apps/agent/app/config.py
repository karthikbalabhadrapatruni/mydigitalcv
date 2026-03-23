from functools import lru_cache
from typing import List
import os


class Settings:
    def __init__(self) -> None:
        self.gemini_api_key = os.getenv("GEMINI_API_KEY", "")
        self.gemini_model = os.getenv("GEMINI_MODEL", "gemini-2.5-flash")
        self.allowed_origins = self._parse_origins(
            os.getenv("PYTHON_AGENT_ALLOWED_ORIGINS", "http://localhost:3000")
        )

    @staticmethod
    def _parse_origins(raw_origins: str) -> List[str]:
        return [origin.strip() for origin in raw_origins.split(",") if origin.strip()]


@lru_cache(maxsize=1)
def get_settings() -> Settings:
    return Settings()
