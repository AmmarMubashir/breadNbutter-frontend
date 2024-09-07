import React, { useEffect, useState } from "react";
import { useCreateStartup, useGetIndividualStartup } from "../api/MyStartupApi";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import RightNav from "./components/RightNav";
import { toast } from "react-toastify";

const Startup = () => {
  const navigate = useNavigate();
  const { isSuccess, createStartup, error } = useCreateStartup();
  const { getIndividualStartup, isSuccess: individualStartupSuccess } =
    useGetIndividualStartup();
  // const { createUserIncome } = useCreateUserIncomeStatement();
  // const [jwt, setJwt] = useState();
  const [isAdmin, setIsAdmin] = useState(false);
  const [inputs, setInputs] = useState({
    name: "",
    members: "",
    location: "",
  });

  useEffect(() => {
    const loadData = async () => {
      const data = await getIndividualStartup();

      if (data) {
        // console.log(data);
        navigate(`/startup/${data.data._id}`);
      }
    };

    loadData();
  }, []);

  // useEffect(() => {
  //   if (isSuccess) {
  //     toast.success("Startup created successfully");
  //   }
  //   if (error) {
  //     toast.error("Error in creating startup");
  //   }
  // }, [isSuccess, error]);

  const submitHandler = async (e) => {
    e.preventDefault();

    // console.log(jwt);

    const startup = await createStartup(inputs);

    if (startup) {
      toast.success("Startup created successfully");
    }

    const startupId = startup.data._id;

    navigate(`/startup/${startupId}`);
  };

  return (
    <div className="w-full h-[100vh] flex bg-[#fbb748] relative overflow-hidden">
      <RightNav />

      <div className=" h-[100vh] w-[100%] md:w-[65%] flex flex-col justify-center items-center md:absolute right-0">
        <h1 className="mb-7 text-[1.8rem] text-[#1b375f] font-bold font-mono">
          Startup
        </h1>
        <form
          action=""
          onSubmit={submitHandler}
          className="flex flex-col gap-[20px] w-[95%] md:w-[80%]  px-2 py-2"
        >
          <div className="flex gap-5 items-center">
            <label
              htmlFor="name"
              className="font-bold text-[#1b375f] text-[1.2rem] w-[80px]"
            >
              Name:
            </label>
            <input
              type="name"
              placeholder="Enter your Team Name"
              id="name"
              required
              value={inputs.name}
              onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
              className="rounded-full py-3 px-4 w-[75%] border-none outline-none text-center placeholder:text-gray placeholder:font-bold"
            />
          </div>
          <div className="flex gap-5 items-center">
            <label
              htmlFor="members"
              className="font-bold text-[#1b375f] text-[1.2rem] w-[80px]"
            >
              Members:
            </label>
            {/* <input
              type="number"
              placeholder="Enter number of members"
              id="members"
              max={5}
              required
              value={inputs.members}
              onChange={(e) =>
                setInputs({ ...inputs, members: +e.target.value })
              }
              className="rounded-full py-3 px-4 w-[75%] border-none outline-none text-center placeholder:text-gray placeholder:font-bold"
            /> */}
            <select
              id="members"
              required
              value={inputs.members}
              onChange={(e) =>
                setInputs({ ...inputs, members: +e.target.value })
              }
              className="rounded-full py-3 px-4 w-[75%] border-none outline-none text-center placeholder:text-gray-400 placeholder:font-bold text-[0.9rem]"
            >
              <option value="" disabled className="text-gray-400">
                Select number of members
              </option>
              {[...Array(5).keys()].map((number) => (
                <option key={number + 1} value={number + 1}>
                  {number + 1}
                </option>
              ))}
            </select>
          </div>

          <div className="flex gap-5 items-center">
            <label
              htmlFor="location"
              className="font-bold text-[#1b375f] text-[1.2rem] w-[80px]"
            >
              Location:
            </label>
            <input
              type="location"
              id="location"
              required
              placeholder="Enter Your Location"
              value={inputs.location}
              onChange={(e) =>
                setInputs({ ...inputs, location: e.target.value })
              }
              className="rounded-full py-3 px-4 w-[75%] border-none outline-none text-center placeholder:text-gray placeholder:font-bold"
            />
          </div>

          <button
            type="submit"
            className="bg-[#1b375f] rounded-full py-2 px-6 text-white font-bold text-[1.2rem] w-[90%] ml-auto"
            style={{ width: "max-content" }}
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default Startup;
