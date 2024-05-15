"use client";
import React from "react";
import { BsLink } from "react-icons/bs";
import { HiMiniLink } from "react-icons/hi2";
import { FaRegCircleUser } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Button from "../form/Button";

const Navbar = () => {
  const path = usePathname();
  const navs = [
    { nav: "Links", icon: <HiMiniLink />, link: "/links" },
    {
      nav: "Profile Details",
      icon: <FaRegCircleUser />,
      link: "/profileDetails",
    },
  ];
  return (
    <div className="flex justify-between bg-secBg p-3 w-full rounded text-textColor">
      <div className="flex items-center gap-1 font-bold">
        <BsLink className="bg-mainColor rounded-md text-[18px] w-5 text-white" />
        <h1 className=" ">devlinks</h1>
      </div>
      <div className="flex gap-7 text-[12px]">
        {navs.map((n) => (
          <Link
            key={n.link}
            href={n.link}
            className={`flex items-center justify-center gap-1 px-3 py-1 rounded hover:bg-activeBg  hover:text-mainColor ${
              n.link === path ? "bg-activeBg  text-mainColor font-bold" : ""
            }`}
          >
            {n.icon}
            <h3 className="">{n.nav}</h3>
          </Link>
        ))}
      </div>
      <div className="flex">
        <Button
          href="/"
          text="Preview"
          onClick={() => {}}
          className=" text-mainColor hover:bg-mainColor hover:text-white transition-colors duration-300"
        />
      </div>
    </div>
  );
};

export default Navbar;
