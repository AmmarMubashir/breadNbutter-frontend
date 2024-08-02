import { useMutation } from "react-query";
import { useAuthContext } from "../../context/AuthContext";
import { API_BASE_URL } from "./api";

export const useCreateQuarter1Emp = () => {
  const { jwt } = useAuthContext();

  const createQuarter1EmpData = async (data) => {
    const response = await fetch(`${API_BASE_URL}/api/v1/quarter1Emp`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("Error in creating Employee Info");
    }

    return await response.json();
  };

  const {
    mutateAsync: createQuarter1Emp,
    isLoading,
    isSuccess,
    error,
  } = useMutation(createQuarter1EmpData);

  return { createQuarter1Emp, isLoading, isSuccess, error };
};

export const useGetQuarter1Emp = () => {
  const { jwt } = useAuthContext();

  const getQuarter1EmpData = async () => {
    const response = await fetch(`${API_BASE_URL}/api/v1/quarter1Emp`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    if (!response.ok) {
      throw new Error("Error in creating Employee Info");
    }

    return await response.json();
  };

  const {
    mutateAsync: getQuarter1Emp,
    isLoading,
    isSuccess,
    error,
  } = useMutation(getQuarter1EmpData);

  return { getQuarter1Emp, isLoading, isSuccess, error };
};
