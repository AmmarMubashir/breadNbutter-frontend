import React from "react";
import RightNav from "./components/RightNav";
import SettingSceneVideo from "../assets/StartupInfo.mp4";

const SettingScene = () => {
  return (
    // <div className="w-full h-[100vh] flex bg-[#fbb748] relative overflow-hidden">
    //   <RightNav />
    //   <div className=" h-[100vh] py-4 flex-1 flex flex-col  items-center overflow-auto">
    //     <h1 className="mb-7 mt-5 mx-auto text-[1.4rem] sm:text-[1.8rem] text-[#1b375f] font-bold font-mono">
    //       Setting Scene to the game
    //     </h1>
    //     <div className="w-[90%] lg:w-[80%] mx-auto text-[1.1rem] lg:text-[1.4rem]  bg-white rounded py-4 px-3 flex flex-col gap-4">
    //       <p>
    //         My Bread n Butter is a new venture dedicated to delivering a
    //         delightful array of freshly baked goods crafted with meticulous
    //         attention to quality and taste. Specialising in an assortment of
    //         breads, pastries, cakes, and cookies, this home-based bakery
    //         emphasises the use of locally sourced ingredients to ensure the
    //         utmost freshness and flavour in every product. Each item is made
    //         with the care and passion of a home kitchen, bringing a personal
    //         touch to the art of baking that mass-produced goods simply cannot
    //         match.
    //       </p>
    //       <p>
    //         The business operates primarily through online orders and local
    //         deliveries, making it convenient for customers to enjoy homemade
    //         baked goods without leaving the comfort of their homes. By
    //         maintaining a robust online presence, My Bread n Butter provides an
    //         easy and accessible platform for customers to place orders,
    //         customize their selections, and schedule deliveries. Participation
    //         in local markets and events further enhances community engagement
    //         and brand visibility, allowing for direct interaction with customers
    //         and immediate feedback.
    //       </p>
    //       <p>
    //         Product offerings include a diverse selection of breads such as
    //         white, whole grain, and sourdough, alongside a variety of pastries
    //         like croissants and Danish delights. The cake selection ranges from
    //         classic birthday cakes to intricate cupcakes, each designed to cater
    //         to special occasions and personal preferences. Cookies, ranging from
    //         classic chocolate chip to oatmeal raisin, add a touch of sweetness
    //         to the daily offerings. The flexibility to customize orders ensures
    //         that customer needs and preferences are always met, whether for a
    //         family gathering or a special event.
    //       </p>
    //       <p>
    //         By focusing on high-quality, homemade products and leveraging local
    //         ingredients, My Bread n Butter stands out in the competitive bakery
    //         industry. This approach not only supports local farmers and
    //         suppliers but also aligns with growing consumer preferences for
    //         artisanal and specialty baked goods. The commitment to quality,
    //         combined with a personalised customer experience, positions the
    //         bakery as a trusted provider of delightful baked treats, ready to
    //         satisfy the cravings and culinary desires of the local community.
    //       </p>
    //       {/* <div>
    //         <button
    //           className="px-4 py-2 rounded bg-[#1B375F] text-white w-max ml-auto block"
    //           onClick={() => navigate("/startup")}
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
          Setting the scene
        </h1>
        <div className="w-[95%] md:w-[75%] lg:w-[60%] flex flex-col justify-center ">
          <div className="relative w-full h-0 pb-[56.25%]">
            {" "}
            {/* 16:9 Aspect Ratio */}
            <iframe
              src={SettingSceneVideo}
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

export default SettingScene;
