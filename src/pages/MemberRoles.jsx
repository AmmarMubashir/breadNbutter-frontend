import React, { useEffect, useState } from "react";
import RightNav from "./components/RightNav";
import { useNavigate } from "react-router-dom";
import { useGetIndividualStartup } from "../api/MyStartupApi";
import {
  useCreateMemberRoles,
  usegetMemberRoles,
} from "../api/MyMemberRolesApi";
import { toast } from "react-toastify";

const MemberRoles = () => {
  const [numberOfMembers, setNumberOfMembers] = useState();
  const [roleData, setRoleData] = useState();
  const navigate = useNavigate();
  const { getIndividualStartup } = useGetIndividualStartup();
  const { createRoles, isLoading, isSuccess, error } = useCreateMemberRoles();
  const { getMembers } = usegetMemberRoles();
  useEffect(() => {
    const loadData = async () => {
      const memberRoles = await getMembers();

      if (memberRoles) {
        console.log("DB", memberRoles);
        navigate(`/roles/${memberRoles._id}`);
      }
      const data = await getIndividualStartup();

      if (data) {
        // console.log(data);
        setNumberOfMembers(data.data.members);
        const array = [...Array(data.data.members).keys()].map((i) => ({
          name: "",
          role: "",
        }));
        setRoleData(array);
      }
    };

    loadData();
  }, []);
  if (numberOfMembers) {
    console.log(roleData);
  }

  const submitHandler = async (e) => {
    e.preventDefault();

    const data = await createRoles(roleData);

    if (data) {
      console.log(data);
      navigate(`/roles/${data._id}`);
    }

    console.log("SUBMIT", roleData);
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Members roles submitted successfully");
      //   navigate("/quarter2Completion");
    }
    if (error) {
      toast.error("Failed to submit members roles");
    }
  }, [isSuccess, error]);
  return (
    <div className="w-full h-[100vh] flex bg-[#fbb748] relative overflow-hidden">
      <RightNav />
      <div className=" h-[100vh] py-4 flex-1 flex flex-col   items-center overflow-auto">
        <h1 className="mb-7 mt-5 mx-auto text-[1.4rem] sm:text-[1.8rem] text-[#1b375f] font-bold font-mono">
          Set the members roles
        </h1>
        {numberOfMembers && roleData && (
          <form
            onSubmit={submitHandler}
            className="w-[90%] lg:w-[80%] mx-auto text-[1.1rem] lg:text-[1.4rem]  bg-white rounded py-4 px-3 flex flex-col gap-4 mt-4"
          >
            {roleData.map((item) => (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-7 p-2 ">
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor=""
                    className="font-bold text-[#1b375f] text-[1.2rem]"
                  >
                    Name:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter Member Name"
                    className="rounded py-2 px-4 sm:w-[90%] bg-[#FBB74889] border-none outline-none text-center text-gray-600 placeholder:text-gray-400 "
                    value={item.name}
                    onChange={(e) => {
                      const updatedData = [...roleData];
                      updatedData[roleData.indexOf(item)] = {
                        ...item,
                        name: e.target.value,
                      };
                      setRoleData(updatedData);
                    }}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor=""
                    className="font-bold text-[#1b375f] text-[1.2rem] "
                  >
                    Role
                  </label>
                  <select
                    className="rounded py-2 px-4 sm:w-[90%] bg-[#FBB74889] border-none outline-none text-center text-gray-600 placeholder:text-gray-400  placeholder:font-bold"
                    value={item.role}
                    required
                    onChange={(e) => {
                      const updatedData = [...roleData];
                      updatedData[roleData.indexOf(item)] = {
                        ...item,
                        role: e.target.value,
                      };
                      setRoleData(updatedData);
                    }}
                  >
                    <option value="" disabled>
                      Select Role
                    </option>
                    {[
                      "Accountant",
                      "Marketing manager",
                      "Sales manager",
                      "Operations manager",
                      "Production manager",
                    ].map((role, index) => (
                      <option key={index} value={role}>
                        {role}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            ))}
            <div className="px-4">
              <button className="px-4 max-width py-2 bg-[#1b375f] rounded text-white block ml-auto sm:mr-7 ">
                Submit
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default MemberRoles;
