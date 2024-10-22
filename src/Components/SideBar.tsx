import React from "react";
import { Avatar } from "@mui/material";
import banner from "../assets/banner.jpg";

const SideBar: React.FC = () => {
  return (
    <div className="md:mx-3 lg:basis-1/4 md:basis-1/3 w- md:block">
      <div className="bg-white md:rounded-lg overflow-hidden shadow-md">
        <div className="flex flex-col items-center h-56 relative">
          <img src={banner} alt="" />

          <div className="absolute top-16 md:top-7 flex flex-col items-center">
            <div className="flex items-center">
              <Avatar style={{ width: "70px", height: "70px", padding: "5px" }} />
            </div>

            <h1 className="font-semibold mt-4 cursor-pointer hover:underline">Mohammadkashif Patel</h1>
            <h4 className="text-center font-extralight text-xs my-2 px-3">
              Full Stack Developer | Web Development Enthusiast | JavaScript | |TypeScript | React.js | Next JS | HTML/CSS | Node JS | MongoDB |
            </h4>
          </div>
        </div>

        <hr />
        <div className="my-2 px-3 py-1 hover:bg-gray-200 cursor-pointer hidden md:block">
          <h4 className="text-xs font-light">Connections</h4>
          <h4 className="text-sm font-semibold ">Connect with alumni</h4>
        </div>
        <hr />
        <div className="p-3 hover:bg-gray-200 cursor-pointer hidden md:block">
          <h4 className="font-extralight text-xs">Access exclusive tools & insights</h4>
          <h1 className="text-sm underline">Try Premium for free</h1>
        </div>
        <hr />
        <div className="p-3 hover:bg-gray-200 cursor-pointer rounded-b-lg hidden md:block">
          <h2 className="text-sm">My items</h2>
        </div>
      </div>

      <div className="mt-3 bg-white rounded-lg overflow-hidden shadow-md hidden md:block">
        <div className="flex flex-col text-blue-600 text-sm gap-2 font-semibold p-3">
          <h1 className="hover:underline cursor-pointer">Groups</h1>
          <h1 className="hover:underline cursor-pointer">Events</h1>
          <h1 className="hover:underline cursor-pointer">Followed Hashtags</h1>
        </div>
        <hr />
        <div className="flex justify-center py-3 hover:bg-gray-200 cursor-pointer">
          <h1>Discover more</h1>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
