import { ReactNode } from 'react';

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
        <div className="px-6 pt-4 pb-2">
          <div className="flex gap-2">
            {Array.from({ length: totalSteps }, (_, i) => (
              <div
                key={i}
                className="progress-indicator flex-1"
              >
                <div
                  className={`progress-fill ${
                    i < currentStep ? 'w-full' : 'w-0'
                  }`}
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