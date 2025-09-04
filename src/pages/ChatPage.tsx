import { useState, useEffect, useRef } from 'react';
import { NoraLayout } from '../components/NoraLayout';
import { NoraLogo } from '../components/NoraLogo';
import { NoraInput } from '../components/NoraInput';
import { NoraButton } from '../components/NoraButton';
import { Menu, Send, Copy, Share, Bot, User } from 'lucide-react';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'nora';
  timestamp: Date;
}

export const ChatPage = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Load user data and create initial message
    const onboardingData = localStorage.getItem('noraOnboardingData');
    const goalsData = localStorage.getItem('noraGoalsData');
    
    if (onboardingData && goalsData) {
      const userData = JSON.parse(onboardingData);
      const goals = JSON.parse(goalsData);
      
      // Create personalized initial message
      const initialMessage: Message = {
        id: '1',
        content: `Nice to meet you ${userData.name}!\n\nHere's a clear strategy for you ${userData.name}!\n\nHow you could think about organizing your finances and planning for your goal of R$50k in 2 months to open Mocah Coffee.\n\n**1. Assess Your Current Situation**\n• Savings available: R$5,000\n• Monthly income: R$3,000\n• Timeframe: 2 months\n• Goal: R$50,000\n\n💡 This means you would need to raise R$45,000 more within just 2 months. That is a very ambitious goal, so you'll need a mix of savings, outside funding, and short-term income strategies.\n\n**2. Create a Realistic Budget**\n• Track all your fixed expenses (rent, utilities, food, transportation).\n• Minimize unnecessary spending—cut subscriptions, luxury items, and high-cost entertainment.\n• Allocate at least 50-70% of your monthly income toward your coffee shop savings.`,
        sender: 'nora',
        timestamp: new Date()
      };
      
      setMessages([initialMessage]);
    }
  }, []);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    const currentInput = input;
    setInput('');
    setIsLoading(true);

    try {
      // Get user context for personalized responses
      const onboardingData = localStorage.getItem('noraOnboardingData');
      const goalsData = localStorage.getItem('noraGoalsData');
      
      let contextPrompt = "You are NORA, a friendly and intelligent financial assistant. ";
      
      if (onboardingData && goalsData) {
        const userData = JSON.parse(onboardingData);
        const goals = JSON.parse(goalsData);
        contextPrompt += `The user's name is ${userData.name}. They have R$${userData.currentSavings || '5,000'} in savings, earn R$${userData.monthlyIncome || '3,000'} monthly, and their goal is to save R$${goals.targetAmount || '50,000'} in ${goals.timeframe || '2 months'} for ${goals.purpose || 'opening a coffee shop'}. `;
      }
      
      contextPrompt += "Provide helpful, personalized financial advice. Keep responses conversational and supportive. Use emojis sparingly and focus on actionable advice.";

      const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyD6TYXQPeUkg_MXJU31e8gjaiSbJt2WZbI', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: `${contextPrompt}\n\nUser message: ${currentInput}`
            }]
          }]
        })
      });

      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
      }

      const data = await response.json();
      const aiResponse = data.candidates?.[0]?.content?.parts?.[0]?.text || "I'm sorry, I couldn't process that request. Could you please try again?";

      const noraResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: aiResponse,
        sender: 'nora',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, noraResponse]);
    } catch (error) {
      console.error('Error calling Gemini API:', error);
      const errorResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: "I'm experiencing some technical difficulties right now. Please try again in a moment. In the meantime, I'm here to help with any financial questions you might have!",
        sender: 'nora',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, errorResponse]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <NoraLayout>
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-border">
        <NoraLogo size="sm" animated={false} />
        <button className="p-2 hover:bg-secondary rounded-lg transition-colors">
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto space-y-6">
        {messages.length === 0 && (
          <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <Bot className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Olá! Eu sou a NORA 👋</h3>
              <p className="text-muted-foreground max-w-md">
                Sua assistente financeira inteligente. Estou aqui para ajudar você a alcançar seus objetivos financeiros!
              </p>
            </div>
          </div>
        )}
        
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex items-start space-x-3 ${
              message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
            }`}
          >
            <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
              message.sender === 'nora' 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-secondary text-secondary-foreground'
            }`}>
              {message.sender === 'nora' ? (
                <Bot className="w-4 h-4" />
              ) : (
                <User className="w-4 h-4" />
              )}
            </div>
            <div className={`max-w-[80%] rounded-2xl px-4 py-3 ${
              message.sender === 'nora'
                ? 'bg-[rgba(0,0,0,0.2)] text-white'
                : 'bg-gradient-to-r from-[#99CEFF] via-[#A759D3] via-[#D8505B] to-[#FFC62B] text-white'
            }`}>
              <div className="whitespace-pre-wrap text-sm leading-relaxed">
                {message.content}
              </div>
              <div className={`text-xs mt-2 opacity-70 ${
                message.sender === 'user' ? 'text-right' : 'text-left'
              }`}>
                {message.timestamp.toLocaleTimeString('pt-BR', { 
                  hour: '2-digit', 
                  minute: '2-digit' 
                })}
              </div>
            </div>
          </div>
        ))}
        
        {isLoading && (
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0">
              <Bot className="w-4 h-4" />
            </div>
            <div className="bg-secondary rounded-2xl px-4 py-3">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Bottom Section */}
      <div className="pt-4 border-t border-border">
        {/* Quick Actions */}
        <div className="flex items-center justify-between mb-4">
          <button className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <span>💬 New Chat</span>
          </button>
          <div className="flex items-center space-x-2 text-sm">
            <span className="text-muted-foreground">💰 R$ 5,000</span>
            <button className="p-1 hover:bg-secondary rounded">
              <Share className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Input */}
        <div className="flex items-end space-x-3">
          <div className="flex-1">
            <NoraInput
              ref={inputRef}
              placeholder="Digite sua mensagem..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  sendMessage();
                }
              }}
              className="border-none bg-secondary resize-none min-h-[44px] max-h-32"
              disabled={isLoading}
            />
          </div>
          <NoraButton
            onClick={sendMessage}
            disabled={!input.trim() || isLoading}
            className={`p-3 min-w-0 transition-all duration-200 rounded-[2222px] flex items-center justify-center ${
              input.trim() && !isLoading 
                ? 'bg-gradient-to-r from-[#99CEFF] via-[#A759D3] via-[#D8505B] to-[#FFC62B] text-white hover:scale-[1.02] scale-100' 
                : 'bg-[rgba(0,0,0,0.2)] text-[#717171] scale-95'
            }`}
          >
            <Send className={`w-5 h-5 transition-transform duration-200 ${
              isLoading ? 'animate-pulse' : ''
            }`} />
          </NoraButton>
        </div>
      </div>
    </NoraLayout>
  );
};
