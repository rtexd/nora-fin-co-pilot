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
      className="min-h-screen nora-background font-inter text-foreground w-full mx-auto"
      style={{
        maxWidth: 'var(--app-width)',
        paddingLeft: 'var(--pad-x)',
        paddingRight: 'var(--pad-x)',
        paddingTop: 'var(--pad-y)',
        paddingBottom: 'var(--pad-y)'
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
      
      <div className="flex flex-col min-h-screen">
        {children}
      </div>
    </div>
  );
};
