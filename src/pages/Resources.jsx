import React from "react";
import RightNav from "./components/RightNav";
import img1 from "../assets/img1.png";
import businessPdf from "../assets/businessPdf.png";
import video1 from "../assets/video1.png";
import ppt1 from "../assets/ppt1.png";
import { Link } from "react-router-dom";

const Resources = () => {
  const pdfData = [
    {
      title: "Business",
      url: "https://drive.google.com/file/d/1fPESf2qK224NdWAkQXOu6mIV8tZFjoqh/view?usp=sharing",
      imgUrl: businessPdf,
    },
    {
      title: "Solopreneur",
      url: "https://drive.google.com/file/d/1fPESf2qK224NdWAkQXOu6mIV8tZFjoqh/view?usp=sharing",
      imgUrl: img1,
    },
    {
      title: "Solopreneur",
      url: "https://drive.google.com/file/d/1fPESf2qK224NdWAkQXOu6mIV8tZFjoqh/view?usp=sharing",
      imgUrl: img1,
    },
  ];

  const videoData = [
    {
      title: "Quarters Fill",
      url: "https://drive.google.com/file/d/1ybX93eW0ddL8C6pVsAz6IBcnyJ9sdpYk/view?usp=sharing",
      imgUrl: video1,
    },
    {
      title: "Quarters Fill",
      url: "https://drive.google.com/file/d/1ybX93eW0ddL8C6pVsAz6IBcnyJ9sdpYk/view?usp=sharing",
      imgUrl: video1,
    },
  ];

  const pptData = [
    {
      title: "Design presentation",
      url: "https://docs.google.com/presentation/d/1suFnWHJ_gINtkF4rm5fXKksxo0p_zygb/edit#slide=id.p1",
      imgUrl: ppt1,
    },
  ];
  return (
    <div className="w-[100%] h-[100vh]  flex">
      <RightNav />
      <div className="h-[100vh] overflow-auto flex-1">
        <div className=" w-[100%] min-h-[100vh] bg-[#FBB748] md:py-4 py-[3rem] ">
          {pdfData && (
            <>
              <div className="bg-white px-2 py-2 rounded text-start text-[1.4rem] w-[95%] md:w-[85%] mx-auto font-bold">
                PDFs
              </div>
              <div className="w-[95%] md:w-[85%] grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  lg:gap-5 md:gap-7 gap-9 bg-white rounded mx-auto px-4 py-4">
                {pdfData.map((item) => (
                  <Link
                    to={item.url}
                    target="_blank"
                    className="rounded px-2 py-2 bg-[#FCC56B] flex flex-col gap-2"
                  >
                    <img
                      src={item.imgUrl}
                      alt={item.imgUrl}
                      className="w-[98%] rounded mx-auto"
                    />
                    <h3 className="text-[1.2rem] ">{item.title}</h3>
                  </Link>
                ))}
              </div>
            </>
          )}

          {videoData && (
            <>
              <div className="bg-white px-2 py-2 rounded text-start text-[1.4rem] w-[95%] md:w-[85%] mx-auto font-bold">
                Videos
              </div>
              <div className="w-[95%] md:w-[85%] grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  lg:gap-5 md:gap-7 gap-9 bg-white rounded mx-auto px-4 py-4">
                {videoData.map((item) => (
                  <Link
                    to={item.url}
                    target="_blank"
                    className="rounded px-2 py-2 bg-[#FCC56B] flex flex-col gap-2"
                  >
                    <img
                      src={item.imgUrl}
                      alt={item.imgUrl}
                      className="w-[98%] rounded mx-auto"
                    />
                    <h3 className="text-[1.2rem] ">{item.title}</h3>
                  </Link>
                ))}
              </div>
            </>
          )}

          {pptData && (
            <>
              <div className="bg-white px-2 py-2 rounded text-start text-[1.4rem] w-[95%] md:w-[85%] mx-auto font-bold">
                Presentations
              </div>
              <div className="w-[95%] md:w-[85%] grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  lg:gap-5 md:gap-7 gap-9 bg-white rounded mx-auto px-4 py-4">
                {pptData.map((item) => (
                  <Link
                    to={item.url}
                    target="_blank"
                    className="rounded px-2 py-2 bg-[#FCC56B] flex flex-col gap-2"
                  >
                    <img
                      src={item.imgUrl}
                      alt={item.imgUrl}
                      className="w-[98%] rounded mx-auto"
                    />
                    <h3 className="text-[1.2rem] ">{item.title}</h3>
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

export default Resources;
