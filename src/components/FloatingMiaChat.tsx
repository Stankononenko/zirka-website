'use client';

import { useState, useRef, useEffect } from 'react';
import { Send, Minimize2, MoreHorizontal } from 'lucide-react';
import Image from 'next/image';

interface Message {
  id: string;
  sender: 'user' | 'agent';
  text: string;
}

export default function FloatingMiaChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', sender: 'agent', text: 'Hi! 👋 I am Anastasiia. How can I help you scale your business today?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen, isTyping]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputValue.trim() || isTyping) return;

    const userText = inputValue.trim();
    const newMsg: Message = { id: Date.now().toString(), sender: 'user', text: userText };
    setMessages(prev => [...prev, newMsg]);
    setInputValue('');
    setIsTyping(true);

    try {
      // Build conversation history for API (skip the initial greeting)
      const conversationHistory = [...messages.filter(m => m.id !== '1'), newMsg].map(m => ({
        role: m.sender === 'user' ? 'user' as const : 'assistant' as const,
        content: m.text,
      }));

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: conversationHistory }),
      });

      if (!response.ok) throw new Error('Chat API error');

      const data = await response.json();
      setIsTyping(false);
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        sender: 'agent',
        text: data.reply,
      }]);
    } catch {
      setIsTyping(false);
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        sender: 'agent',
        text: 'Sorry, I\'m having a connection issue. You can reach us directly at +1 (587) 973-1455 or info@zirka.solutions!',
      }]);
    }
  };

  return (
    <>
      {/* Floating Avatar Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          style={{
            position: 'fixed',
            bottom: 24,
            right: 24,
            zIndex: 9999,
            backgroundColor: 'transparent',
            border: 'none',
            borderRadius: '50%',
            width: 64,
            height: 64,
            cursor: 'pointer',
            transition: 'transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
            animation: 'fadeInUp 0.5s ease-out',
            padding: 0
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          aria-label="Chat with Anastasiia"
        >
          <div style={{ position: 'relative', width: '100%', height: '100%', borderRadius: '50%', overflow: 'hidden', border: '2px solid rgba(255,255,255,0.1)' }}>
            <Image
              src="/images/founder-avatar.png"
              alt="Anastasiia"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          {/* Green Online Dot */}
          <div style={{
            position: 'absolute', bottom: 2, right: 2, width: 14, height: 14,
            backgroundColor: '#22c55e', borderRadius: '50%',
            border: '2px solid #030712'
          }} />
          {/* Pulse Ring for Online status */}
          <div style={{
            position: 'absolute', bottom: 2, right: 2, width: 14, height: 14,
            backgroundColor: '#22c55e', borderRadius: '50%',
            animation: 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
            zIndex: -1
          }} />
        </button>
      )}

      {/* Floating Chat Interface */}
      {isOpen && (
        <div style={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          zIndex: 10000,
          width: 'calc(100vw - 48px)',
          maxWidth: 360,
          backgroundColor: '#0f172a',
          border: '1px solid rgba(59, 130, 246, 0.15)',
          borderRadius: 24,
          overflow: 'hidden',
          boxShadow: '0 24px 80px rgba(0,0,0,0.6)',
          display: 'flex', flexDirection: 'column',
          height: 520,
          maxHeight: 'calc(100vh - 48px)',
          animation: 'fadeInUp 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.1)'
        }}>
          {/* Header */}
          <div style={{
            padding: '16px 20px',
            borderBottom: '1px solid rgba(255,255,255,0.05)',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            background: 'linear-gradient(to right, rgba(59, 130, 246, 0.1), transparent)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ position: 'relative', width: 44, height: 44 }}>
                <div style={{ width: '100%', height: '100%', borderRadius: '50%', overflow: 'hidden', position: 'relative' }}>
                  <Image src="/images/founder-avatar.png" alt="Anastasiia" fill style={{ objectFit: 'cover' }} />
                </div>
                <div style={{
                  position: 'absolute', bottom: 0, right: 0, width: 12, height: 12,
                  backgroundColor: '#22c55e', borderRadius: '50%',
                  border: '2px solid #0f172a'
                }} />
              </div>
              <div>
                <h3 style={{ color: 'white', fontSize: 16, fontWeight: 600, margin: '0 0 2px 0' }}>Anastasiia</h3>
                <p style={{ color: '#22c55e', fontSize: 13, margin: 0, display: 'flex', alignItems: 'center', gap: 4 }}>
                  Online
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              style={{
                background: 'rgba(255,255,255,0.05)', border: 'none',
                color: 'rgba(255,255,255,0.7)', width: 32, height: 32,
                borderRadius: '50%', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.05)')}
            >
              <Minimize2 size={16} />
            </button>
          </div>

          {/* Chat Messages */}
          <div style={{
            flex: 1, overflowY: 'auto', padding: 20,
            display: 'flex', flexDirection: 'column', gap: 16,
            background: '#030712'
          }}>
            <div style={{ textAlign: 'center', marginBottom: 8 }}>
              <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>Today</span>
            </div>

            {messages.map((msg) => (
              <div key={msg.id} style={{
                alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                maxWidth: '85%',
                display: 'flex', gap: 8,
                alignItems: 'flex-end'
              }}>
                {msg.sender === 'agent' && (
                  <div style={{ width: 24, height: 24, borderRadius: '50%', overflow: 'hidden', position: 'relative', flexShrink: 0 }}>
                    <Image src="/images/founder-avatar.png" alt="Anastasiia" fill style={{ objectFit: 'cover' }} />
                  </div>
                )}
                <div style={{
                  backgroundColor: msg.sender === 'user' ? '#3B82F6' : 'rgba(255,255,255,0.05)',
                  color: 'white',
                  padding: '12px 16px',
                  borderRadius: msg.sender === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                  fontSize: 14,
                  lineHeight: 1.5,
                  border: msg.sender === 'agent' ? '1px solid rgba(255,255,255,0.1)' : 'none',
                  whiteSpace: 'pre-wrap',
                }}>
                  {msg.text}
                </div>
              </div>
            ))}

            {isTyping && (
               <div style={{
                alignSelf: 'flex-start',
                maxWidth: '85%',
                display: 'flex', gap: 8,
                alignItems: 'flex-end'
              }}>
                <div style={{ width: 24, height: 24, borderRadius: '50%', overflow: 'hidden', position: 'relative', flexShrink: 0 }}>
                    <Image src="/images/founder-avatar.png" alt="Anastasiia" fill style={{ objectFit: 'cover' }} />
                </div>
                <div style={{
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  color: 'var(--text-muted)',
                  padding: '12px 16px',
                  borderRadius: '16px 16px 16px 4px',
                  fontSize: 14,
                  border: '1px solid rgba(255,255,255,0.1)',
                  display: 'flex', alignItems: 'center', gap: 4
                }}>
                  <MoreHorizontal size={16} className="typing-animation" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Box */}
          <div style={{
            padding: 16,
            borderTop: '1px solid rgba(255,255,255,0.05)',
            backgroundColor: '#0f172a'
          }}>
            <form onSubmit={handleSend} style={{ display: 'flex', gap: 8 }}>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..."
                style={{
                  flex: 1, padding: '12px 16px', borderRadius: 24,
                  backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                  color: 'white', fontSize: 14, outline: 'none'
                }}
              />
              <button
                type="submit"
                disabled={!inputValue.trim() || isTyping}
                style={{
                  backgroundColor: inputValue.trim() && !isTyping ? '#3B82F6' : 'rgba(255,255,255,0.1)',
                  color: inputValue.trim() && !isTyping ? 'white' : 'rgba(255,255,255,0.3)',
                  border: 'none', borderRadius: '50%',
                  width: 42, height: 42, flexShrink: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: inputValue.trim() && !isTyping ? 'pointer' : 'default',
                  transition: 'all 0.2s'
                }}
              >
                <Send size={18} style={{ marginLeft: -2, marginTop: 2 }} />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Global styles for this component */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        .typing-animation {
          animation: pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes ping {
          75%, 100% { transform: scale(1.5); opacity: 0; }
        }
      `}} />
    </>
  );
}
