// @ts-ignore
import { useNavigate } from 'react-router-dom';
import React from 'react';

export const WelcomePage = () => {
  const navigate = useNavigate();
  
  const handleGetStarted = () => {
    navigate('/permission');
  };
  
  const handleHowItWorks = () => {
    navigate('/how-it-works');
  };
  
  return (
    <div className="min-h-screen w-full max-w-[375px] mx-auto" style={{
      background: 'linear-gradient(180deg, rgba(0, 0, 0, 1) 57%, rgba(34, 34, 34, 1) 100%)'
    }}>
      {/* Progress Bar */}
      <div className="px-6 pt-8 pb-4">
        <div className="flex gap-[7px]">
          <div className="flex-1 h-[6px] bg-[#666666] rounded-lg overflow-hidden">
            <div className="w-full h-full bg-[#99CFFF] rounded-lg"></div>
          </div>
          <div className="flex-1 h-[6px] bg-[#666666] rounded-lg"></div>
          <div className="flex-1 h-[6px] bg-[#666666] rounded-lg"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 flex flex-col justify-between" style={{ height: 'calc(100vh - 120px)' }}>
        {/* Top Section - Presentation */}
        <div className="flex flex-col items-center text-center pt-16">
          <div className="flex flex-col items-center space-y-1">
            <p 
              className="text-[#B3B3B3] font-inter font-normal leading-[1.2] tracking-[0.04em] text-center"
              style={{
                fontSize: '19.879px',
                textShadow: '0px 0px 0.8283px rgba(0, 0, 0, 0.04), 0px 1.6566px 16.4833px rgba(32, 127, 251, 0.6), 0px -5.7982px 20.2107px rgba(43, 0, 255, 0.58)'
              }}
            >
              Hi, I am
            </p>
            <h1 
              className="font-normal leading-[1.2] text-center"
              style={{
                fontFamily: 'Montserrat Alternates',
                fontSize: '71.533px',
                background: 'radial-gradient(circle at 8% 59%, rgba(153, 207, 255, 1) 0%, rgba(119, 111, 255, 1) 32%, rgba(255, 133, 216, 1) 69%, rgba(255, 198, 43, 1) 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0px 0px 0.9842px rgba(0, 0, 0, 0.04), 0px 1.9685px 19.5861px rgba(32, 127, 251, 0.6), 0px -6.8896px 24.0151px rgba(43, 0, 255, 0.58)'
              }}
            >
              NORA
            </h1>
            <p 
              className="text-[#B3B3B3] font-inter font-normal leading-[1.2] tracking-[0.04em] text-center max-w-[226px]"
              style={{
                fontSize: '19.051px',
                textShadow: '0px 0px 0.8283px rgba(0, 0, 0, 0.04), 0px 1.6566px 16.4833px rgba(32, 127, 251, 0.6), 0px -5.7982px 20.2107px rgba(43, 0, 255, 0.58)'
              }}
            >
              your financial co-pilot
            </p>
          </div>
        </div>

        {/* Bottom Section - Description and Actions */}
        <div className="pb-8 space-y-4">
          <div className="text-left mb-4">
            <p className="text-[#F2A938] font-inter font-semibold text-base leading-[1.2] mb-1">
              In 90 seconds
            </p>
            <p className="text-white font-inter font-normal text-base leading-[1.2]">
              I create a starter plan with you
            </p>
          </div>
          
          <div className="space-y-4">
            <button
              onClick={handleGetStarted}
              className="w-full h-12 rounded-full font-inter font-semibold text-base text-white transition-all duration-300 hover:scale-[1.02]"
              style={{
                background: 'linear-gradient(90deg, rgba(153, 206, 252, 1) 0%, rgba(167, 89, 211, 1) 28%, rgba(216, 80, 91, 1) 75%, rgba(255, 198, 43, 1) 100%)',
                border: '1px solid transparent'
              }}
            >
              Get started!
            </button>
            
            <button
              onClick={handleHowItWorks}
              className="w-full h-12 rounded-full font-inter font-semibold text-base text-[#717171] transition-all duration-300 hover:text-white"
              style={{
                background: 'rgba(0, 0, 0, 0.2)',
                border: 'none'
              }}
            >
              How does the Ai work?
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};