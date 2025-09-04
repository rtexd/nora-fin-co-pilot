import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface NoraButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline-soft';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  fullWidth?: boolean;
}

export const NoraButton = ({ 
  variant = 'primary', 
  size = 'md',
  children, 
  fullWidth = false,
  className = '',
  ...props 
}: NoraButtonProps) => {
  const baseClasses = 'font-inter font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed rounded-[2222px] flex items-center justify-center';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-[#99CEFF] via-[#A759D3] via-[#D8505B] to-[#FFC62B] text-white border-transparent',
    secondary: 'btn-nora-secondary',
    ghost: 'bg-[rgba(0,0,0,0.2)] text-[#717171] hover:text-white border-none',
    'outline-soft': 'bg-[rgba(0,0,0,0.2)] text-[#717171] hover:text-white border-none'
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm h-10',
    // Align with Figma: 52px height, generous horizontal padding
    md: 'px-7 py-3 text-base h-[52px] leading-[1.5em]',
    lg: 'px-8 py-4 text-lg h-14'
  };

  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <button
      className={`
        ${baseClasses}
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${widthClass}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};
