import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export function Button({ variant = 'primary', children, ...props }: ButtonProps) {
  const baseStyles = "px-8 py-4 rounded-full text-xl font-bold transition-all";
  const variants = {
    primary: "bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90",
    secondary: "bg-white/10 hover:bg-white/20"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]}`}
      {...props}
    >
      {children}
    </button>
  );
}