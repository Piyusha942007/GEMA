import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'teal' | 'violet';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'primary',
  className = '',
}) => {
  const variantStyles = {
    primary: 'bg-brand-50 text-brand-700 border border-brand-100/80',
    secondary: 'bg-navy-50 text-navy-700 border border-navy-100',
    teal: 'bg-accent-teal-light/50 text-accent-teal border border-accent-teal/25',
    violet: 'bg-accent-violet-light/50 text-accent-violet border border-accent-violet/25',
  };

  return (
    <span
      className={`inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide font-display ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
};
export default Badge;
