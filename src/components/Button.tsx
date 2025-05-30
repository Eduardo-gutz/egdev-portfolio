import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary';
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className, variant = 'primary', type = 'button', disabled = false }) => {
  const buttonClass = variant === 'primary' ? 'bg-accent/60 text-white px-6 py-3 rounded-full hover:bg-accent/50 border border-accent' : 'bg-secondary text-white px-6 py-3 rounded-full hover:bg-accent/50 border border-accent';
  return (
    <button
      className={`${buttonClass} ${className || ''}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button; 