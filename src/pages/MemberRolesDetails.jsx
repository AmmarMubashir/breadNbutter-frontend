import React, { useEffect, useState } from "react";
import RightNav from "./components/RightNav";
import { Link, useNavigate, useParams } from "react-router-dom";
import { usegetMemberRolesById } from "../api/MyMemberRolesApi";
import Loader from "./components/Loader";

const MemberRolesDetails = () => {
  const [roleData, setRoleData] = useState();
  const navigate = useNavigate();
  const { getMembersById } = usegetMemberRolesById();

  const { id } = useParams();
  useEffect(() => {
    // console.log(id);
    const loadData = async () => {
      const memberRoles = await getMembersById(id);

      if (memberRoles) {
        setRoleData(memberRoles.positions);
      }
    };

    loadData();
  }, []);

  if (roleData) {
    console.log(roleData);
  }

  return (
    <div className="w-full h-[100vh] flex bg-[#fbb748] relative overflow-hidden">
      <RightNav />
      <div className=" h-[100vh] py-4 flex-1 flex flex-col justify-center   items-center overflow-auto">
        <h1 className="mb-7 mt-5 mx-auto text-[1.4rem] sm:text-[1.8rem] text-[#1b375f] font-bold font-mono">
          Members Roles Details
        </h1>
        {!roleData && <Loader />}
        {roleData && (
          <div className="w-[95%] md:w-[75%] lg:w-[60%] flex flex-col justify-center ">
            <table className="min-w-full bg-white border  shadow-md rounded-lg overflow-hidden">
              <thead className="bg-gray-300">
                <tr>
                  <th className="py-2 px-2 sm:px-3 md:px-4 border-b">Name</th>
                  <th className="py-2 px-2 sm:px-3 md:px-4 border-b">Role</th>
                </tr>
              </thead>
              <tbody>
                {roleData.map((role, index) => (
                  <tr
                    key={index}
                    className="border-b-[2px] border-gray-300 hover:bg-gray-300 cursor-pointer"
                  >
                    <td className="py-2 px-4 border-b text-center">
                      {role.name}
                    </td>
                    <td className="py-2 px-4 border-b text-center">
                      {role.role}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="absolute bottom-9 right-11">
              <Link
                to="/quarter1"
                className="bg-[#1b375f] text-white px-4 py-2 rounded"
              >
                Next
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MemberRolesDetails;
