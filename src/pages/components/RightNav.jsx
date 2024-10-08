import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLogout } from "../../api/MyUserApi";
import Logo from "../../assets/Logo.png";
import { IoMdLogOut } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { useGetIndividualStartup } from "../../api/MyStartupApi";
import { useGetUserQuarter1 } from "../../api/MyQuarter1Api";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useGetUserQuarter2 } from "../../api/MyQuarter2Api";
import { useGetUserQuarter3 } from "../../api/MyQuarter3Api";

const RightNav = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const { logout } = useLogout();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const { getIndividualStartup } = useGetIndividualStartup();
  const { UserQuarter1 } = useGetUserQuarter1();
  const { UserQuarter2 } = useGetUserQuarter2();
  const { UserQuarter3 } = useGetUserQuarter3();

  const [startup, setStartup] = useState(true);
  const [quarter1, setQuarter1] = useState(true);
  const [quarter2, setQuarter2] = useState(true);
  const [quarter3, setQuarter3] = useState(true);
  const [quarter4, setQuarter4] = useState(true);
  // const [selectedOption, setSelectedOption] = useState();
  const [options, setOptions] = useState(false);
  const [comparison, setComparison] = useState(false);
  const [resourcesOption, setResourcesOption] = useState(false);
  const [quarterOptions, setQuarterOptions] = useState(false);
  const [introOptions, setIntroOptions] = useState(false);

  useEffect(() => {
    let User = JSON.parse(localStorage.getItem("breadUser"));
    if (User) {
      if (User.role === "admin") {
        setIsAdmin(true);
      }
    }

    const loadData = async () => {
      const startupD = await getIndividualStartup();
      const quarter1D = await UserQuarter1();
      const quarter2D = await UserQuarter2();
      const quarter3D = await UserQuarter3();

      if (startupD) {
        setStartup(false);
      }
      if (quarter1D) {
        setQuarter1(false);
      }
      if (quarter2D) {
        setQuarter2(false);
      }
      if (quarter3D) {
        setQuarter3(false);
      }
    };

    loadData();
  }, []);
  // const handleNavigation = (event) => {
  //   const selectedValue = event.target.value;
  //   if (selectedValue) {
  //     setOpen(!open);
  //     navigate(selectedValue);
  //   }
  // };
  const logoutHandler = () => {
    logout();
    setOpen(!open);
    // console.log("HEllo");
  };

  console.log("OPEN", open);

  // const handleSelectChange = (event) => {
  //   const selectedValue = event.target.value;
  //   // console.log(selectedValue);
  //   setSelectedOption(selectedValue);
  //   navigate(selectedValue);
  // };
  return (
    <>
      {/* <div className="h-[120vh] bg-white  md:w-[35%] rounded-r-full border-r-[20px] border-t-[20px] border-b-[20px] border-[#1b375f] absolute top-[-10vh] left-0 hidden md:flex  justify-center items-center">
        <div className="absolute top-[15vh] left-10 flex flex-col gap-1">
          <button
            className="px-2 py-1 bg-[#1b375f]  text-white rounded-full"
            onClick={logoutHandler}
          >
            Logout
          </button>
          <select name="quarters" id="quarters" onChange={handleNavigation}>
            <option>Quarters</option>
            <option value="/startup">Startup</option>
            <option value="/quarter1" disabled={startup}>
              Quarter1
            </option>
            <option value="/quarter3" disabled={quarter1}>
              Quarter3
            </option>
            <option value="/quarter4" disabled={true}>
              Quarter4
            </option>
          </select>
        </div>
        <img src={logo} width="280px" />
        <div className="absolute bottom-[15vh] left-10 flex flex-col gap-3 text-center">
          {isAdmin && (
            <Link
              to="/admin/dashboard"
              className="py-2 px-3 bg-[#1b375f] text-white rounded-full"
            >
              Dashboard
            </Link>
          )}
          <Link
            to="/financialStatement"
            className="py-2 px-3 bg-[#1b375f] text-white rounded-full"
          >
            Financial statement
          </Link>
        </div>
      </div> */}

      <div className="w-[200px] lg:w-[240px] h-[100vh] bg-white border-r-[5px] border-[#1B375F] py-6 hidden md:flex flex-col gap-[2rem]">
        <img src={Logo} width="170px" />
        <div className="w-full">
          <button
            className="w-full px-2 py-2 flex justify-between items-center bg-[#1B375F] text-white border-b-[2px] border-white text-start"
            onClick={() => setIntroOptions(!introOptions)}
          >
            Introduction <MdKeyboardArrowDown />
          </button>
          {introOptions && (
            <div className="transition-all duration-300 overflow-hidden">
              <button
                onClick={() => {
                  navigate("/introduction");
                  setOpen(!open);
                }}
                className="w-full px-2 pl-6 py-2 bg-[#1B375F] text-white border-b-[2px] border-white text-start"
              >
                Intro Video
              </button>
              <button
                onClick={() => {
                  navigate("/about-game");
                  setOpen(!open);
                }}
                className="w-full px-2 pl-6 py-2 bg-[#1B375F] text-white border-b-[2px] border-white text-start"
              >
                About Game
              </button>
              <button
                onClick={() => {
                  navigate("/setting-the-scene");
                  setOpen(!open);
                }}
                className="w-full px-2 pl-6 py-2 bg-[#1B375F] text-white border-b-[2px] border-white text-start"
              >
                Setting the scene
              </button>
            </div>
          )}

          <button
            className="w-full px-2 py-2 flex justify-between items-center bg-[#1B375F] text-white border-b-[2px] border-white text-start"
            onClick={() => setQuarterOptions(!quarterOptions)}
          >
            Quarters <MdKeyboardArrowDown />
          </button>
          {quarterOptions && (
            <div className="transition-all duration-300 overflow-hidden">
              <button
                onClick={() => {
                  navigate("/startup");
                  setOpen(!open);
                }}
                className="w-full px-2 pl-6 py-2 bg-[#1B375F] text-white border-b-[2px] border-white text-start"
              >
                Startup
              </button>
              <button
                onClick={() => {
                  navigate("/choose-role");
                  setOpen(!open);
                }}
                disabled={startup}
                className="w-full px-2 pl-6 py-2 bg-[#1B375F] text-white border-b-[2px] border-white text-start  disabled:bg-[#1B375F] disabled:text-white/50 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                Choose Role
              </button>
              <button
                disabled={startup}
                onClick={() => {
                  navigate("/quarter1");
                  setOpen(!open);
                }}
                className="w-full px-2 pl-6 py-2 bg-[#1B375F] text-white border-b-[2px] border-white text-start disabled:bg-[#1B375F] disabled:text-white/50 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                Quarter 1
              </button>
              <button
                disabled={quarter1}
                onClick={() => {
                  navigate("/quarter2");
                  setOpen(!open);
                }}
                className="w-full px-2 pl-6 py-2 bg-[#1B375F] text-white border-b-[2px] border-white text-start disabled:bg-[#1B375F] disabled:text-white/50 disabled:opacity-60 disabled:cursor-not-allowed "
              >
                Quarter 2
              </button>
              <button
                disabled={quarter2}
                onClick={() => {
                  navigate("/quarter3");
                  setOpen(!open);
                }}
                className="w-full px-2 pl-6 py-2 bg-[#1B375F] text-white border-b-[2px] border-white text-start disabled:bg-[#1B375F] disabled:text-white/50 disabled:opacity-60 disabled:cursor-not-allowed "
              >
                Quarter 3
              </button>
              <button
                disabled={quarter3}
                onClick={() => {
                  navigate("/quarter4");
                  setOpen(!open);
                }}
                className="w-full px-2 pl-6 py-2 bg-[#1B375F] text-white border-b-[2px] border-white text-start disabled:bg-[#1B375F] disabled:text-white/50 disabled:opacity-60 disabled:cursor-not-allowed "
              >
                Quarter 4
              </button>
            </div>
          )}
          <button
            className="w-full px-2 py-2 flex justify-between items-center bg-[#1B375F] text-white border-b-[2px] border-white text-start"
            onClick={() => setOptions(!options)}
          >
            Finance <MdKeyboardArrowDown />
          </button>
          {options && (
            <div className="transition-all duration-300 overflow-hidden">
              <button
                onClick={() => {
                  navigate("/financialStatement");
                  setOpen(!open);
                }}
                className="w-full px-2 pl-6 py-2 bg-[#1B375F] text-white border-b-[2px] border-white text-start"
              >
                Income Statement
              </button>
              <button
                onClick={() => {
                  navigate("/cashflow");
                  setOpen(!open);
                }}
                className="w-full px-2 pl-6 py-2 bg-[#1B375F] text-white border-b-[2px] border-white text-start"
              >
                Cashflow
              </button>
            </div>
          )}
          {/* <button
            onClick={() => navigate("/cashflow")}
            className="w-full px-2 py-2 bg-[#1B375F] text-white border-b-[2px] border-white text-start"
          >
            Cash Flow
          </button> */}
          <button
            className="w-full px-2 py-2 flex justify-between items-center bg-[#1B375F] text-white border-b-[2px] border-white text-start"
            onClick={() => setResourcesOption(!resourcesOption)}
          >
            Resources <MdKeyboardArrowDown />
          </button>
          {resourcesOption && (
            <div className="transition-all duration-300 overflow-hidden">
              <button
                onClick={() => {
                  window.open(
                    "https://stepstobusiness.co.uk/members/",
                    "_blank"
                  );
                  setOpen(!open);
                }}
                className="w-full px-2 pl-6 py-2 bg-[#1B375F] text-white border-b-[2px] border-white text-start"
              >
                Activities
              </button>

              <button
                onClick={() => {
                  navigate("/resources/videos");
                  setOpen(!open);
                }}
                className="w-full px-2 pl-6 py-2 bg-[#1B375F] text-white border-b-[2px] border-white text-start"
              >
                Videos
              </button>
            </div>
          )}
          <button
            className="w-full px-2 py-2 flex justify-between items-center bg-[#1B375F] text-white border-b-[2px] border-white text-start"
            onClick={() => setComparison(!comparison)}
          >
            Dashboard <MdKeyboardArrowDown />
          </button>
          {comparison && (
            <div className="transition-all duration-300 overflow-hidden">
              <button
                onClick={() => {
                  navigate("/user/incomeComparison");
                  setOpen(!open);
                }}
                className="w-full px-2 pl-6 py-2 bg-[#1B375F] text-white border-b-[2px] border-white text-start"
              >
                Income
              </button>
              <button
                onClick={() => {
                  navigate("/user/costComparison");
                  setOpen(!open);
                }}
                className="w-full px-2 pl-6 py-2 bg-[#1B375F] text-white border-b-[2px] border-white text-start"
              >
                Expenditure
              </button>
              <button
                onClick={() => {
                  navigate("/user/quarterOutcomes");
                  setOpen(!open);
                }}
                className="w-full px-2 pl-6 py-2 bg-[#1B375F] text-white border-b-[2px] border-white text-start"
              >
                Profit/Loss
              </button>
            </div>
          )}
        </div>
        <div className="w-full mt-auto">
          {isAdmin && (
            <button
              onClick={(e) => navigate("/admin/dashboard")}
              className="py-2 px-3 bg-[#1b375f] text-white text-start mt-auto w-full"
            >
              Admin Dashboard
            </button>
          )}
          <button
            onClick={() => logout()}
            className="w-max px-7 py-2 bg-[#1B375F] text-white border-b-[2px] border-white text-start flex gap-2 items-center relative mt-2 mx-auto  rounded-full"
          >
            <IoMdLogOut /> Logout
          </button>
        </div>
      </div>

      {/* Mobile navbar */}

      <GiHamburgerMenu
        className="mt-3 ml-3 text-white text-[2rem] md:hidden absolute cursor-hover"
        onClick={() => setOpen(!open)}
      />

      <div
        className={`h-[100vh] bg-white  w-[200px] border-r-[10px]  py-5 border-[#1b375f] fixed z-10   md:hidden flex flex-col   items-center ${
          !open && `translate-x-[-240px] fixed`
        } transition-all`}
      >
        <RxCross2
          className="ml-auto mr-2 text-[2rem]"
          onClick={() => setOpen(!open)}
        />
        <img src={Logo} width="180px" />
        <div className="w-full mt-4 flex flex-col">
          <button
            className="w-full px-2 py-2 flex justify-between items-center bg-[#1B375F] text-white border-b-[2px] border-white text-start"
            onClick={() => setIntroOptions(!introOptions)}
          >
            Introduction <MdKeyboardArrowDown />
          </button>
          {introOptions && (
            <div className="transition-all duration-300 overflow-hidden">
              <button
                onClick={() => {
                  navigate("/introduction");
                  setOpen(!open);
                }}
                className="w-full px-2 pl-6 py-2 bg-[#1B375F] text-white border-b-[2px] border-white text-start"
              >
                Intro Video
              </button>
              <button
                onClick={() => {
                  navigate("/about-game");
                  setOpen(!open);
                }}
                className="w-full px-2 pl-6 py-2 bg-[#1B375F] text-white border-b-[2px] border-white text-start"
              >
                About game
              </button>
              <button
                onClick={() => {
                  navigate("/setting-the-scene");
                  setOpen(!open);
                }}
                className="w-full px-2 pl-6 py-2 bg-[#1B375F] text-white border-b-[2px] border-white text-start"
              >
                Setting the scene
              </button>
            </div>
          )}

          <button
            className="w-full px-2 py-2 flex justify-between items-center bg-[#1B375F] text-white border-b-[2px] border-white text-start"
            onClick={() => setQuarterOptions(!quarterOptions)}
          >
            Quarters <MdKeyboardArrowDown />
          </button>
          {quarterOptions && (
            <div className="transition-all duration-300 overflow-hidden">
              <button
                onClick={() => {
                  navigate("/startup");
                  setOpen(!open);
                }}
                className="w-full px-2 pl-6 py-2 bg-[#1B375F] text-white border-b-[2px] border-white text-start"
              >
                Startup
              </button>
              <button
                onClick={() => {
                  navigate("/choose-role");
                  setOpen(!open);
                }}
                className="w-full px-2 pl-6 py-2 bg-[#1B375F] text-white border-b-[2px] border-white text-start"
              >
                Choose Role
              </button>
              <button
                disabled={startup}
                onClick={() => {
                  navigate("/quarter1");
                  setOpen(!open);
                }}
                className="w-full px-2 pl-6 py-2 bg-[#1B375F] text-white border-b-[2px] border-white text-start disabled:bg-[#1B375F] disabled:text-white/50 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                Quarter 1
              </button>
              <button
                disabled={quarter1}
                onClick={() => {
                  navigate("/quarter2");
                  setOpen(!open);
                }}
                className="w-full px-2 pl-6 py-2 bg-[#1B375F] text-white border-b-[2px] border-white text-start disabled:bg-[#1B375F] disabled:text-white/50 disabled:opacity-60 disabled:cursor-not-allowed "
              >
                Quarter 2
              </button>
              <button
                disabled={quarter2}
                onClick={() => {
                  navigate("/quarter3");
                  setOpen(!open);
                }}
                className="w-full px-2 pl-6 py-2 bg-[#1B375F] text-white border-b-[2px] border-white text-start disabled:bg-[#1B375F] disabled:text-white/50 disabled:opacity-60 disabled:cursor-not-allowed "
              >
                Quarter 3
              </button>
              <button
                disabled={quarter3}
                onClick={() => {
                  navigate("/quarter4");
                  setOpen(!open);
                }}
                className="w-full px-2 pl-6 py-2 bg-[#1B375F] text-white border-b-[2px] border-white text-start disabled:bg-[#1B375F] disabled:text-white/50 disabled:opacity-60 disabled:cursor-not-allowed "
              >
                Quarter 4
              </button>
            </div>
          )}
          <button
            className="w-full px-2 py-2 flex justify-between items-center bg-[#1B375F] text-white border-b-[2px] border-white text-start"
            onClick={() => setOptions(!options)}
          >
            Finance Statement <MdKeyboardArrowDown />
          </button>
          {options && (
            <div className="transition-all duration-300 overflow-hidden">
              <button
                onClick={() => {
                  navigate("/financialStatement");
                  setOpen(!open);
                }}
                className="w-full px-2 pl-6 py-2 bg-[#1B375F] text-white border-b-[2px] border-white text-start"
              >
                Income Statement
              </button>
              <button
                onClick={() => {
                  navigate("/cashflow");
                  setOpen(!open);
                }}
                className="w-full px-2 pl-6 py-2 bg-[#1B375F] text-white border-b-[2px] border-white text-start"
              >
                Cashflow
              </button>
            </div>
          )}
          {/* <button
            onClick={() => {
              navigate("/cashflow");
              setOpen(!open);
            }}
            className="py-2 px-2 bg-[#1b375f] text-white text-start border-b-2 border-white w-full"
          >
            Cash Flow
          </button> */}
          <button
            className="w-full px-2 py-2 flex justify-between items-center bg-[#1B375F] text-white border-b-[2px] border-white text-start"
            onClick={() => setResourcesOption(!resourcesOption)}
          >
            Resources <MdKeyboardArrowDown />
          </button>
          {resourcesOption && (
            <div className="transition-all duration-300 overflow-hidden">
              <button
                onClick={() => {
                  window.open(
                    "https://stepstobusiness.co.uk/members/",
                    "_blank"
                  );
                  setOpen(!open);
                }}
                className="w-full px-2 pl-6 py-2 bg-[#1B375F] text-white border-b-[2px] border-white text-start"
              >
                Activities
              </button>

              <button
                onClick={() => {
                  navigate("/resources/videos");
                  setOpen(!open);
                }}
                className="w-full px-2 pl-6 py-2 bg-[#1B375F] text-white border-b-[2px] border-white text-start"
              >
                Videos
              </button>
            </div>
          )}
          <button
            className="w-full px-2 py-2 flex justify-between items-center bg-[#1B375F] text-white border-b-[2px] border-white text-start"
            onClick={() => setComparison(!comparison)}
          >
            Dashboard <MdKeyboardArrowDown />
          </button>
          {comparison && (
            <div className="transition-all duration-300 overflow-hidden">
              <button
                onClick={() => {
                  navigate("/user/incomeComparison");
                  setOpen(!open);
                }}
                className="w-full px-2 pl-6 py-2 bg-[#1B375F] text-white border-b-[2px] border-white text-start"
              >
                Income
              </button>
              <button
                onClick={() => {
                  navigate("/user/costComparison");
                  setOpen(!open);
                }}
                className="w-full px-2 pl-6 py-2 bg-[#1B375F] text-white border-b-[2px] border-white text-start"
              >
                Expenditure
              </button>
              <button
                onClick={() => {
                  navigate("/user/quarterOutcomes");
                  setOpen(!open);
                }}
                className="w-full px-2 pl-6 py-2 bg-[#1B375F] text-white border-b-[2px] border-white text-start"
              >
                Profit/Loss
              </button>
            </div>
          )}

          {/* <select
            name="quarters"
            id="quarters"
            onChange={handleNavigation}
            className="w-full"
          >
            <option>Quarters</option>
            <option value="/startup">Startup</option>
            <option value="/quarter1" disabled={startup}>
              Quarter1
            </option>
            <option value="/quarter3" disabled={quarter1}>
              Quarter3
            </option>
            <option value="/quarter4" disabled={true}>
              Quarter4
            </option>
          </select> */}
        </div>

        <div className=" mt-auto w-full flex flex-col gap-1 text-start">
          {isAdmin && (
            <Link
              to="/admin/dashboard"
              className="py-2 px-3 bg-[#1b375f] text-white"
            >
              Admin Dashboard
            </Link>
          )}
          <button
            className="px-2 py-1 bg-[#1b375f]  text-white border-b-[2px] border-white flex items-center gap-2"
            onClick={logoutHandler}
          >
            <IoMdLogOut className="text-[1rem]" />
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default RightNav;
