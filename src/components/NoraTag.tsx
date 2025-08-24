import { ReactNode } from 'react';

interface NoraTagProps {
  children: ReactNode;
  selected?: boolean;
  onClick?: () => void;
  variant?: 'default' | 'outlined';
}

export const NoraTag = ({ 
  children, 
  selected = false, 
  onClick,
  variant = 'default' 
}: NoraTagProps) => {
  return (
    <button
      onClick={onClick}
      className={`nora-tag ${selected ? 'selected' : ''} ${
        variant === 'outlined' ? 'border-2' : ''
      }`}
    >
      {children}
    </button>
  );
};