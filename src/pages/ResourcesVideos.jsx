import React from "react";
import RightNav from "./components/RightNav";

import { Link } from "react-router-dom";

const ResourcesVideos = () => {
  const videoData = [
    {
      title: "Quarters Fill",
      url: "https://drive.google.com/file/d/1ybX93eW0ddL8C6pVsAz6IBcnyJ9sdpYk/view?usp=sharing",
    },
    {
      title: "Quarters Fill",
      url: "https://drive.google.com/file/d/1ybX93eW0ddL8C6pVsAz6IBcnyJ9sdpYk/view?usp=sharing",
    },
    {
      title: "Quarters Fill",
      url: "https://drive.google.com/file/d/1ybX93eW0ddL8C6pVsAz6IBcnyJ9sdpYk/view?usp=sharing",
    },
    {
      title: "Quarters Fill",
      url: "https://drive.google.com/file/d/1ybX93eW0ddL8C6pVsAz6IBcnyJ9sdpYk/view?usp=sharing",
    },
  ];

  return (
    <div className="w-[100%] h-[100vh]  flex">
      <RightNav />
      <div className="h-[100vh] overflow-auto flex-1">
        <div className=" w-[100%] min-h-[100vh] bg-[#FBB748] py-8  ">
          {videoData && (
            <>
              <div className="bg-white px-2 py-2 rounded text-start text-[1.4rem] w-[95%] md:w-[85%] mx-auto font-bold">
                Videos
              </div>
              <div className="w-[95%] md:w-[85%] flex flex-col gap-2 bg-white rounded mx-auto px-4 py-7">
                {videoData.map((item) => (
                  <Link
                    to={item.url}
                    target="_blank"
                    className="rounded px-2 py-2 bg-[#FCC56B] flex  gap-2 justify-between items-center"
                  >
                    <h3 className="text-[1.2rem] ">{item.title}</h3>
                    <button className="bg-[#1B375F] px-3 py-2 w-max text-white rounded">
                      Details
                    </button>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResourcesVideos;