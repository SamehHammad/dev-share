"use client";
import React, { useCallback, useEffect, useState } from "react";
import { FaRegCopy } from "react-icons/fa";
import LinkBtn from "../form/LinkBtn";
import { useSelector } from "react-redux";
import Image from "next/image";
import Skeleton from "../preview/Skeleton";
import { RootState } from "@/store/store";
import Toast from "../profile/Toast";
import Preview from "../preview/Preview";
import Loader from "../preview/Loader";

const UserCard = ({ fromMockup }: { fromMockup?: boolean }) => {
  // State variables for UI elements
  const [showToast, setShowToast] = useState(false);
  const [preview, setPreview] = useState(false);
  const [url, setUrl] = useState("");

  // Access state from Redux store using useSelector
  const links = useSelector((state: RootState) => state.links.links);
  const details = useSelector((state: RootState) => state.profile.details);
  const imageUrl = useSelector(
    (state: RootState) => state.profile.details.profileImage
  );

  // Filter saved links efficiently
  const savedLinks = links.filter((link) => link.saved === true);

  // Calculate skeleton elements only once
  const skeletons = Math.max(0, 4 - savedLinks.length); // Ensure non-negative value
  // Function to generate skeleton loading
  function generateSkeleton(num: number): React.ReactNode[] {
    const elements: React.ReactNode[] = [];
    for (let i = 0; i < num; i++) {
      elements.push(<Skeleton style="w-full h-7 rounded-sm" key={i} />);
    }
    return elements;
  }
  // Memoize handleLinkClick function to prevent unnecessary re-creation
  const handleLinkClick = useCallback(
    (linkUrl: string) => {
      const width = 435;
      const height = 628;
      const top = (window.screen.height - height) / 2;
      const left = (window.screen.width - width) / 2;

      navigator.clipboard.writeText(linkUrl);
      setShowToast(true);
      setUrl(linkUrl);

      setTimeout(() => {
        setPreview(true);
        setShowToast(false);
        window.open(
          linkUrl,
          "popupWindow",
          `width=${width},height=${height},top=${top},left=${left},resizable=yes,scrollbars=yes`
        );
      }, 3000);
    },
    [] // Empty dependency array as logic doesn't change
  );

  // Conditional rendering based on fromMockup prop
  if (preview && fromMockup)
    return <Preview url={url} setPreveiw={setPreview} />;
  return (
    <div className="flex flex-col gap-1 bg-secBg shadow-xl rounded-lg text-textColor transition-all duration-300 min-w-[12rem] ">
      <div className="rounded-t-lg h-32 overflow-hidden"></div>

      <div className="mx-auto w-20 h-20 relative mb-1 -mt-28 overflow-hidden">
        {imageUrl ? (
          <Image
            width={80}
            height={80}
            className="object-cover object-center h-20 w-20 rounded-full border-mainColor border-4"
            src={imageUrl}
            alt="Profile"
          />
        ) : (
          <Skeleton style="w-20 h-20 rounded-full" />
        )}
      </div>

      {/* User's name and email (conditional rendering with skeletons) */}
      <div className="text-center mt-2">
        {details.firstname && details.lastname ? (
          <h2 className="font-semibold">
            {details.firstname + " " + details.lastname}
          </h2>
        ) : (
          <Skeleton style="text-center mx-auto w-28 h-3 rounded-md" />
        )}
        {details.email ? (
          <p className="text-softColor text-[9px]">{details.email}</p>
        ) : (
          <Skeleton style="text-center mx-auto w-16 h-2 mt-2 rounded-md" />
        )}
      </div>

      {/* Saved links container with scrollbar */}
      <div className="flex flex-col gap-4 p-4 border-t mt-2 max-h-44 min-h-[12rem] overflow-scroll scrollbar-hide">
        {savedLinks.map((link) => (
          <LinkBtn
            key={link.id}
            onClick={() => {
              handleLinkClick(link.url);
            }}
            text={link.platform}
            className={`w-full text-white`}
            icon={link.iconName}
            style={{ backgroundColor: link.linkColor }}
          />
        ))}
        {showToast && (
          <>
            <div className=" flex justify-center z-0 absolute items-center top-0 left-0 opacity-10 bg-black w-full h-full rounded-3xl"></div>
            <div className="absolute -top-[50%] left-[30%]">
              <Loader />
            </div>
          </>
        )}
        {fromMockup && (
          <div className="flex flex-col gap-4">
            {generateSkeleton(skeletons)}
          </div>
        )}
      </div>

      {showToast && (
        <Toast
          text="Linked copied successfully"
          style="absolute top-[-40px] left-[20%] "
          icon={<FaRegCopy />}
        />
      )}
    </div>
  );
};

export default UserCard;
