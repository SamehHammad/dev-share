import React from "react";
import Input from "../form/Input";
import { MdOutlineSecurity } from "react-icons/md";

const Preview = ({
  url,
  setPreveiw,
}: {
  url: string;
  setPreveiw: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="relative flex flex-col gap-1 bg-secBg shadow-xl rounded-lg text-textColor transition-all duration-300 min-w-[12rem] ">
      <div className="flex flex-col w-[78px] h-3 bg-black rounded-2xl absolute left-[29%] -top-[1px]"></div>
      <Input
        placeholder="url"
        name="url"
        value={url}
        style="w-full mt-2 border-2 outline p-0 text-xs"
        readOnly={true}
        setValue={() => {}}
      />
      <MdOutlineSecurity className="absolute top-[15px] left-1 text-sm shadow-lg" />
      <p
        className=" absolute right-1 top-8 text-center w-6 h-6 rounded-full bg-[red] text-white cursor-pointer  "
        onClick={() => setPreveiw(false)}
      >
        X
      </p>
      <div className=" p-1 border-t max-h-full min-h-[22rem] bg-mainColor overflow-scroll scrollbar-hide">
        <iframe src={url} className="w-full h-full border-none" />
      </div>
    </div>
  );
};

export default Preview;
