import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface NoraButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
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
  const baseClasses = 'font-inter font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantClasses = {
    primary: 'btn-nora-primary',
    secondary: 'btn-nora-secondary',
    ghost: 'bg-transparent text-foreground hover:bg-secondary'
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
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