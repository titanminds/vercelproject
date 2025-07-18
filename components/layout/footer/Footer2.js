import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const backendURL = 'https://vercelproject-production.up.railway.app/api';

export default function Footer2() {
  const getDefaultBotMessage = () => ({
    from: "bot",
    text: "Hi! I'm your AI Assistant 🤖. How can I help you today?",
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  });

  const starterQuestions = [
    "What are your business hours?",
    "Do you offer international shipping?",
  ];

  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [suggestions, setSuggestions] = useState([]);

  const chatRef = useRef(null);
  const chatBodyRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowChat(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showChat && messages.length === 0) {
      setMessages([getDefaultBotMessage()]);
      setSuggestions(starterQuestions);
    }
  }, [showChat, messages.length]);

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  useEffect(() => {
    const handler = (e) => {
      if (showChat && chatRef.current && !chatRef.current.contains(e.target)) {
        setShowChat(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [showChat]);

  useEffect(() => {
    if (showChat) inputRef.current?.focus();
  }, [showChat]);

  const handleSend = async (message = userInput) => {
    if (!message.trim()) return;

    const userMessage = {
      from: "user",
      text: message,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((m) => [...m, userMessage]);
    setUserInput("");
    setIsTyping(true);
    setSuggestions([]);

    try {
      const response = await fetch(`${backendURL}/ask`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: userInput }),
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      const data = await res.json();
      const botMessage = {
        from: "bot",
        text: data.reply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages((m) => [...m, botMessage]);
      setSuggestions(Array.isArray(data.suggestions) ? data.suggestions : []);
    } catch (err) {
      console.error("Fetch error:", err);
      const errorMessage = {
        from: "bot",
        text: "Oops! Something went wrong. Please try again later.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((m) => [...m, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleClear = () => {
    setMessages([getDefaultBotMessage()]);
    setSuggestions(starterQuestions);
    setUserInput("");
  };

  const renderMessage = (text) => {
    const urlRx = /(https?:\/\/[^\s]+)/g;
    const ytRx = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]+)/;
    const match = text.match(ytRx);

    if (match) {
      const id = match[1];
      const src = `https://www.youtube.com/embed/${id}`;
      return (
        <div>
          <p>{text.replace(ytRx, "")}</p>
          <div className="video-container">
            <iframe
              src={src}
              title="YouTube Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      );
    }

    return text.split(urlRx).map((part, i) =>
      urlRx.test(part) ? (
        <a key={i} href={part} target="_blank" rel="noopener noreferrer">{part}</a>
      ) : part
    );
  };

  return (
    <>
      <footer
        className="footer-style-two"
        style={{ backgroundColor: "#111111", color: "#ffffff" }}
      >
        <div className="widget-section" style={{ color: "#ffffff" }}>
          <div className="pattern-layer"></div>
          <div className="auto-container">
            <div className="row clearfix">
              {/* Logo Section */}
              <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget logo-widget" style={{ color: "#ffffff" }}>
                  <figure className="footer-logo">
                    <Link href="/index-2">
                      <img src="assets/images/logo-4.png" alt="Logo" />
                    </Link>
                  </figure>

                  <ul className="rating">
                    <li><i className="flaticon-rate-star-button"></i></li>
                    <li><i className="flaticon-rate-star-button"></i></li>
                    <li><i className="flaticon-rate-star-button"></i></li>
                    <li><i className="flaticon-rate-star-button"></i></li>
                    <li><i className="flaticon-rate-star-button"></i></li>
                  </ul>

                  <h6 style={{ color: "#ffffff" }}>
                    Reviewed by 1.5 million traders on Trustpilot.
                  </h6>

                  <Link href="/index-2" className="theme-btn btn-two" style={{ color: "#ffffff" }}>
                    <span>Read Reviews</span>
                  </Link>
                </div>
              </div>

              {/* Useful Links */}
              <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget links-widget" style={{ color: "#ffffff" }}>
                  <div className="widget-title">
                    <h3 style={{ color: "#ffffff" }}>Useful Links</h3>
                  </div>
                  <div className="widget-content">
                    <div className="row clearfix">
                      <div className="col-lg-6 col-md-6 col-sm-12 list-column">
                        <ul className="links-list clearfix">
                          <li><Link href="/index-2" style={{ color: "#ffffff" }}>Home</Link></li>
                          <li><Link href="/faq" style={{ color: "#ffffff" }}>Faq's</Link></li>
                          <li><Link href="/index-2" style={{ color: "#ffffff" }}>Help Center</Link></li>
                        </ul>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 list-column">
                        <ul className="links-list clearfix">
                          {/* Empty or add more links */}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Support Section */}
              <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget contact-widget" style={{ color: "#ffffff" }}>
                  <div className="widget-title">
                    <h3 style={{ color: "#ffffff" }}>Support</h3>
                  </div>
                  <div className="widget-content">
                    <p style={{ color: "#ffffff" }}>Find our office!</p>
                    <span className="address" style={{ color: "#ffffff" }}>
                      ZyntraFx, 191 Integer Rd, 2nd St, <br />
                      LA 08219 USA.
                    </span>
                    <p style={{ color: "#ffffff" }}>Prefer emailing us!</p>
                    <h5>
                      <Link href="mailto:sendmail@example.com" style={{ color: "#ffffff" }}>
                        sendmail@example.com
                      </Link>
                    </h5>
                    <p style={{ color: "#ffffff" }}>Prefer call us!</p>
                    <h5>
                      <Link href="tel:18007661234" style={{ color: "#ffffff" }}>
                        +1 800 766-1234
                      </Link>
                    </h5>
                    <ul className="social-links clearfix">
                      <li><Link href="/index-2" style={{ color: "#ffffff" }}><i className="flaticon-facebook"></i></Link></li>
                      <li><Link href="/index-2" style={{ color: "#ffffff" }}><i className="flaticon-user"></i></Link></li>
                      <li><Link href="/index-2" style={{ color: "#ffffff" }}><i className="flaticon-instagram-logo"></i></Link></li>
                      <li><Link href="/index-2" style={{ color: "#ffffff" }}><i className="flaticon-video-camera"></i></Link></li>
                      <li><Link href="/index-2" style={{ color: "#ffffff" }}><i className="flaticon-youtube"></i></Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom" style={{ color: "#ffffff" }}>
          <div className="auto-container">
            <div className="bottom-inner">
              <div className="copyright">
                <p style={{ color: "#ffffff" }}>
                  &copy; {new Date().getFullYear()}{" "}
                  <Link href="/index-2" style={{ color: "#ffffff" }}>
                    ZyntraFX
                  </Link>{" "}
                  Made with Expertise, All Rights Reserved.
                </p>
              </div>
              <ul className="footer-nav">
                <li><Link href="/index-2" style={{ color: "#ffffff" }}>Privacy Policy</Link></li>
                <li><Link href="/index-2" style={{ color: "#ffffff" }}>Terms & Conditions</Link></li>
                <li><Link href="/index-2" style={{ color: "#ffffff" }}>Legal</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      {/* Chatbot Component (added at the end) */}
      <div className="chat-launcher" onClick={() => setShowChat((v) => !v)} title="Chat with us">
        <img src="/assets/images/icons/ai-agent-icon.png" alt="AI Assistant" className="chat-icon" />
      </div>

      {showChat && (
        <div className="chatbot" ref={chatRef}>
          <div className="chat-header">
            <strong>AI Assistant</strong>
            <div className="chat-header-icons">
              <button onClick={handleClear} title="Clear Chat">🗑️</button>
              <button onClick={() => setShowChat(false)} title="Close Chat">❌</button>
            </div>
          </div>

          <div className="chat-body" ref={chatBodyRef}>
            {messages.map((m, i) => (
              <div key={i} className={`message ${m.from}`}>
                <div className="message-content">{renderMessage(m.text)}</div>
                <div className="message-timestamp">{m.timestamp}</div>
              </div>
            ))}
            {isTyping && (
              <div className="message bot">
                <div className="message-content">Typing...</div>
                <div className="message-timestamp">{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
              </div>
            )}

            {!isTyping && suggestions.length > 0 && (
              <div className="common-questions">
                <strong style={{ fontSize: '0.8rem' }}>Try asking:</strong>
                {suggestions.map((q, i) => (
                  <button key={i} className="suggestion-btn" onClick={() => handleSend(q)} style={{ fontSize: '0.75rem' }}>
                    {q}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="chat-input">
            <input
              ref={inputRef}
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Tell us how we can help..."
            />
            <button onClick={() => handleSend()}>▶</button>
          </div>

          <div className="chat-info-note">
            AI may reduce inaccurate information.
          </div>
        </div>
      )}

      <style jsx>{`
        /* Chatbot Styles */
        .chat-launcher {
          position: fixed;
          bottom: 20px;
          right: 20px;
          width: 60px;
          height: 60px;
          background: #fff;
          border: 2px solid #471b1b;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
          cursor: pointer;
          z-index: 1000;
        }
        .chat-icon {
          width: 40px;
          height: 40px;
        }
        .chatbot {
          position: fixed;
          bottom: 90px;
          right: 20px;
          width: 375px;
          height: 87vh;
          max-height: 500px;
          background: #fff;
          border-radius: 16px;
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.25);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          z-index: 1000;
        }
       .chat-header {
  background: #471b1b; 
  color: white;
  padding: 16px;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

        }
        .chat-header-icons button {
          background: #471b1b;
          border: none;
          color: white;
          font-size: 18px;
          margin-left: 12px;
          cursor: pointer;
        }
        .chat-body {
          padding: 16px;
          overflow-y: auto;
          background: #f7f7f7;
          flex: 1;
        }
        .message {
          margin-bottom: 12px;
          padding: 12px 16px;
          border-radius: 20px;
          font-size: 14px;
          max-width: 85%;
          position: relative;
        }
        .message-content {
          margin-bottom: 4px;
        }
        .message-timestamp {
          font-size: 10px;
          opacity: 0.7;
        }
        .message.bot {
          background: #e6f4ea;
          color: #333;
          align-self: flex-start;
        }
        .message.user {
          background: #d1f7ec;
          color: #000;
          align-self: flex-end;
          text-align: right;
        }
        .chat-input {
          display: flex;
          border-top: 1px solid #e0e0e0;
          background: #fff;
          padding: 12px;
        }
        .chat-input input {
          flex: 1;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 10px;
          outline: none;
          font-size: 14px;
          margin-right: 8px;
        }
        .chat-input button {
          background: #471b1b;
          border: none;
          color: white;
          padding: 10px 14px;
          border-radius: 10px;
          font-size: 14px;
          cursor: pointer;
        }
        .chat-info-note {
          padding: 10px;
          font-size: 12px;
          text-align: center;
          color: #666;
          background: #fafafa;
        }
        .common-questions {
          margin-top: 10px;
        }
        .suggestion-btn {
          margin: 5px 5px 0 0;
          padding: 6px 10px;
          background: #e0f7f1;
          border: 1px solid #471b1b;
          border-radius: 20px;
          cursor: pointer;
        }
      `}</style>
    </>
  );
}