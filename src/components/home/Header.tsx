"use client";
import React from "react";
import Button from "../form/Button";

const Header = () => {
  return (
    <div className="flex justify-between bg-secBg p-3 w-full rounded text-textColor">
      <div className="flex items-center gap-1 font-bold">
        <div className="flex">
          <Button
            text="Back to Editor"
            onClick={() => {}}
            className=" text-mainColor hover:bg-mainColor hover:text-white  "
            href="/links"
          />
        </div>
      </div>
      <div className="flex gap-7 text-[12px]"></div>

      <div className="flex">
        <Button
          text="Share Links"
          onClick={() => {}}
          className=" text-white bg-mainColor  hover:bg-white hover:text-mainColor "
        />
      </div>
    </div>
  );
};

export default Header;
