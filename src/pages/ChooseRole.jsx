import React from "react";
import RightNav from "./components/RightNav";
import ChooseRoleVid from "../assets/ChooseRole.mp4";
import { Link } from "react-router-dom";

const ChooseRole = () => {
  return (
    <div className="w-full h-[100vh] flex bg-[#fbb748] relative overflow-hidden">
      <RightNav />
      <div className=" h-[100vh] flex-1 flex flex-col justify-center  items-center ">
        <h1 className="mb-7 mt-5 text-[1.8rem] text-[#1b375f] font-bold font-mono">
          Choose your Role
        </h1>
        <div className="w-[95%] md:w-[75%] lg:w-[60%] flex flex-col justify-center ">
          <div className="relative w-full h-0 pb-[56.25%]">
            {" "}
            {/* 16:9 Aspect Ratio */}
            <iframe
              src={ChooseRoleVid}
              className="absolute top-0 left-0 w-full h-full rounded"
              title="Responsive Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* <div className="hover:bg-gray-300 bg-white rounded mt-3 px-2 py-3 cursor-pointer">
              <strong>Event:</strong> {quarter1D.event}
            </div> */}

          <div className="absolute bottom-9 right-11">
            <Link
              to="/roles"
              className="bg-[#1b375f] text-white px-4 py-2 rounded"
            >
              Next
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseRole;
