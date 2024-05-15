//check url validation
import { platforms } from "@/lib/data";
import { Link } from "./types";
export const isValidUrl = (url: any) => {
  var urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
  return urlPattern.test(url);
};

export const getLastEditedLink = (links: Link[]) =>
  links.find((link) => !link.saved);
export const getLastSavedLink = (links: Link[]) => links[links.length - 1];

export const getPlatformDetails = (value: string) =>
  platforms.find(
    (platform) => platform.name === value && platform.name !== "Choose Platform"
  );

//validate first and last name
export const validateNameLength = (firstname: string, lastname: string) => {
  return firstname.length >= 3 && lastname.length >= 3;
};

export const errorMessage =
  "*First name and Last name must be at least 3 characters long.";
