
import React, { useState, useRef, useEffect } from 'react';
import { getAIResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIConsultant: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Greetings. I am the SkyNet Advisory Unit. How can I help you architect your digital future today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const response = await getAIResponse(userMsg, messages);
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsLoading(false);
  };

  return (
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto glass rounded-3xl overflow-hidden shadow-2xl flex flex-col h-[600px]">
        <div className="bg-cyan-500/10 p-6 border-b border-cyan-500/20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center cyan-glow">
              <i className="fas fa-robot text-white text-xl"></i>
            </div>
            <div>
              <h3 className="font-orbitron font-bold text-white leading-none">SkyNet Advisor</h3>
              <span className="text-xs text-cyan-400 font-bold uppercase tracking-widest animate-pulse">Neural Link Active</span>
            </div>
          </div>
          <div className="text-gray-500 text-sm hidden sm:block">
            Enterprise Consultation Module v4.2
          </div>
        </div>

        <div ref={scrollRef} className="flex-grow p-6 overflow-y-auto space-y-6 scrollbar-thin">
          {messages.map((m, idx) => (
            <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] p-4 rounded-2xl ${
                m.role === 'user' 
                  ? 'bg-cyan-600 text-white rounded-tr-none' 
                  : 'bg-gray-800 text-gray-200 border border-white/5 rounded-tl-none'
              }`}>
                <p className="text-sm leading-relaxed whitespace-pre-wrap">{m.text}</p>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-gray-800 p-4 rounded-2xl rounded-tl-none flex gap-2">
                <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce delay-100"></div>
                <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce delay-200"></div>
              </div>
            </div>
          )}
        </div>

        <div className="p-6 bg-gray-900/50 border-t border-white/5">
          <div className="flex gap-4">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Describe your business needs..."
              className="flex-grow bg-black/50 border border-white/10 rounded-xl px-5 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading}
              className="bg-cyan-500 hover:bg-cyan-400 text-black px-6 py-3 rounded-xl font-bold transition-all disabled:opacity-50"
            >
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>
          <p className="text-center text-[10px] text-gray-600 mt-4 uppercase tracking-[0.2em]">
            Powered by SkyNet Neural Networks & Gemini Flash
          </p>
        </div>
      </div>
    </div>
  );
};

export default AIConsultant;
