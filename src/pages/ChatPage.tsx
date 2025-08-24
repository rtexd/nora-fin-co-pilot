import { useState, useEffect } from 'react';
import { NoraLayout } from '../components/NoraLayout';
import { NoraLogo } from '../components/NoraLogo';
import { NoraInput } from '../components/NoraInput';
import { NoraButton } from '../components/NoraButton';
import { Menu, Send, Copy, Share } from 'lucide-react';

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
    setInput('');
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const noraResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: "That's a great question! Based on your current situation, I'd recommend focusing on building a diversified income stream while maintaining your savings discipline. Would you like me to break down some specific strategies for your coffee shop goal?",
        sender: 'nora',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, noraResponse]);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen nora-background font-inter text-foreground flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-border">
        <NoraLogo size="sm" animated={false} />
        <button className="p-2 hover:bg-secondary rounded-lg transition-colors">
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`chat-message ${
              message.sender === 'nora' ? 'from-nora' : ''
            }`}
          >
            <div className="whitespace-pre-wrap text-sm leading-relaxed">
              {message.content}
            </div>
          </div>
        ))}
        
        {isLoading && (
          <div className="chat-message from-nora">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Section */}
      <div className="p-4 border-t border-border">
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
        <div className="flex items-center space-x-3">
          <div className="flex-1">
            <NoraInput
              placeholder="Ask anything..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              className="border-none bg-secondary"
            />
          </div>
          <div className="flex items-center space-x-2">
            <button className="p-2 hover:bg-secondary rounded-lg transition-colors">
              <Copy className="w-5 h-5" />
            </button>
            <NoraButton
              onClick={sendMessage}
              disabled={!input.trim() || isLoading}
              className="p-2 min-w-0"
            >
              <Send className="w-5 h-5" />
            </NoraButton>
          </div>
        </div>
      </div>
    </div>
  );
};