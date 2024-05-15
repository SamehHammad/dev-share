import {
  FaYoutube,
  FaLinkedin,
  FaFacebook,
  FaTwitterSquare,
  FaWhatsappSquare,
} from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
export const platforms = [
  { id: 2, name: "Github", icon: <TbBrandGithubFilled />, bg: "#191919" },
  { id: 3, name: "YouTube", icon: <FaYoutube />, bg: "#FE0000" },
  { id: 4, name: "LinkedIn", icon: <FaLinkedin />, bg: "#1AA2F8" }, // Changed "Github" to "LinkedIn"
  { id: 5, name: "Facebook", icon: <FaFacebook />, bg: "#056BE4" }, // Changed "Github" to "LinkedIn"
  { id: 6, name: "Twitter", icon: <FaTwitterSquare />, bg: "#199DF0" }, // Changed "Github" to "LinkedIn"
  { id: 7, name: "Whatsapp", icon: <FaWhatsappSquare />, bg: "#2ACA57" }, // Changed "Github" to "LinkedIn"
];

export const defaultLinks = [
  {
    id: 1,
    url: "https://github.com/SamehHammad",
    platform: "Github",
    linkColor: "#191919",
    iconName: <TbBrandGithubFilled />,
    saved: true,
    edited: true,
  },
];
