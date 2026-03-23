'use client';

import { useState, useTransition } from 'react';
import { aiModes } from '../lib/portfolio-ai-data';

const initialMode = aiModes[0].id;

export default function PortfolioAI() {
  const [mode, setMode] = useState(initialMode);
  const [question, setQuestion] = useState(aiModes[0].suggestion);
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState('');
  const [isPending, startTransition] = useTransition();

  const activeMode = aiModes.find((item) => item.id === mode) ?? aiModes[0];

  function handleModeChange(nextMode) {
    const selected = aiModes.find((item) => item.id === nextMode) ?? aiModes[0];
    setMode(selected.id);
    setQuestion(selected.suggestion);
    setAnswer('');
    setError('');
  }

  function handleSubmit(event) {
    event.preventDefault();
    setError('');

    startTransition(async () => {
      try {
        const response = await fetch('/api/portfolio-ai', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            mode,
            question,
          }),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || 'Unable to generate a response right now.');
        }

        setAnswer(data.answer || '');
      } catch (submissionError) {
        setError(submissionError.message);
      }
    });
  }

  return (
    <section className="section-block ai-section" id="ai">
      <div className="ai-header">
        <div className="section-header">
          <p>Portfolio AI</p>
          <h2>Ask this portfolio the questions recruiters and hiring managers actually care about.</h2>
          <span>
            This is a focused AI layer on top of your resume and portfolio context, designed for experience Q and A, job matching, and case study explanations.
          </span>
        </div>
        <div className="ai-badges">
          <span>Python FastAPI</span>
          <span>LangGraph workflow</span>
          <span>Recruiter-friendly</span>
          <span>Portfolio grounded</span>
        </div>
      </div>

      <div className="ai-layout">
        <div className="ai-modes" role="tablist" aria-label="AI use cases">
          {aiModes.map((item) => (
            <button
              key={item.id}
              type="button"
              className={item.id === mode ? 'ai-mode-button active' : 'ai-mode-button'}
              onClick={() => handleModeChange(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <form className="ai-console" onSubmit={handleSubmit}>
          <label className="ai-label" htmlFor="portfolio-ai-input">
            Prompt
          </label>
          <textarea
            id="portfolio-ai-input"
            className="ai-textarea"
            value={question}
            onChange={(event) => setQuestion(event.target.value)}
            placeholder={activeMode.placeholder}
            rows={6}
          />

          <div className="ai-console-actions">
            <button className="button button-primary" type="submit" disabled={isPending || !question.trim()}>
              {isPending ? 'Thinking...' : 'Generate Answer'}
            </button>
            <button
              className="button button-secondary"
              type="button"
              onClick={() => {
                setQuestion(activeMode.suggestion);
                setAnswer('');
                setError('');
              }}
            >
              Use Example
            </button>
          </div>

          <div className="ai-response" aria-live="polite">
            {error ? <p className="ai-error">{error}</p> : null}
            {!error && answer ? <p>{answer}</p> : null}
            {!error && !answer ? (
              <p className="ai-placeholder">
                Try one of the example prompts to show how your experience can be summarized, matched, or explained.
              </p>
            ) : null}
          </div>
        </form>
      </div>
    </section>
  );
}
