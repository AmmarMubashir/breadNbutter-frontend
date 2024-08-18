import React, { useEffect, useState } from "react";
import { useCreateMyUser } from "../api/MyUserApi";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import logo from "../assets/Logo.png";
import { toast } from "react-toastify";

const Signup = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { authUser, setAuthUser } = useAuthContext();
  const { createUser, isSuccess, error } = useCreateMyUser();
  const signupHandler = async (e) => {
    e.preventDefault();
    // console.log(inputs);
    createUser(inputs);
  };
  useEffect(() => {
    if (authUser) {
      navigate("/startup");
    }
  }, []);
  useEffect(() => {
    if (isSuccess) {
      toast.success("User created successfully!");
      navigate("/startup");

      setInputs({ name: "", email: "", password: "" });
      setAuthUser(true);
    }

    if (error) {
      toast.error(`${error.message}`);
    }
  }, [isSuccess, error]);
  return (
    <div className="w-full h-[100vh] flex bg-[#fbb748] relative overflow-hidden">
      <div className="h-[120vh] bg-white w-[35%] md:w-[35%] rounded-r-full border-r-[20px] border-t-[20px] border-b-[20px] border-[#1b375f] absolute top-[-10vh] left-0 md:flex justify-center items-center hidden">
        <img src={logo} width="280px" />
      </div>
      <div className=" h-[100vh] w-[100%] md:w-[65%] px-2 flex flex-col justify-center items-center absolute right-0">
        <h1 className="mb-7 text-[1.2rem] text-[#1b375f] font-bold">
          Signup to continue...
        </h1>
        <form
          action=""
          onSubmit={signupHandler}
          className="flex flex-col gap-[20px] w-[95%] md:w-[80%] lg:w-[65%]"
        >
          <div className="flex flex-col md:flex-row gap-2 md:gap-5 items-center">
            <label
              htmlFor="name"
              className="font-bold text-[#1b375f] text-[1.2rem] md:text-[1.2rem] w-[95%] sm:w-[85%] md:w-[80px] lg:w-[120px]"
            >
              Name:
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              id="name"
              required
              value={inputs.name}
              onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
              className="rounded-full py-3 px-4 w-[95%] sm:w-[85%] md:flex-1 border-none outline-none text-center placeholder:text-gray placeholder:font-bold "
            />
          </div>
          <div className="flex flex-col md:flex-row gap-2 md:gap-5 items-center">
            <label
              htmlFor="email"
              className="font-bold text-[#1b375f] text-[1.2rem] md:text-[1.2rem] w-[95%] sm:w-[85%] md:w-[80px] lg:w-[120px]"
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
              className="font-bold text-[#1b375f] text-[1.2rem] md:text-[1.2rem] w-[95%] sm:w-[85%] md:w-[80px] lg:w-[120px]"
            >
              Password:
            </label>
            <input
              type="password"
              required
              placeholder="Enter your password"
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
              className="rounded-full py-3 px-4 w-[95%] sm:w-[85%] md:flex-1 border-none outline-none text-center placeholder:text-gray placeholder:font-bold"
            />
          </div>
          <div>
            <p className="text-center text-[#1b375f] text-sm">
              Already have an account?{" "}
              <Link to="/" className="underline">
                Login
              </Link>
            </p>
          </div>
          <button
            type="submit"
            className="bg-[#1b375f] w-[95%] sm:w-[85%] md:w-max rounded-full py-2 px-6 text-white font-bold text-[1.2rem]  md:ml-auto"
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
