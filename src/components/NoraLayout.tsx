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
    <div style={{
      width: '402px',
      height: '874px',
      background: 'linear-gradient(180deg, rgba(0, 0, 0, 1) 57%, rgba(34, 34, 34, 1) 100%)',
      position: 'relative',
      margin: '0 auto'
    }}>
      {showProgress && (
        <div style={{ position: 'absolute', left: '32px', top: '40px', width: '338px' }}>
          <div className="flex gap-2">
            {Array.from({ length: totalSteps }, (_, i) => (
              <div
                key={i}
                className={`flex-1 h-[6px] ${i < currentStep ? 'bg-[#99CFFF]' : 'bg-[#666666]'} rounded-lg`}
              />
            ))}
          </div>
        </div>
      )}
      
      <div style={{
        position: 'absolute',
        left: '32px',
        right: '32px',
        top: showProgress ? '210px' : '40px',
        bottom: '40px',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'auto'
      }}>
        {children}
      </div>
    </div>
  );
};
