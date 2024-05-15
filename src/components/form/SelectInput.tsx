"use client";
import { InputProps } from "@/lib/types";
import React from "react";

const SelectInput: React.FC<InputProps> = ({ data, inputLabel, setValue }) => {
  return (
    <div className="w-full flex flex-col mt-1">
      <label className="text-softColor text-[10px]" id="forma">
        {inputLabel}
      </label>
      <select
        name="platform"
        className={`w-full p-1 rounded-md text-textColor text-[12px] outline-none border `}
        onChange={(e: any) => {
          setValue(e);
        }}
      >
        {data.map((platform) => (
          <option
            key={platform.name}
            value={platform.name !== "Choose Platform" ? platform.name : ""}
          >
            {platform.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
