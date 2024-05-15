import React from "react";

const Skeleton = ({style}:{style:string}) => {
  return (
    <div className={`${style} bg-slate-200 animate-pulse`}></div>
  );
};

export default Skeleton;
