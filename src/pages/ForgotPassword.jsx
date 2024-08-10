import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
import { useForgotPassword, useLoggedMyUser } from "../api/MyUserApi";
import { useAuthContext } from "../../context/AuthContext";
import logo from "../assets/Logo.png";
import { toast } from "react-toastify";
import Loader from "../pages/components/Loader";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [inputs, setInputs] = useState({
    email: "",
  });
  const { authUser, setAuthUser } = useAuthContext();
  const navigate = useNavigate();

  //   const { fOrgotPassword, isSuccess } = useLoggedMyUser();
  const { forgotPassword, isLoading, error, isSuccess } = useForgotPassword();

  const forgotPasswordHandler = async (e) => {
    e.preventDefault();
    forgotPassword(inputs);
  };
  useEffect(() => {
    if (authUser) {
      navigate("/startup");
    }
  }, []);
  useEffect(() => {
    if (isSuccess) {
      setInputs({ email: "" });
      toast.success("Email send to your account successfully");
      setAuthUser(true);
    }
    if (error) {
      toast.error(error.messge);
    }
  }, [isSuccess, error]);
  return (
    <div className="w-full h-[100vh] flex bg-[#fbb748] relative overflow-hidden">
      <div className="h-[120vh] bg-white  md:w-[35%] rounded-r-full border-r-[20px] border-t-[20px] border-b-[20px] border-[#1b375f] absolute top-[-10vh] left-0 hidden md:flex  justify-center items-center">
        <img src={logo} className="w-[280px] lg:w-[380px]" />
      </div>
      <div className=" h-[100vh] w-[95%] md:w-[65%] flex flex-col justify-center items-center absolute right-0">
        <h1 className="mb-7 text-[1.4rem] text-[#1b375f] font-bold">
          Forgot Password
        </h1>
        {isLoading && <Loader />}
        <form
          action=""
          onClick={forgotPasswordHandler}
          className="flex flex-col gap-[20px] w-[95%] md:w-[80%]"
        >
          <div className="flex flex-col md:flex-row gap-2 md:gap-5 items-center">
            <label
              htmlFor="email"
              className="font-bold text-[#1b375f] text-[1.2rem] w-[95%] sm:w-[85%] md:w-[80px] lg:w-[120px]"
            >
              Email:
            </label>
            <input
              type="email"
              placeholder="Enter your Email"
              id="email"
              required
              value={inputs.email}
              onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
              className="rounded-full py-3 px-4 w-[95%] sm:w-[85%] md:flex-1 border-none outline-none text-center placeholder:text-gray placeholder:font-bold"
            />
          </div>

          <button
            type="submit"
            className="bg-[#1b375f] w-[95%] sm:w-[85%] md:w-max  rounded-full py-2 px-6  md:ml-auto ml-none mx-auto md:mx-0 text-white font-bold text-[1.2rem]"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
