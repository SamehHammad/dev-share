import React from "react";
import UserCard from "../home/UserCard";

const Mockup = () => {
  return (
    <div className="flex justify-center bg-secBg mt-12">
      <div className="relative flex justify-center items-center xs:h-[368px] lg:h-[405px]  xs:w-[205px]  lg:w-[210px] border-2 border-[darkgrey] rounded-3xl ">
        <div className=" flex justify-center xs:h-[357px] lg:h-[392px]  xs:w-[192px] lg:w-[195px] border-2 border-[darkgrey] overflow-hidden rounded-3xl ">
          <span className="absolute top-[3px] z-10  border-[darkgrey] border-t-4 border-t-secBg w-20 lg:w-24 border-2 h-4 rounded-br-xl rounded-bl-xl"></span>
          <UserCard fromMockup={true} />
        </div>
      </div>
    </div>
  );
};

export default Mockup;
