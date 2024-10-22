import { Avatar } from "@mui/material";
import React from "react";
import { GoFileMedia } from "react-icons/go";
import { SlCalender } from "react-icons/sl";
import { MdArticle } from "react-icons/md";

const FeedSection: React.FC = () => {
  return (
    <div className="bg-white p-3 h-fit rounded-lg mt-2">
      <div>
        <div className="flex gap-3">
          <Avatar style={{ width: "50px", height: "50px" }} />
          <input
            type="text"
            placeholder="Start a post"
            className="w-full rounded-full px-6 outline-none bg-gray-200 border border-gray-400 placeholder:font-semibold placeholder:text-gray-700"
          />
        </div>
        <div className="flex mt-3 justify-around">
          <div className="flex items-center gap-3 hover:bg-gray-200 p-2 md:p-3 rounded-sm cursor-pointer">
            <GoFileMedia className="text-blue-700" size={20} />
            <h2>Media</h2>
          </div>
          <div className="flex items-center gap-3 hover:bg-gray-200 p-2 md:p-3 rounded-sm cursor-pointer">
            <SlCalender size={20} className="text-orange-500" />
            <h2>Event</h2>
          </div>
          <div className="flex items-center gap-3 hover:bg-gray-200 p-2 md:p-3 rounded-sm cursor-pointer">
            <MdArticle size={25} className="text-orange-700" />
            <h2>Write article</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedSection;
