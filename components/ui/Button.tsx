import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'ghost';
}

export const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 text-base font-medium transition-all duration-200 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-blue rounded-none";
  
  const variants = {
    primary: "bg-accent-blue text-white hover:bg-accent-blue-hover border-transparent",
    outline: "bg-transparent text-accent-blue border-accent-blue hover:bg-accent-blue hover:text-white",
    ghost: "bg-transparent text-accent-blue border-transparent hover:bg-stone-100 px-4 py-2",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};