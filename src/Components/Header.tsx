import React, { useState } from "react";
import linkdeIn from "../assets/linkedin.png";
import { BsSearch } from "react-icons/bs";
import HeaderIcon from "./HeaderIcon";
import { AiFillHome } from "react-icons/ai";
import { MdSupervisorAccount, MdHomeRepairService } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { IoNotifications } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import MessageUI from "./messageUI"; // Import MessageUI component

interface Icon {
  id: number;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  size?: number;
  style?: string;
  logo?: string;
}

const Header: React.FC = () => {
  const [currentView, setCurrentView] = useState<"home" | "messages">("home"); // Track the current view

  const icons: Icon[] = [
    {
      id: 0,
      Icon: AiFillHome,
      title: "Home",
      size: 25,
    },
    {
      id: 1,
      Icon: MdSupervisorAccount,
      title: "My Network",
      size: 25,
    },
    {
      id: 2,
      Icon: MdHomeRepairService,
      title: "Jobs",
      size: 25,
    },
    {
      id: 3,
      Icon: BsFillChatDotsFill,
      title: "Messaging",
      size: 25,
    },
    {
      id: 4,
      Icon: IoNotifications,
      title: "Notification",
      size: 25,
    },
    {
      id: 5,
      Icon: BsThreeDots,
      title: "Menu",
      size: 25,
      style: "lg:hidden",
    },
    {
      id: 6, // Changed id to ensure uniqueness
      logo: linkdeIn,
      title: "Me",
      Icon: undefined,
    },
  ];

  // Function to handle icon clicks
  const handleIconClick = (title: string) => {
    if (title === "Messaging") {
      setCurrentView("messages"); // Show MessageUI when Messaging is clicked
    } else {
      setCurrentView("home"); // Go back to the home screen for other icons
    }
  };

  return (
    <div>
      {/* Header Bar */}
      <div className="p-3 flex justify-around sticky top-0 z-50 bg-white">
        <div id="Header-left" className="flex md:gap-2 ">
          <img src={linkdeIn} alt="LinkedIn" className="object-contain h-10" />
          <div className="flex md:bg-gray-200 items-center gap-2 px-4 rounded-md transition-p duration-300 focus-within:lg:pr-32 lg:focus-within:ring">
            <BsSearch size={15} />
            <input
              type="text"
              className="border-none outline-none bg-inherit hidden md:block"
              placeholder="Search"
            />
          </div>
        </div>
        <div id="Header-right" className="flex items-center gap-4 md:gap-5 ">
          {icons.map((icon) => (
            <div
              key={icon.id}
              onClick={() => handleIconClick(icon.title)} // Handle icon clicks
            >
              <HeaderIcon
                id={icon.id}
                title={icon.title}
                Icon={icon.Icon}
                logo={icon.logo}
                size={icon.size}
                style={icon.style}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Conditionally render components based on current view */}
      {currentView === "messages" && (
        <div className="fixed inset-0 bg-gray-50 z-40">
          <MessageUI />
        </div>
      )}
      {currentView === "home" && (
        <div className="p-4">
          {/* Your default home screen content here */}
          <h1 className="text-xl font-bold">Home Screen</h1>
          {/* You can add more components or content for the home screen */}
        </div>
      )}
    </div>
  );
};

export default Header;
