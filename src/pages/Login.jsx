import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLoggedMyUser } from "../api/MyUserApi";
import { useAuthContext } from "../../context/AuthContext";
import logo from "../assets/Logo.png";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const { authUser, setAuthUser } = useAuthContext();
  const { login, isSuccess, error } = useLoggedMyUser();

  const loginHandler = async (e) => {
    e.preventDefault();
    const data = await login(inputs);
    if (data) {
      // console.log(data);
      if (data.data.role === "admin") {
        navigate("/admin/dashboard");
      } else {
        navigate("/home-page");
      }
    }
  };
  useEffect(() => {
    if (authUser) {
      console.log(authUser);
      navigate("/home-page");
    }
  }, []);
  useEffect(() => {
    if (isSuccess) {
      toast.success("User logged in successfully!");
      // navigate("/home-page");

      setInputs({ email: "", password: "" });
      setAuthUser(true);
    }
    if (error) {
      toast.error(`${error.message}`);
    }
  }, [isSuccess, error]);
  return (
    <div className="w-full h-[100vh] flex bg-[#fbb748] relative overflow-hidden">
      <div className="h-[120vh] bg-white  md:w-[35%] rounded-r-full border-r-[20px] border-t-[20px] border-b-[20px] border-[#1b375f] absolute top-[-10vh] left-0 hidden md:flex  justify-center items-center">
        <img src={logo} className="w-[280px] lg:w-[380px]" />
      </div>
      <div className=" h-[100vh] w-[95%] md:w-[65%] flex flex-col justify-center items-center absolute right-0">
        <h1 className="mb-7 text-[1.2rem] text-[#1b375f] font-bold">
          Login to continue...
        </h1>
        <form
          action=""
          onSubmit={loginHandler}
          className="flex flex-col gap-[20px] w-[95%] md:w-[80%] lg:w-[65%]"
        >
          <div className="flex  flex-col md:flex-row gap-2 md:gap-5 items-center">
            <label
              htmlFor="email"
              className="font-bold text-[#1b375f] text-[1rem]  md:text-[1.2rem] w-[95%] sm:w-[85%] md:w-[80px] lg:w-[120px]"
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
          <div className="flex flex-col md:flex-row gap-2 md:gap-5 items-center">
            <label
              htmlFor="password"
              className="font-bold text-[#1b375f] text-[1rem] md:text-[1.2rem] w-[95%] sm:w-[85%] md:w-[80px] lg:w-[120px]"
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              required
              placeholder="Enter your password"
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
              className="rounded-full py-3 px-4 w-[95%] sm:w-[85%] md:flex-1 border-none outline-none text-center placeholder:text-gray placeholder:font-bold"
            />
          </div>
          <div className="text-end">
            <Link
              to="/password/forgot"
              className="text-[#1b375f] text-sm underline"
            >
              Forgot password?
            </Link>
          </div>
          <div>
            <p className="text-center text-[#1b375f] text-sm">
              Don't have an account?{" "}
              <Link to="/signup" className="underline">
                Signup
              </Link>
            </p>
          </div>
          <button
            type="submit"
            className="bg-[#1b375f] w-[95%] sm:w-[85%] md:w-max  rounded-full py-2 px-6  md:ml-auto text-white font-bold text-[1.2rem]"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
