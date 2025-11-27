
import React, { FC, InputHTMLAttributes, PropsWithChildren } from 'react';

interface InputProps extends PropsWithChildren<InputHTMLAttributes<HTMLInputElement>> {
  label?: string;
  error?: string;
  className?: string;
}

const Input: FC<InputProps> = ({ label, error, className = '', ...rest }) => {
  const baseClasses = `
    px-4 py-3 border border-neutV-500 rounded-sm transition-colors duration-200
    text-neutV-700 border-neutV-900 placeholder:text-neutV-800
    focus:outline-none focus:bg-limeV-50 focus:border-limeV-700 focus:text-limeV-700
    hover:bg-limeV-50 hover:border-limeV-900 hover:text-limeV-700
    disabled:bg-neutral-100 disabled:cursor-not-allowed disabled:border-0
    w-full
  `;

  const errorClasses = `
   bg-redV-50 border-redV-900 focus:!border-redV-700 !text-redV-700
   focus:!bg-red-50 hover:bg-redV-100 placeholder:text-redV-900
  `;

  const labelClasses = `
    mb-1 me-2 
    ${error ? 'text-redV-700' : 'text-neutral-900'}
  `;

  const errorTextClasses = 'mt-1 me-2 text-sm sm:text-xs md:text-md lg:text-lg text-red-700';

  return (
    <div className="flex flex-col w-full">
      {label && <label className={labelClasses}>{label}</label>}
      <input
        className={`${baseClasses} ${error ? errorClasses : ''} ${className}`}
        {...rest}
      />
      {error && <p className={errorTextClasses}>{error}</p>}
    </div>
  );
};

export default Input;
