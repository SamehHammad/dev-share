import React, { CSSProperties } from "react";

export interface LinkFormProps {
  num: number;
  id: any;
  link: Link;
  inputLink: string;
  platform: string;
  exsitLink: Link | undefined;
  errorMessage?: string;
  setInputLink: React.Dispatch<React.SetStateAction<string>>;
  setPlatform: React.Dispatch<React.SetStateAction<string>>;
  setLinkColor: React.Dispatch<React.SetStateAction<string>>;
  onChangeHandler: React.Dispatch<React.SetStateAction<string>>;
  setLinkIcon: React.Dispatch<React.SetStateAction<JSX.Element | undefined>>; // Corrected type
  onDelete: () => void;
}

export type inputType = {
  placeholder?: string;
  name: string;
  id?: string;
  value?: string;
  label?: string;
  style?: string;
  link?: Link;
  isUrl?: boolean;
  readOnly: boolean;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};
export type toastType = {
  text: string;
  style?: string;
  icon?: JSX.Element;
};
export type DataProps = {
  data: { id: number; name: string; icon?: JSX.Element; bg: string }[];
};

export interface InputProps {
  data: DataProps["data"];
  inputLabel: string;
  platform: string;
  link?: Link;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  setPlatform: React.Dispatch<React.SetStateAction<string>>;
  setLinkColor: React.Dispatch<React.SetStateAction<string>>;
  setLinkIcon: React.Dispatch<React.SetStateAction<JSX.Element | undefined>>;
}
export interface Link {
  id: number;
  url: string;
  platform: string;
  saved: boolean;
  linkColor?: string;
  iconName?: JSX.Element | null;
}

export interface LinkState {
  links: Link[];
}
export interface User {
  firstname: string;
  lastname: string;
  email: string;
  profileImage?: string | null;
}
export interface SetUserType {
  setFirstname: React.Dispatch<React.SetStateAction<string>>;
  setLastname: React.Dispatch<React.SetStateAction<string>>;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  errorMessage?: string;
  firstname: string;
  lastname: string;
}

export interface ProfileState {
  details: User;
}

export interface ButtonProps {
  text: string;
  onClick: () => void;
  className?: string;
  href?: string;
  style: CSSProperties;
  icon?: JSX.Element | null;
}
