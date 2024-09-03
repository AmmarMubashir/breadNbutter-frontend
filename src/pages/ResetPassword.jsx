import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useLoggedMyUser, useResetPassword } from "../api/MyUserApi";
import { useAuthContext } from "../../context/AuthContext";
import logo from "../assets/Logo.png";
import { toast } from "react-toastify";
import { IoArrowBackSharp } from "react-icons/io5";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    password: "",
    confirmPassword: "",
  });
  const { token } = useParams();
  const { authUser, setAuthUser } = useAuthContext();
  //   const { login, isSuccess } = useLoggedMyUser();
  const { resetPassword, isSuccess, error, loading } = useResetPassword();

  const resetPasswordHandler = async (e) => {
    e.preventDefault();
    resetPassword({ data: inputs, token });
  };
  useEffect(() => {
    if (authUser) {
      navigate("/introduction");
    }
  }, []);
  useEffect(() => {
    if (isSuccess) {
      navigate("/introduction");

      setInputs({ email: "", password: "" });
      setAuthUser(true);
      toast.success("Password reset successfully");
    }
    if (error) {
      toast.error("Failed to reset password. Please try again");
    }
  }, [isSuccess, error]);
  return (
    <div className="w-full h-[100vh] flex bg-[#fbb748] relative overflow-hidden">
      <div className="h-[120vh] bg-white  md:w-[35%] rounded-r-full border-r-[20px] border-t-[20px] border-b-[20px] border-[#1b375f] absolute top-[-10vh] left-0 hidden md:flex  justify-center items-center">
        <button
          className="absolute top-[10vh] left-4 "
          onClick={() => navigate("/")}
        >
          <IoArrowBackSharp className="text-[2rem]" />
        </button>
        <img src={logo} className="w-[280px] lg:w-[380px]" />
      </div>
      <div className=" h-[100vh] w-[95%] md:w-[65%] flex flex-col justify-center items-center absolute right-0">
        <button
          className="absolute top-4 left-1 md:hidden"
          onClick={() => navigate("/")}
        >
          <IoArrowBackSharp className="text-[2rem]" />
        </button>
        <h1 className="mb-7 text-[1.4rem] text-[#1b375f] font-bold">
          Reset Password
        </h1>
        <form
          action=""
          onSubmit={resetPasswordHandler}
          className="flex flex-col gap-[20px] w-[95%] md:w-[80%]"
        >
          <div className="flex flex-col md:flex-row gap-2 md:gap-5 items-center">
            <label
              htmlFor="password"
              className="font-bold text-[#1b375f] text-[1.2rem] w-[95%] sm:w-[85%] md:w-[80px] lg:w-[120px]"
            >
              Password:
            </label>
            <input
              type="password"
              placeholder="Enter your Password"
              id="password"
              required
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
              className="rounded-full py-3 px-4 w-[95%] sm:w-[85%] md:flex-1 border-none outline-none text-center placeholder:text-gray placeholder:font-bold"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-2 md:gap-5 items-center">
            <label
              htmlFor="confirmPassword"
              className="font-bold text-[#1b375f] text-[1.2rem] w-[95%] sm:w-[85%] md:w-[80px] lg:w-[120px]"
            >
              Confirm Password:
            </label>
            <input
              type="password"
              placeholder="Enter your Confirm Password"
              id="confirmPassword"
              required
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
              className="rounded-full py-3 px-4 w-[95%] sm:w-[85%] md:flex-1 border-none outline-none text-center placeholder:text-gray placeholder:font-bold"
            />
          </div>

          <button
            type="submit"
            className="bg-[#1b375f] w-[95%] sm:w-[85%] mt-6 md:mt-0 md:w-max  rounded-full py-2 px-6 mx-auto  ml-none md:ml-auto md:mx-0 text-white font-bold text-[1.2rem]"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
