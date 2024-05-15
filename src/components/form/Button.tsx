import React from "react";
import Link from "next/link";

interface ButtonProps {
  text: string;
  onClick: () => void;
  className?: string;
  href?: string;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, href, className }) => {
  const buttonContent = (
    <button
      onClick={onClick}
      className={`border border-mainColor px-2 py-1 text-xs rounded font-bold transition-colors duration-300
       ${className}`}
    >
      {text}
    </button>
  );

  return href ? <Link href={href}>{buttonContent}</Link> : buttonContent;
};

export default Button;
