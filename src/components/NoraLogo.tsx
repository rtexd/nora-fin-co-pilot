
// @ts-ignore
import React from 'react';

interface NoraLogoProps {
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
}

export const NoraLogo = ({
  size = 'lg',
  animated = true
}: NoraLogoProps) => {
  const sizeClasses = {
    sm: 'text-3xl',
    md: 'text-5xl',
    lg: 'text-[4rem]'
  };

  return (
    <div className="text-center">
      <h1 className={`nora-logo font-montserrat font-normal ${animated ? 'nora-glow' : ''} lowercase tracking-tighter`} style={{width: '227px', height: '86px', fontSize: '70px', flexShrink: 0}}>
        NORA
      </h1>
    </div>
  );
};
