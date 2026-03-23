# Karthik Portfolio Monorepo

Monorepo for Mohana Koundinya Karthik Balabhadrapatruni's portfolio.

## Apps

- [`apps/web`](/Users/karthikbalabhadrapatruni/Downloads/mydigitalcv/apps/web): Next.js portfolio UI
- [`apps/agent`](/Users/karthikbalabhadrapatruni/Downloads/mydigitalcv/apps/agent): FastAPI + Gemini backend

## Stack

- `Next.js` App Router for the portfolio
- `FastAPI` for the Python API service
- `Gemini` for model responses

## Monorepo Structure

```text
apps/
  web/
  agent/
packages/
```

## Environment Variables

Use [`.env.example`](/Users/karthikbalabhadrapatruni/Downloads/mydigitalcv/.env.example) as the shared starting point:

```bash
GEMINI_API_KEY=your_gemini_api_key_here
GEMINI_MODEL=gemini-2.5-flash
PORTFOLIO_AGENT_API_URL=http://127.0.0.1:8000
PYTHON_AGENT_ALLOWED_ORIGINS=http://localhost:3000
NEXT_PUBLIC_SITE_URL=http://localhost:3000
CONTACT_EMAIL=karthik.bmk3@gmail.com
```

## Run Locally

Web app:

```bash
npm install
npm run dev:web
```

Agent app:

```bash
pip install -r apps/agent/requirements.txt
uvicorn apps.agent.app.main:app --reload --port 8000
```

## Important Paths

- [`apps/web/app/page.js`](/Users/karthikbalabhadrapatruni/Downloads/mydigitalcv/apps/web/app/page.js): main portfolio page
- [`apps/web/components/portfolio-ai.js`](/Users/karthikbalabhadrapatruni/Downloads/mydigitalcv/apps/web/components/portfolio-ai.js): AI panel UI
- [`apps/web/app/api/portfolio-ai/route.js`](/Users/karthikbalabhadrapatruni/Downloads/mydigitalcv/apps/web/app/api/portfolio-ai/route.js): proxy from Next.js to Python
- [`apps/agent/app/main.py`](/Users/karthikbalabhadrapatruni/Downloads/mydigitalcv/apps/agent/app/main.py): FastAPI app
- [`apps/agent/app/service.py`](/Users/karthikbalabhadrapatruni/Downloads/mydigitalcv/apps/agent/app/service.py): request routing and prompt construction
- [`apps/agent/app/gemini.py`](/Users/karthikbalabhadrapatruni/Downloads/mydigitalcv/apps/agent/app/gemini.py): Gemini client
