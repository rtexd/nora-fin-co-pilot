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
    <div
      className="nora-background font-inter text-foreground mx-auto"
      style={{
        width: '402px',
        height: '874px',
        paddingLeft: '32px',
        paddingRight: '32px',
        paddingTop: '40px',
        paddingBottom: '40px',
        position: 'relative'
      }}
    >
      {showProgress && (
        <div>
          <div className="flex gap-2">
            {Array.from({ length: totalSteps }, (_, i) => (
              <div
                key={i}
                className={`flex-1 h-[6px] ${i < currentStep ? 'bg-[#99CFFF]' : 'bg-[#666666]'} rounded-lg`}
              />
            ))}
          </div>
          {/* Spacer between tabs and main content per design */}
          <div style={{ height: 'var(--gap-tabs-main)' }} />
        </div>
      )}
      
      <div className="flex flex-col h-full">
        {children}
      </div>
    </div>
  );
};