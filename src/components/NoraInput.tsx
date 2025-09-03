// @ts-ignore
import { InputHTMLAttributes, forwardRef } from 'react';
import React from 'react';

interface NoraInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  variant?: 'default' | 'filled';
}

export const NoraInput = forwardRef<HTMLInputElement, NoraInputProps>(
  ({ label, error, variant = 'default', className = '', ...props }, ref) => {
    const baseInputClasses = 'w-full px-4 py-3 rounded-2xl font-inter text-white placeholder:text-white/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-nora-yellow focus:ring-offset-2 focus:ring-offset-black';
    
    const variantClasses = {
      default: 'bg-white/10 border border-white/20 hover:border-white/40 focus:border-nora-yellow',
      filled: 'bg-white/5 border border-white/10 hover:bg-white/10 focus:bg-white/15'
    };
    
    return (
      <div className="w-full">
        {label && (
          <label className="block text-lg font-medium text-white mb-3">
            {label}
            {props.required && <span className="text-nora-yellow ml-1">*</span>}
          </label>
        )}
        <input
          ref={ref}
          className={`
            ${baseInputClasses}
            ${variantClasses[variant]}
            ${error ? 'border-red-400 focus:ring-red-400' : ''}
            ${className}
          `.replace(/\s+/g, ' ').trim()}
          {...props}
        />
        {error && (
          <p className="mt-2 text-sm text-red-400">{error}</p>
        )}
      </div>
    );
  }
);

NoraInput.displayName = 'NoraInput';