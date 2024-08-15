import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import RightNav from "./components/RightNav";
import Loader from "./components/Loader";
import quarter2CompletionVideo from "../assets/quarter2Complete.mp4";
const Quarter2Completion = () => {
  const navigate = useNavigate();
  //   const [quarter1D, setQuarter1D] = useState();
  //   const { IndividualUserQuarter1, isLoading } = useGetIndividualUserQuarter1();

  //   useEffect(() => {
  //     const loadData = async () => {
  //     //   const data = await IndividualUserQuarter1(id);

  //       console.log(data);
  //       if (!data) {
  //         navigate("/quarter1");
  //       }
  //       if (data) {
  //         setQuarter1D(data);
  //       }
  //     };
  //     loadData();
  //   }, []);

  return (
    <div className="w-full h-[100vh] flex bg-[#fbb748] relative overflow-hidden">
      <RightNav />
      <div className=" h-[100vh] mx-auto flex-1 flex flex-col justify-center items-center ">
        <h1 className="mb-7 text-[1.2rem] text-[#1b375f] font-bold">
          Quarter 2 Completed
        </h1>

        {/* {quarter1D && ( */}
        <div className="w-[95%] md:w-[75%] lg:w-[60%] flex flex-col justify-center ">
          <div className="relative w-full h-0 pb-[56.25%]">
            {" "}
            {/* 16:9 Aspect Ratio */}
            <iframe
              src={quarter2CompletionVideo}
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
              to="/quarter3EmpInfo"
              className="bg-[#1b375f] text-white px-4 py-2 rounded"
            >
              Next
            </Link>
          </div>
        </div>
        {/* )} */}
      </div>
    </div>
  );
};

export default Quarter2Completion;
