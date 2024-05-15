import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { RiFileUnknowFill } from "react-icons/ri";
import { ButtonProps } from "@/lib/types";

const LinkBtn: React.FC<ButtonProps> = ({
  text,
  onClick,
  href,
  icon,
  className,
  style,
}) => {
  const buttonContent = (
    <button
      className={`flex justify-between gap-2 px-4 py-2 text-[11px] rounded items-center  whitespace-nowrap ${className}`}
      style={style}
    >
      <div className="flex gap-2 items-center">
        {icon || <RiFileUnknowFill />}
        {text}
      </div>
      <div className="group relative">
        <span className="opacity-0 group-hover:opacity-100 absolute left-[-50px] top-[-32px] z-99-mb-6 text-[9px] text-black bg-activeBg p-1 rounded-sm shadow-md font-bold">
          Copy and Preview
        </span>
        <FaArrowRight
          className="hover:shadow-xl hover:scale-150  hover:text-[yellow]"
          onClick={onClick}
        />
      </div>{" "}
    </button>
  );

  return href ? (
    <Link href={href} className="text-center">
      {buttonContent}
    </Link>
  ) : (
    buttonContent
  );
};

export default LinkBtn;
