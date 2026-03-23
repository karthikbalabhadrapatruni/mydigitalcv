# Portfolio Agent Backend

This folder contains the Python AI backend for the portfolio.

Stack:
- `FastAPI` for the HTTP service
- `LangGraph` for routing and orchestration
- `Gemini` for text generation

## Run Locally

1. Create and activate a virtual environment.
2. Install dependencies:

```bash
pip install -r apps/agent/requirements.txt
```

3. Add environment variables in your shell or `.env` file:

```bash
GEMINI_API_KEY=your_gemini_api_key_here
GEMINI_MODEL=gemini-2.5-flash
PYTHON_AGENT_ALLOWED_ORIGINS=http://localhost:3000
```

4. Start the backend:

```bash
uvicorn apps.agent.app.main:app --reload --port 8000
```

## Endpoints

- `GET /health`
- `POST /api/portfolio-ai`

Example request:

```json
{
  "mode": "job-match",
  "question": "We need a full-stack engineer with React, Next.js, Node.js, AWS, and accessibility experience."
}
```
