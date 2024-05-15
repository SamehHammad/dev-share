import React from "react";
import Mockup from "./Mockup";

const Popup = ({
  setShowMobile,
}: {
  setShowMobile: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <>
      <div className="relativ flex justify-center items-center absolute top-0 left-0 opacity-60 bg-black w-screen h-screen"></div>
      <div className=" absolute top-[10%] left-[40%] opacity-100 flex bg-appBg">
        <Mockup />
        <p
          className="absolute w-8 h-8 right-[-5px] top-[-5px] font-bold flex justify-center items-center rounded-full bg-[red] text-white cursor-pointer"
          onClick={() => setShowMobile(false)}
        >
          X
        </p>
      </div>
    </>
  );
};

export default Popup;
