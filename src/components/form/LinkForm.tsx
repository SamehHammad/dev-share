"use client";
import React, { useState, useCallback, useMemo } from "react";
import SelectInput from "./SelectInput";
import Input from "./Input";
import { HiMiniLink } from "react-icons/hi2";
import { LinkFormProps } from "@/lib/types";
import { platforms } from "@/lib/data";
import { FaRegCopy } from "react-icons/fa";
import Toast from "../profile/Toast";
import { TbMenu } from "react-icons/tb";
import { isValidUrl } from "@/lib/actions";

const LinkForm: React.FC<LinkFormProps> = ({
  link,
  num,
  id,
  platform,
  errorMessage,
  setPlatform,
  onDelete,
  setLinkColor,
  setLinkIcon,
  onChangeHandler,
}) => {
  const [showToast, setShowToast] = useState(false);

  // Memoize the logic to determine the input field style based on error state
  const inputStyle = useMemo(() => {
    return errorMessage && !isValidUrl(link?.url)
      ? "outline-1 border-[red]"
      : "";
  }, [errorMessage, link?.url]);

  // Memoize the copy link handler to prevent unnecessary re-creation
  const handleLinkClick = useCallback((linkUrl: string) => {
    navigator.clipboard.writeText(linkUrl);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  }, []);

  return (
    <form
      id={id}
      className=" w-full p-2 bg-appBg rounded-xl shadow-sm hover:shadow-md"
      onSubmit={(e: any) => e.preventDefault()}
    >
      <div className="flex justify-between w-full text-[12px] text-softColor">
        <div className="flex items-center gap-1 ">
          <TbMenu />
          <p className=" whitespace-nowrap font-bold ">{` Link #${num}`}</p>
        </div>

        <button
          onClick={(e: any) => {
            e.preventDefault();
            onDelete();
          }}
          className="hover:shadow-md py-1 px-3 rounded-md focus:text-mainColor "
        >
          remove
        </button>
      </div>
      <SelectInput
        data={platforms}
        inputLabel="Platform"
        platform={platform}
        value={link?.platform}
        setPlatform={setPlatform}
        setLinkColor={setLinkColor}
        setLinkIcon={setLinkIcon}
        setValue={onChangeHandler}
      />
      <div className="w-full flex flex-col mt-1">
        <label
          htmlFor={platform}
          className="relative focus-within:text-gray-600 block text-softColor text-[10px]"
        >
          link
          <HiMiniLink className="pointer-events-none absolute text-sm bottom-[7px] left-1 " />
          <Input
            placeholder="Enter url (e.g., http://www.example.com)"
            name="url"
            id={link?.platform}
            value={link?.url}
            setValue={onChangeHandler}
            style={inputStyle}
            isUrl={true}
            readOnly={false}
          />
          {link?.url && ( // Check if link?.url exists before rendering the copy icon
            <FaRegCopy
              className="cursor-pointer absolute text-sm w-5 bg-white bottom-[7px] right-1"
              onClick={() => handleLinkClick(link?.url)}
            />
          )}
        </label>
      </div>
      {showToast && (
        <Toast
          text="Linked copied successfully"
          style="absolute top-[70px] left-[20%] "
          icon={<FaRegCopy />}
        />
      )}
    </form>
  );
};

export default LinkForm;
