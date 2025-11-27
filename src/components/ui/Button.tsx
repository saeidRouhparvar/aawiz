import React, { FC, PropsWithChildren, ButtonHTMLAttributes } from 'react';
import FadeLoader from './FadeLoader';

interface ButtonProps extends PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> {
  loading?: boolean;
}

const Button: FC<ButtonProps> = ({ children, loading = false, disabled, ...rest }) => {
  const isDisabled = loading || disabled;

  return (
    <button
      disabled={isDisabled}
      className={`
        px-4 py-3 rounded-sm transition-colors duration-200 w-full
        ${isDisabled 
          ? 'bg-neutV-400 text-neutV-200 cursor-not-allowed'
          : 'bg-limeV-600 text-white dark:text-black hover:bg-limeV-800 focus:bg-limeV-500'}
      `}
      {...rest}
    >
      {loading ? <FadeLoader size={10} gap={6} /> : children}
    </button>
  );
};

export default Button;
