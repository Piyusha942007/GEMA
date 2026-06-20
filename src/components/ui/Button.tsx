import React from 'react';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className = '',
  variant = 'primary',
  size = 'md',
  isLoading = false,
  disabled,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-display font-semibold rounded-2xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-brand-500/20 active:scale-98 disabled:opacity-50 disabled:pointer-events-none disabled:scale-100';

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const variantStyles = {
    primary:
      'bg-brand-500 text-white hover:bg-brand-600',
    secondary:
      'bg-navy-800 text-white hover:bg-navy-900',
    outline:
      'bg-transparent text-navy-800 border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50',
    ghost:
      'text-navy-700 hover:bg-slate-100 hover:text-navy-900',
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && <Loader2 className="w-5 h-5 mr-2 animate-spin text-current" />}
      {children}
    </button>
  );
};
export default Button;
