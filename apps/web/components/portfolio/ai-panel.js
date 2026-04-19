import { useEffect, useRef, useState } from 'react';
import { aiAnswers, aiFallback } from './data';

const INITIAL_BOT_MESSAGE =
  "Hey! I'm Karthik's AI. Ask me about his work, stack, AI projects, or if he's hiring. I know everything.";

function AiMessage({ message }) {
  if (message.who === 'k' && message.html) {
    return (
      <div className="ai-msg k">
        <span dangerouslySetInnerHTML={{ __html: message.html }} />
      </div>
    );
  }

  return <div className={`ai-msg ${message.who}`}>{message.text}</div>;
}

export default function AIPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 0,
      who: 'k',
      html: INITIAL_BOT_MESSAGE,
    },
  ]);

  const typingTimeoutRef = useRef(0);
  const nextIdRef = useRef(1);
  const messagesRef = useRef(null);

  useEffect(
    () => () => {
      window.clearTimeout(typingTimeoutRef.current);
    },
    [],
  );

  useEffect(() => {
    if (!messagesRef.current) {
      return;
    }

    messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
  }, [isTyping, isOpen, messages]);

  const getResponse = (value) => {
    const lower = value.toLowerCase();
    const matched = aiAnswers.find((entry) =>
      entry.keywords.some((keyword) => lower.includes(keyword)),
    );

    return matched ? matched.response : aiFallback;
  };

  const sendMessage = () => {
    const value = inputValue.trim();

    if (!value) {
      return;
    }

    window.clearTimeout(typingTimeoutRef.current);

    const userMessage = {
      id: nextIdRef.current,
      who: 'u',
      text: value,
    };
    nextIdRef.current += 1;

    setMessages((current) => [...current, userMessage]);
    setInputValue('');
    setIsTyping(true);

    const responseHtml = getResponse(value);

    typingTimeoutRef.current = window.setTimeout(() => {
      const botMessage = {
        id: nextIdRef.current,
        who: 'k',
        html: responseHtml,
      };
      nextIdRef.current += 1;

      setMessages((current) => [...current, botMessage]);
      setIsTyping(false);
    }, 900);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      <button
        className="ai-strip"
        id="ai-strip"
        onClick={() => setIsOpen((current) => !current)}
        type="button"
      >
        <div className="ai-pulse" />
        <div className="ai-label">
          <strong>portfolio_agent</strong> — ask me anything about Karthik
        </div>
        <div className="ai-arr" id="ai-arr">
          {isOpen ? '↑' : '↓'}
        </div>
      </button>

      <div className={isOpen ? 'open' : ''} id="ai-panel">
        <div className="ai-inner" id="ai-msgs" ref={messagesRef}>
          {messages.map((message) => (
            <AiMessage key={message.id} message={message} />
          ))}

          {isTyping ? (
            <div className="ai-msg k">
              <div className="dots-wrap">
                <div className="dot" />
                <div className="dot" />
                <div className="dot" />
              </div>
            </div>
          ) : null}
        </div>

        <div className="ai-input-wrap">
          <input
            className="ai-inp"
            id="ai-inp"
            onChange={(event) => setInputValue(event.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="what do you want to know about Karthik?"
            type="text"
            value={inputValue}
          />
          <button className="ai-btn" onClick={sendMessage} type="button">
            <svg viewBox="0 0 16 16">
              <path d="M1 8L14 1 8 14 7 9z" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
