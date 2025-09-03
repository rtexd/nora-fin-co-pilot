// @ts-ignore
import { ButtonHTMLAttributes, ReactNode } from 'react';
import React from 'react';

export interface NoraButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
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
  const baseClasses = 'font-inter font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed rounded-full focus:outline-none focus:ring-2 focus:ring-nora-yellow focus:ring-offset-2 focus:ring-offset-black';
  
  const variantClasses = {
    primary: 'bg-white text-black hover:bg-gray-100 active:bg-gray-200',
    secondary: 'bg-nora-yellow text-black hover:bg-nora-yellow-light active:bg-nora-yellow-dark',
    ghost: 'bg-transparent text-white hover:bg-white/10 active:bg-white/20',
    outline: 'bg-transparent border border-white/20 text-white hover:bg-white/10 hover:border-white/40 active:bg-white/20'
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm h-10',
    md: 'px-6 py-3 text-base h-12',
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
      `.replace(/\s+/g, ' ').trim()}
      {...props}
    >
      {children}
    </button>
  );
};