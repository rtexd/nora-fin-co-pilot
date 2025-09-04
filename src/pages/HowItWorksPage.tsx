// @ts-ignore
import { useNavigate } from 'react-router-dom';
import { NoraLayout } from '../components/NoraLayout';
import { NoraLogo } from '../components/NoraLogo';
import { NoraButton } from '../components/NoraButton';
// @ts-ignore
import { ArrowLeft, Brain, Shield, Target } from 'lucide-react';

export const HowItWorksPage = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Analysis",
      description: "NORA analyzes your financial situation using advanced AI to provide personalized recommendations."
    },
    {
      icon: Shield,
      title: "Privacy Protected",
      description: "Your financial data is encrypted and secure. We never share your information with third parties."
    },
    {
      icon: Target,
      title: "Goal-Oriented Planning",
      description: "Set financial goals and get step-by-step guidance to achieve them with realistic timelines."
    }
  ];

  return (
    <NoraLayout>
      <div className="py-6">
        {/* Header */}
        <div className="flex items-center mb-8">
          <button 
            onClick={() => navigate('/')}
            className="p-2 hover:bg-secondary rounded-lg transition-colors mr-4"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <NoraLogo size="sm" animated={false} />
        </div>

        {/* Content */}
        <div className="space-y-8">
          <div className="text-center">
            <h1 className="text-2xl font-medium text-[#F2A938] mb-4">
              How NORA Works
            </h1>
            <p className="text-white font-inter font-normal text-base leading-[1.2]">
              Your AI financial co-pilot uses intelligent analysis to help you make better money decisions and reach your financial goals faster.
            </p>
          </div>

          <div className="space-y-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="chat-message">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-nora rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium text-white mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-[#B3B3B3] text-sm leading-[1.2]">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="chat-message from-nora">
            <h3 className="font-medium text-[#F2A938] mb-3">
              Getting Started is Simple:
            </h3>
            <ol className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3 mt-0.5 flex-shrink-0">1</span>
                <span>Answer a few quick questions about your financial situation</span>
              </li>
              <li className="flex items-start">
                <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3 mt-0.5 flex-shrink-0">2</span>
                <span>Set your financial goals and timeline</span>
              </li>
              <li className="flex items-start">
                <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3 mt-0.5 flex-shrink-0">3</span>
                <span>Get your personalized financial plan and ongoing guidance</span>
              </li>
            </ol>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <NoraButton 
          fullWidth 
          size="md"
          onClick={() => navigate('/permission')}
          className="h-[52px] leading-[1.5em] font-semibold"
        >
          Start Your Journey
        </NoraButton>
        
        <NoraButton 
          variant="outline-soft" 
          fullWidth
          size="md"
          onClick={() => navigate('/')}
          className="h-[52px] leading-[1.5em] font-semibold"
        >
          Back to Home
        </NoraButton>
      </div>
    </NoraLayout>
  );
};
