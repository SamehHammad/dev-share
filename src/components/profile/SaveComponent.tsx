import React from "react";
import Button from "../form/Button";
import Toast from "./Toast";
import { IoIosSave } from "react-icons/io";

type SaveType = {
  handlesave: () => void;
  saved: boolean;
};
const SaveComponent = ({ saved, handlesave }: SaveType) => {
  return (
    <div className="fixed bottom-[20px] right-[18px] text-right  p-1 rounded-b-2xl xs:w-full sm:w-[56%] lg:w-[58%] bg-secBg border-t-4 border-t-appBg ">
      <div className={`${saved && "flex justify-between"}`}>
        {saved && (
          <Toast
            icon={<IoIosSave />}
            text="Your changes have been successfully saved!"
          />
        )}
        <Button
          text="Save"
          onClick={handlesave}
          className="bg-mainColor text-white py-2 px-4 hover:bg-white hover:text-mainColor z-10 w-[20%]"
        />
      </div>
    </div>
  );
};

export default SaveComponent;
