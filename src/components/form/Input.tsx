import React from "react";
import { inputType } from "@/lib/types";

const Input = ({
  placeholder,
  name,
  id,
  setValue,
  isUrl,
  value,
  style,
  readOnly,
}: inputType) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <input
      type="text"
      id={id}
      name={name}
      value={value}
      className={`w-full p-1 px-5 rounded-md text-textColor text-[12px] outline-none border flex transition-colors duration-300 hover:border-superset focus:border-mainColor focus:ring-2 focus:ring-superset shadow-mainColor ${style}`}
      placeholder={placeholder}
      onChange={isUrl ? (e: any) => setValue(e) : handleChange}
      readOnly={readOnly}
    />
  );
};

export default Input;
