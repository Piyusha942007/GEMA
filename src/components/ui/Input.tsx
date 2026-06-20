import { forwardRef } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  id: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, id, className = '', ...props }, ref) => {
    return (
      <div className="w-full flex flex-col gap-1.5">
        <label
          htmlFor={id}
          className="text-sm font-bold text-navy-800 font-display flex justify-between items-center"
        >
          <span>{label}</span>
          {props.required && <span className="text-brand-500 font-bold ml-1">*</span>}
        </label>
        <div className="relative">
          <input
            id={id}
            ref={ref}
            className={`w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-navy-900 font-medium transition-all placeholder:text-slate-400 focus:bg-white focus:border-brand-500 focus:ring-1 focus:ring-brand-500 ${
              error ? 'border-red-400 focus:border-red-500 focus:ring-red-500' : ''
            } ${className}`}
            {...props}
          />
        </div>
        {error && (
          <span className="text-xs font-semibold text-red-500 flex items-center gap-1 mt-0.5" role="alert">
            • {error}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
export default Input;
