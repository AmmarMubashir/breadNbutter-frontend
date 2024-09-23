import React from "react";
import RightNav from "./components/RightNav";

import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-[100vh] flex bg-[#fbb748] relative overflow-hidden">
      <RightNav />
      <div className=" h-[100vh] flex-1 flex flex-col justify-center  items-center ">
        <h1 className="mb-7 mt-5 text-[2rem] text-[#1b375f] font-bold font-mono">
          <span className="text-[1rem] sm:text-[1.4rem] md:text-[2rem] lg:text-[2.5rem]">
            Welcome to
          </span>{" "}
          <br />{" "}
          <span className="text-[1.6rem] sm:text-[3rem] md:text-[3.8rem] lg:text-[4.2rem]">
            My Bread n Butter
          </span>
        </h1>

        <button
          className="w-max px-4 py-2 rounded bg-[#1b375f] text-white"
          onClick={() => navigate("/introduction")}
        >
          Continue the game
        </button>
      </div>
    </div>
  );
};

export default HomePage;
