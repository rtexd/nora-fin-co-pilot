
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
      <h1 className={`nora-logo font-montserrat font-normal ${sizeClasses[size]} ${animated ? 'nora-glow' : ''} lowercase tracking-tighter`}>
        NORA
      </h1>
    </div>
  );
};
