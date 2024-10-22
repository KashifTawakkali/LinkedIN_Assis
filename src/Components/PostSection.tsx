import React from "react";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import { Avatar } from "@mui/material";
import { BsGlobeAmericas } from "react-icons/bs";
import { AiOutlineDislike } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";
import { BiRepost } from "react-icons/bi";
import { FaTelegramPlane } from "react-icons/fa";

// Define types for post data
interface Post {
  id: number;
  name: string;
  following: boolean;
  follow: boolean;
  work: string;
  time: string;
  caption: string;
  image: string;
  likeCount: string;
  comments: number | false;
  repost: number | false;
}

const PostSection: React.FC = () => {
  const posts: Post[] = [
    {
      id: 0,
      name: "Mohammadkashif",
      following: true,
      follow: true,
      work: "Web Developer",
      time: "1w.",
      caption: '"Focusing on the journey, not just the destination."',
      image: img1,
      likeCount: "190 Likes",
      comments: 45,
      repost: 10,
    },
    {
      id: 1,
      name: "Harish",
      following: false,
      follow: false,
      work: "Front-end developer",
      time: "5d.",
      caption: "GOOGLE",
      image: img2,
      likeCount: "84 Likes",
      comments: 32,
      repost: 4,
    },
    {
      id: 2,
      name: "Sonny",
      following: false,
      follow: false,
      work: "Software Engineer",
      time: "1w.",
      caption: "De-Bugging",
      image: img3,
      likeCount: "129 Likes",
      comments: 7,
      repost: false,
    },
    {
      id: 3,
      name: "Swift",
      following: true,
      follow: true,
      work: "Bio-Chem",
      time: "1d.",
      caption: "",
      image: img4,
      likeCount: "142 Likes",
      comments: false,
      repost: false,
    },
  ];

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id} className="bg-white mt-3 p-3 md:rounded-lg">
          <div className="flex gap-4 text-sm items-center mb-3">
            <Avatar />
            <div className="flex flex-col w-full">
              <div className="flex gap-4 items-center">
                <h2 className="font-bold">{post.name}</h2>
                <div className="flex items-center w-full justify-between">
                  {post.following && <h2 className="text-xs">following</h2>}
                  {!post.follow && (
                    <button className="text-blue-800 hover:bg-blue-200 p-1 rounded-lg">
                      +follow
                    </button>
                  )}
                </div>
              </div>
              <div>
                <h2 className="text-xs">{post.work}</h2>
              </div>
              <div className="flex items-center gap-1">
                <h5>{post.time}</h5>
                <BsGlobeAmericas />
              </div>
            </div>
          </div>
          <div className="my-4">
            <h1 className="font-light">{post.caption}</h1>
          </div>
          <div>
            <img src={post.image} alt="posts" className="w-full" />
          </div>
          <div className="flex justify-between my-4 font-light text-xs">
            <h2>{post.likeCount}</h2>
            <div className="flex gap-4">
              {post.comments && <h2>{post.comments} comments</h2>}
              {post.repost && <li>{post.repost} repost</li>}
            </div>
          </div>
          <hr />
          <div className="flex justify-around mt-4 items-center">
            <div className="flex items-center gap-2 hover:bg-gray-200 rounded-md p-2 px-3 cursor-pointer">
              <AiOutlineDislike className="rotate-180" />
              <h1>Like</h1>
            </div>
            <div className="flex items-center gap-2 hover:bg-gray-200 rounded-md p-2 px-3 cursor-pointer">
              <FaRegCommentDots />
              <h1>Comment</h1>
            </div>
            <div className="flex items-center gap-2 hover:bg-gray-200 rounded-md p-2 px-3 cursor-pointer">
              <BiRepost />
              <h1>Repost</h1>
            </div>
            <div className="flex items-center gap-2 hover:bg-gray-200 rounded-md p-2 px-3 cursor-pointer">
              <FaTelegramPlane />
              <h1>Send</h1>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostSection;
