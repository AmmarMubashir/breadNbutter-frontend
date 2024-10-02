import React from "react";
import RightNav from "./components/RightNav";
import AboutGameVideo from "../assets/AboutGame.mp4";

const AboutGame = () => {
  return (
    // <div className="w-full h-[100vh] flex bg-[#fbb748] relative overflow-hidden">
    //   <RightNav />
    //   <div className=" h-[100vh] flex-1 flex flex-col py-4  items-center overflow-auto">
    //     <h1 className="mb-7 mt-5 text-[1.4rem] sm:text-[1.8rem] text-[#1b375f] font-bold font-mono">
    //       About the game
    //     </h1>
    //     <div className="w-[90%] lg:w-[80%] mx-auto text-[1.1rem] lg:text-[1.4rem]  bg-white rounded py-4 px-3 flex flex-col gap-4">
    //       <p>
    //         This is a business simulation game where participants learn
    //         practical skills for running a business. Up to five teams can
    //         compete against each other. Each team consists of three to five
    //         members who take on specific roles within the business, such as
    //         marketing, finance, operations etc.
    //       </p>
    //       <p>
    //         The game starts just before Quarter 1 (as some events have already
    //         happened) and the teams start at the same point. The purpose of the
    //         game is to learn about various aspects of running a business and
    //         dealing with real-life issues. The fun part is that they are
    //         competing against other teams, and the team with the most profit
    //         wins.
    //       </p>
    //       <p>
    //         Throughout the game, different opportunities and events arise that
    //         will affect their business depending on the choices they make. There
    //         are also activities that either as a team or each member needs to
    //         carry out, in their role, and bring back to the team to help drive
    //         the business forward by earning more income or incurring more
    //         expenditure.
    //       </p>
    //       <p>
    //         At the end of each quarter the teams will discover how they are
    //         performing and what their competitors are up to. This information
    //         will help them make those tough decisions, try to correct previous
    //         errors and keep your customers happy and loyal whilst attracting new
    //         ones. They will look at learning from their mistakes and finding
    //         ways to mitigate them.
    //       </p>
    //       <p>
    //         Whichever team makes the most profit at the end will decide which
    //         team is the overall winner. This means balancing profit with
    //         customer service, staff morale and successful marketing
    //       </p>
    //       <p>
    //         The teams will create a basic business plan for their bakery. The
    //         game is aimed at people who may already have a young business and
    //         want to improve their management skills, or those who are thinking
    //         about starting their own business. They will also understand the
    //         importance of planning with a view to in creating their own business
    //         plan.
    //       </p>
    //       <p>
    //         By the end of the game, each participant be able to produce their
    //         own draft business plan, ready for presenting to funders or
    //         investors.
    //       </p>
    //       {/* <div>
    //         <button
    //           className="px-4 py-2 rounded bg-[#1B375F] text-white w-max ml-auto block"
    //           onClick={() => navigate("/setting-the-scene")}
    //         >
    //           Next
    //         </button>
    //       </div> */}
    //     </div>
    //   </div>
    // </div>
    <div className="w-full h-[100vh] flex bg-[#fbb748] relative overflow-hidden">
      <RightNav />
      <div className=" h-[100vh] flex-1 flex flex-col justify-center  items-center ">
        <h1 className="mb-7 mt-5 text-[1.8rem] text-[#1b375f] font-bold font-mono">
          About the game
        </h1>
        <div className="w-[95%] md:w-[75%] lg:w-[60%] flex flex-col justify-center ">
          <div className="relative w-full h-0 pb-[56.25%]">
            {" "}
            {/* 16:9 Aspect Ratio */}
            <iframe
              src={AboutGameVideo}
              className="absolute top-0 left-0 w-full h-full rounded"
              title="Responsive Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutGame;
