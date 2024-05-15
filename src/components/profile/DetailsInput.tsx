import React from "react";
import Input from "../form/Input";
import { inputType } from "@/lib/types";

const DetailsInput = ({
  name,
  id,
  placeholder,
  label,
  style,
  readOnly,
  setValue,
}: inputType) => {
  return (
    <div className="flex justify-between w-full items-center">
      <label
        htmlFor="firstname"
        className="relative focus-within:text-gray-600 block text-softColor text-[10px] w-[40%]"
      >
        {label}
      </label>
      <Input
        name={name}
        id={id}
        placeholder={placeholder}
        setValue={setValue}
        style={style}
        readOnly={readOnly}
      />
    </div>
  );
};

export default DetailsInput;
