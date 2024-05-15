import React from "react";
import DetailsInput from "../profile/DetailsInput";
import { SetUserType } from "@/lib/types";

const UserForm = ({
  setFirstname,
  setLastname,
  setEmail,
  firstname,
  lastname,
  errorMessage,
}: SetUserType) => {
  return (
    <form action="" className="relative flex flex-col gap-3  w-full">
      <DetailsInput
        name="firstname"
        id="firstname"
        placeholder="Frist name"
        label={"First name*"}
        setValue={setFirstname}
        style={`${
          errorMessage && (!firstname || firstname.length < 3)
            ? "outline-1 border-[red]"
            : ""
        }`}
        readOnly={false}
      />
      <DetailsInput
        name="lastname"
        id="lastname"
        placeholder="Last name"
        label={"Last name*"}
        setValue={setLastname}
        style={`${
          errorMessage && (!lastname || lastname.length < 3)
            ? "outline-1 border-[red]"
            : ""
        }`}
        readOnly={false}
      />
      <DetailsInput
        name="email"
        id="email"
        placeholder="Email"
        label={"Email"}
        setValue={setEmail}
        readOnly={false}
      />
      {errorMessage && !firstname && !lastname && (
        <p className="absolute left-[28%] bottom-[-35px] sm:bottom-[-25px] text-red-500 text-[11px] lg:text-[12px] xl:text-sm ">
          {errorMessage}
        </p>
      )}
    </form>
  );
};

export default UserForm;
