import React from "react";
import linkdeIn from "../assets/linkedin.png";
import { BsSearch } from "react-icons/bs";
import HeaderIcon from "./HeaderIcon";
import { AiFillHome } from "react-icons/ai";
import { MdSupervisorAccount, MdHomeRepairService } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { IoNotifications } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";

interface Icon {
  id: number;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  size?: number;
  style?: string;
  logo?: string;
}

const Header: React.FC = () => {
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
      Icon: undefined
    },
  ];

  return (
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
          <HeaderIcon
            key={icon.id} // Added key for the map function
            id={icons.id}
            title={icon.title}
            Icon={icon.Icon}
            logo={icon.logo}
            size={icon.size}
            style={icon.style}
          />
        ))}
      </div>
    </div>
  );
};

export default Header;
