"use client";
import React, { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import dynamic from "next/dynamic";
import { saveChanges } from "@/store/profileSlice";
import { RootState } from "@/store/store";
import { validateNameLength, errorMessage } from "@/lib/actions";
// Lazy load for better performance
const Mockup = dynamic(() => import("@/components/preview/Mockup"), {
  ssr: false,
});
const ProfileImage = dynamic(() => import("@/components/profile/ProfileImage"));
const SaveComponent = dynamic(
  () => import("@/components/profile/SaveComponent")
);
const UserForm = dynamic(() => import("@/components/preview/UserForm"));

const ProfileDetails: React.FC = () => {
  // User details state
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");

  // UI state
  const [saved, setSaved] = useState(false);
  const [errorMessageState, setErrorMessage] = useState("");

  // Access profile image from Redux store
  const imageUrl = useSelector(
    (state: RootState) => state.profile.details.profileImage || "/user.jpg"
  );

  const dispatch = useDispatch();

  // Handle save changes with validation and dispatch action
  const handleSaveChanges = useCallback(() => {
    if (!validateNameLength(firstname, lastname)) {
      setErrorMessage(errorMessage);
    } else {
      setSaved(true);
      dispatch(
        saveChanges({
          firstname,
          lastname,
          email,
          profileImage: imageUrl,
        })
      );
      setTimeout(() => setSaved(false), 5000);
    }
  }, [dispatch, firstname, lastname, email, imageUrl]);

  return (
    <div className="flex gap-2 mt-2">
      <div className="flex justify-center w-[40%] bg-secBg h-screen rounded-xl xs:hidden sm:flex">
        <Mockup />
      </div>
      <div className="relative sm:w-[60%] xs:w-full bg-secBg h-screen rounded-xl p-5">
        <h3 className="text-lg font-bold text-textColor">Profile Details</h3>
        <p className="text-[10px] text-softColor mb-4 p-2">
          Add your details to create a personal touch to your profile
        </p>
        <div className="flex flex-col gap-5">
          {/* Profile picture section */}
          <div className="flex justify-between items-center w-full bg-appBg p-3 gap-2 rounded-xl">
            <h3 className="text-[13px] text-softColor whitespace-nowrap">
              Profile picture
            </h3>
            <div className="relative">
              <ProfileImage />
            </div>
            <h3 className="text-[10px] text-softColor whitespace-break-spaces">
              Image must be below 1024x1024px. Use PNG, JPG, or BMP format.
            </h3>
          </div>

          {/* User form section */}
          <div className="flex justify-between items-center w-full bg-appBg p-3 gap-2 rounded-xl">
            <UserForm
              setFirstname={setFirstname}
              setLastname={setLastname}
              setEmail={setEmail}
              errorMessage={errorMessageState}
              firstname={firstname}
              lastname={lastname}
            />
          </div>
        </div>
        <SaveComponent handlesave={handleSaveChanges} saved={saved} />
      </div>
    </div>
  );
};

export default ProfileDetails;
