// ProfileImage.tsx
import React, { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoImageOutline } from "react-icons/io5";
import { RootState } from "@/store/store";
import { updateImage } from "@/store/profileSlice";
import Image from "next/image";

const ProfileImage: React.FC = () => {
  const dispatch = useDispatch();
  const imageUrl = useSelector(
    (state: RootState) => state.profile.details.profileImage
  );

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          const imageDataUrl = reader.result as string;
          dispatch(updateImage(imageDataUrl));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-8 ">
      <div className="relative ">
        <Image
          width={80}
          height={80}
          className="w-36 h-w-36 mx-auto rounded-2xl border-1 border-mainColor"
          src={imageUrl || "/user.jpg"}
          alt="Profile"
        />
        <label
          htmlFor="profileImage"
          className="absolute top-0  flex justify-center items-center flex-col gap-1 w-full h-full cursor-pointer bg-black text-white bg-opacity-60 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-2xl"
        >
          <IoImageOutline className="text-[20px]" />
          <p className="text-center text-[12px]">Change Image</p>
        </label>
      </div>
      <div className="mb-4">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
          id="profileImage"
        />
      </div>
    </div>
  );
};

export default ProfileImage;
