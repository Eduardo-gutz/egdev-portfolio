import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className, variant = 'primary' }) => {
  const buttonClass = variant === 'primary' ? 'bg-accent/60 text-white px-6 py-3 rounded-full hover:bg-accent/50 border border-accent' : 'bg-secondary text-white px-6 py-3 rounded-full hover:bg-accent/50 border border-accent';
  return (
    <button
      className={`${buttonClass} ${className || ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button; 