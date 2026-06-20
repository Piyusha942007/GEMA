import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverLift?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hoverLift = true,
  ...props
}) => {
  return (
    <div
      className={`bg-white rounded-3xl border border-slate-100 p-6 md:p-8 shadow-sm transition-all duration-300 ${
        hoverLift ? 'hover:-translate-y-0.5 hover:shadow-md' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
export default Card;
