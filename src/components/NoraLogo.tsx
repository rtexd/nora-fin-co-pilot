
// @ts-ignore
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface NoraLogoProps {
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
  clickable?: boolean;
}

export const NoraLogo = ({
  size = 'lg',
  animated = true,
  clickable = true
}: NoraLogoProps) => {
  const navigate = useNavigate();
  const sizeClasses = {
    sm: 'text-3xl',
    md: 'text-5xl',
    lg: 'text-[4rem]'
  };

  const handleClick = () => {
    if (clickable) {
      navigate('/');
    }
  };

  const logoElement = (
    <h1 className={`nora-logo font-montserrat font-normal ${animated ? 'nora-glow' : ''} lowercase tracking-tighter`} style={{width: '227px', height: '86px', fontSize: '70px', flexShrink: 0}}>
      NORA
    </h1>
  );

  if (clickable) {
    return (
      <div className="text-center">
        <button 
          onClick={handleClick}
          className="cursor-pointer hover:opacity-80 transition-opacity duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg"
          aria-label="Ir para página inicial"
        >
          {logoElement}
        </button>
      </div>
    );
  }

  return (
    <div className="text-center">
      {logoElement}
    </div>
  );
};
