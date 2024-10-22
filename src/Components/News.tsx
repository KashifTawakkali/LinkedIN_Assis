import React from "react";
import { BsFillInfoSquareFill, BsChevronCompactDown } from "react-icons/bs";

interface NewsProps {}

const News: React.FC<NewsProps> = () => {
  return (
    <div className="mx-3 lg:basis-1/3 hidden lg:block h-fit">
      <div className="bg-white rounded-lg overflow-hidden shadow-md">
        <div className="p-3">
          <div className="flex justify-between items-center">
            <h1 className="font-semibold">LinkedIn News</h1>
            <BsFillInfoSquareFill />
          </div>
        </div>

        <ul className="flex flex-col gap-1 cursor-pointer">
          {Array(5)
            .fill("")
            .map((_, index) => (
              <li key={index} className="px-3 py-1 hover:bg-gray-200">
                <div className="list-disc list-inside">
                  Rise of emotive marketing
                </div>
                <div className="flex items-center gap-5 text-xs font-light">
                  <p>2d ago</p>
                  <div className="list-disc">1532 Readers</div>
                </div>
              </li>
            ))}
        </ul>

        <div className="flex items-center my-3 cursor-pointer">
          <button className="px-3 text-sm text-gray-500 font-semibold">
            Show More
          </button>
          <BsChevronCompactDown />
        </div>
      </div>
    </div>
  );
};

export default News;
