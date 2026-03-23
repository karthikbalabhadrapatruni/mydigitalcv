export async function POST(request) {
  try {
    const { mode = 'experience', question = '' } = await request.json();

    if (!question.trim()) {
      return Response.json(
        { error: 'Please enter a question or job description.' },
        { status: 400 }
      );
    }

    const agentApiUrl = process.env.PORTFOLIO_AGENT_API_URL;

    if (!agentApiUrl) {
      return Response.json(
        {
          error:
            'PORTFOLIO_AGENT_API_URL is missing. Point it to the Python FastAPI agent service.',
        },
        { status: 500 }
      );
    }

    const response = await fetch(`${agentApiUrl}/api/portfolio-ai`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        mode,
        question,
      }),
      cache: 'no-store',
    });

    const data = await response.json();

    if (!response.ok) {
      return Response.json(
        {
          error: data?.detail || data?.error || 'Python agent request failed.',
        },
        { status: response.status }
      );
    }

    return Response.json({
      answer: data.answer || 'No response text was returned.',
      resolvedMode: data.resolved_mode || mode,
    });
  } catch (error) {
    return Response.json(
      {
        error:
          error instanceof Error ? error.message : 'Something went wrong while generating the AI response.',
      },
      { status: 500 }
    );
  }
}
