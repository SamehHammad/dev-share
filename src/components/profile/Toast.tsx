import { toastType } from "@/lib/types";
import React from "react";

const Toast = ({ text, icon, style }: toastType) => {
  return (
    <div
      id="toast-simple"
      className={`flex gap-1 items-center text-[13px] md:text-[13px] w-auto p-2  bg-black text-white bg-opacity-80 rounded-lg shadow ${style}`}
      role="alert"
    >
      {icon}
      <div className=" font-normal text-[9px] md:text-[11px] w-auto whitespace-nowrap">
        {text}
      </div>
    </div>
  );
};

export default Toast;
