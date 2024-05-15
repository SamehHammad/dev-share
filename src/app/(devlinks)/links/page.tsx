"use client";
import React, { useRef, useState, useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import {
  addNewLink,
  updateLinks,
  saveLinks,
  deleteLink,
} from "@/store/linkSlice";
import dynamic from "next/dynamic";
import { isValidUrl } from "@/lib/actions";
import { MdSendToMobile } from "react-icons/md";
import {
  getLastEditedLink,
  getLastSavedLink,
  getPlatformDetails,
} from "@/lib/actions";
//dynamic imports for lazy laoding to optimize page performance
const Button = dynamic(() => import("@/components/form/Button"));
const LinkForm = dynamic(() => import("@/components/form/LinkForm"));
const Mockup = dynamic(() => import("@/components/preview/Mockup"));
const SaveComponent = dynamic(
  () => import("@/components/profile/SaveComponent")
);
const Popup = dynamic(() => import("@/components/preview/Popup"));

const Links: React.FC = () => {
  //state management
  const [platform, setPlatform] = useState("");
  const [inputLink, setInputLink] = useState("");
  const [linkColor, setLinkColor] = useState("");
  const [linkIcon, setLinkIcon] = useState<JSX.Element | undefined>(undefined);
  const [saved, setSaved] = useState(false);
  const [showMobile, setShowMobile] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  //redux connection
  const dispatch = useDispatch();
  const links = useSelector((state: RootState) => state.links.links);
  const savedLinks = useMemo(() => links.filter((link) => link.saved), [links]);
  const exsitLink = useMemo(
    () => savedLinks.find((link) => link.platform === platform),
    [savedLinks, platform]
  );
  //adding new form to add link details
  const handleAddNewLink = useCallback(() => {
    setErrorMessage("");
    dispatch(
      addNewLink({
        id: Date.now(),
        url: "",
        platform: "Unknown Platform",
        saved: false,
        linkColor: "black",
      })
    );
    setTimeout(() => {
      const newLinkForm = document.getElementById(
        "link-form-" + (links.length + 1)
      );
      if (newLinkForm) {
        newLinkForm.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    }, 0);
  }, [dispatch, links.length]);
  // saving the new link details
  const handleSave = useCallback(async () => {
    if (!links.length || !isValidUrl(inputLink)) {
      setErrorMessage(
        "*Please enter a valid URL (e.g., http://www.example.com)."
      );
      return;
    }

    setErrorMessage("");
    setSaved(true);

    try {
      const targetLink =
        exsitLink || getLastEditedLink(links) || getLastSavedLink(links);
      if (exsitLink) {
        setErrorMessage("*The platform already exists.");
      } else if (!targetLink.saved) {
        dispatch(
          saveLinks({
            id: targetLink.id,
            changes: {
              platform,
              url: inputLink,
              linkColor,
              iconName: linkIcon,
              saved: true,
            },
          })
        );
      }
    } catch (error) {
      console.error("Error saving link:", error);
    } finally {
      setTimeout(() => setSaved(false), 5000);
    }
  }, [dispatch, exsitLink, inputLink, linkColor, linkIcon, links, platform]);
  //delete the link form
  const handleDeleteLink = useCallback(
    (id: number) => {
      dispatch(deleteLink(id));
    },
    [dispatch]
  );
  //control form inputs and update the links
  const onChangeHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
      const { name, value } = e.target;
      const isUrlName = name === "url";

      if (isUrlName) {
        setInputLink(value);
        dispatch(
          updateLinks({
            id: links[index].id,
            changes: { url: value },
          })
        );
      } else {
        const selectedPlatform = getPlatformDetails(value);
        if (selectedPlatform) {
          dispatch(
            updateLinks({
              id: links[index].id,
              changes: {
                platform: value,
                linkColor: selectedPlatform.bg,
                iconName: selectedPlatform.icon,
              },
            })
          );
          setPlatform(value);
          setLinkColor(selectedPlatform.bg ?? "black");
          setLinkIcon(selectedPlatform.icon);
        }
      }
    },
    [dispatch, links]
  );

  return (
    <div className="flex gap-2 mt-2 h-[107%] scrollbar-hide">
      <div className="flex justify-center w-[40%] bg-secBg rounded-xl xs:hidden sm:flex">
        {/*display the mobile mockup to dispaly the links and profile details*/}
        <Mockup />
      </div>
      <div className="relative sm:w-[60%] xs:w-full bg-secBg rounded-xl p-4 overflow-y-scroll overflow-hidden">
        <h3 className="text-lg font-bold text-textColor">
          Customize your links
        </h3>
        <p className="text-[10px] text-softColor mb-4 p-2">
          Add/edit/remove links below and then share all your profile to the
          world!
        </p>
        <Button
          text="+ Add new link"
          onClick={handleAddNewLink}
          className="w-full border border-mainColor text-mainColor hover:bg-mainColor hover:text-white"
        />
        {/*display forms */}

        <div className="flex flex-col gap-3 w-full my-3 rounded-md p-2 h-80 overflow-scroll scrollbar-hide">
          {links.map((link, index) => (
            <LinkForm
              key={link.id}
              id={"link-form-" + (index + 1)}
              num={index + 1}
              link={link}
              inputLink={inputLink}
              platform={platform}
              setInputLink={setInputLink}
              setPlatform={setPlatform}
              setLinkColor={setLinkColor}
              setLinkIcon={setLinkIcon}
              onDelete={() => handleDeleteLink(link.id)}
              errorMessage={errorMessage}
              exsitLink={exsitLink}
              onChangeHandler={(e: any) => onChangeHandler(e, index)}
            />
          ))}
        </div>
        {errorMessage && (!isValidUrl(inputLink) || exsitLink) && (
          <p className="sm:bottom-[25px] text-red-500 text-[11px] lg:text-[12px]">
            {errorMessage}
          </p>
        )}
        <SaveComponent handlesave={handleSave} saved={saved} />
        <div
          className="absolute bottom-36 flex justify-center items-center group rounded-full shadow-lg bg-appBg sm:hidden w-12 h-12 cursor-pointer hover:shadow-2xl"
          onClick={() => setShowMobile(true)}
        >
          {/*display the mockup in small screens for better responsive design*/}

          <span className="opacity-0 group-hover:opacity-100 absolute right-[-50px] whitespace-nowrap top-[-32px] z-99-mb-6 text-[9px] text-black bg-activeBg p-1 rounded-sm shadow-md font-bold">
            Mobile Mockup
          </span>
          <MdSendToMobile className="text-4xl" />
        </div>
      </div>
      {showMobile && <Popup setShowMobile={setShowMobile} />}
    </div>
  );
};

export default Links;
