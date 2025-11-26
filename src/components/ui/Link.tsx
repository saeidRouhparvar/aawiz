import React, { FC, PropsWithChildren, ButtonHTMLAttributes } from "react";
import Link from "next/link";

type LinkButtonProps = PropsWithChildren & {
  href: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const LinkButton: FC<LinkButtonProps> = ({ children, href, ...rest }) => {
  return (
    <Link href={href} passHref>
      <button
        {...rest}
        className="
          border-b border-transparent border-dashed
          text-cyanV-700
          hover:text-cyanV-800 hover:border-cyanV-800
          focus:text-cyanV-500 focus:border-cyanV-500
          transition-colors duration-200
        "
      >
        {children}
      </button>
    </Link>
  );
};

export default LinkButton;
