import { useMutation } from "react-query";
import { useAuthContext } from "../../context/AuthContext";
import { API_BASE_URL } from "./api";

export const useGetEmployeeInfo = () => {
  const { jwt } = useAuthContext();

  const getEmployeeInformation = async () => {
    const response = await fetch(`${API_BASE_URL}/api/v1/employee`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    if (!response.ok) {
      throw new Error("Error in Getting Income Statement");
    }

    return await response.json();
  };

  const {
    mutateAsync: getEmployeeInfo,
    isLoading,
    isSuccess,
    error,
  } = useMutation(getEmployeeInformation);

  return { getEmployeeInfo, isLoading, isSuccess, error };
};

export const useUpdateEmployeeInfo = () => {
  const { jwt } = useAuthContext();

  const updateEmployeeInformation = async (data) => {
    const response = await fetch(`${API_BASE_URL}/api/v1/employee`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("Error in Getting Income Statement");
    }

    return await response.json();
  };

  const {
    mutateAsync: updateEmployeeInfo,
    isLoading,
    isSuccess,
    error,
  } = useMutation(updateEmployeeInformation);

  return { updateEmployeeInfo, isLoading, isSuccess, error };
};
