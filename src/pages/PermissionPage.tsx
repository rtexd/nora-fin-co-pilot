
// @ts-ignore
import { useNavigate } from 'react-router-dom';
import React from 'react';
import { NoraLayout } from '../components/NoraLayout';
import { NoraLogo } from '../components/NoraLogo';

export const PermissionPage = () => {
  const navigate = useNavigate();
  
  const handleContinue = () => {
    navigate('/onboarding');
  };
  
  const handleSkip = () => {
    navigate('/onboarding');
  };
  
  return (
    <NoraLayout showProgress currentStep={2} totalSteps={3}>
      <div className="flex-1 flex flex-col justify-between py-6">
        {/* Header */}
        <div className="text-center px-4">
          <div className="mb-8">
            <NoraLogo size="md" />
          </div>
          
          <h1 className="text-2xl font-semibold text-white mb-4">
            To create your plan, I need access to your data
          </h1>
          
          <p className="text-white/80 text-lg leading-relaxed">
            Don't worry, your data is encrypted and secure. I only use it to understand your financial situation and create personalized recommendations.
          </p>
        </div>

        {/* Permission items */}
        <div className="flex-1 flex flex-col justify-center px-4">
          <div className="space-y-6">
            <div className="flex items-start space-x-4 p-4 bg-white/5 rounded-2xl border border-white/10">
              <div className="w-6 h-6 bg-nora-yellow rounded-full flex items-center justify-center mt-1">
                <span className="text-black text-sm font-bold">📊</span>
              </div>
              <div>
                <h3 className="text-white font-medium mb-1">Bank Account Data</h3>
                <p className="text-white/70 text-sm">To analyze your spending patterns and income</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 p-4 bg-white/5 rounded-2xl border border-white/10">
              <div className="w-6 h-6 bg-nora-yellow rounded-full flex items-center justify-center mt-1">
                <span className="text-black text-sm font-bold">💳</span>
              </div>
              <div>
                <h3 className="text-white font-medium mb-1">Credit Card Information</h3>
                <p className="text-white/70 text-sm">To understand your debt and payment history</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 p-4 bg-white/5 rounded-2xl border border-white/10">
              <div className="w-6 h-6 bg-nora-yellow rounded-full flex items-center justify-center mt-1">
                <span className="text-black text-sm font-bold">🎯</span>
              </div>
              <div>
                <h3 className="text-white font-medium mb-1">Financial Goals</h3>
                <p className="text-white/70 text-sm">To create a personalized savings and investment plan</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom buttons */}
        <div className="space-y-3 px-4">
          <button 
            onClick={handleContinue}
            className="w-full bg-white text-black hover:bg-gray-100 font-medium py-4 rounded-full text-lg transition-all duration-300"
          >
            Allow Access
          </button>
          
          <button 
            onClick={handleSkip}
            className="w-full bg-transparent text-white/70 hover:text-white font-medium py-4 rounded-full text-lg transition-all duration-300"
          >
            Skip for now
          </button>
        </div>
      </div>
    </NoraLayout>
  );
};
