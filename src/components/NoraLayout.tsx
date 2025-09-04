// @ts-ignore
import { ReactNode } from 'react';
import React from 'react';

interface NoraLayoutProps {
  children: ReactNode;
  showProgress?: boolean;
  currentStep?: number;
  totalSteps?: number;
}

export const NoraLayout = ({ 
  children, 
  showProgress = false, 
  currentStep = 1, 
  totalSteps = 3 
}: NoraLayoutProps) => {
  return (
    <div className="min-h-screen nora-background font-inter text-foreground">
      {showProgress && (
        <div className="px-6 pt-6 pb-4">
          <div className="flex gap-2">
            {Array.from({ length: totalSteps }, (_, i) => (
              <div
                key={i}
                className="progress-indicator flex-1 h-1 bg-white/20 rounded-full overflow-hidden"
              >
                <div
                  className={`h-full bg-gradient-to-r from-nora-yellow to-nora-yellow-light transition-all duration-700 ease-out ${
                    i < currentStep ? 'w-full' : 'w-0'
                  }`}
                  style={{
                    transitionDelay: i < currentStep ? `${i * 200}ms` : '0ms'
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      )}
      
      <div className="flex flex-col min-h-screen px-6">
        {children}
      </div>
    </div>
  );
};