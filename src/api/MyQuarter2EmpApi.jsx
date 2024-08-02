import { useMutation } from "react-query";
import { useAuthContext } from "../../context/AuthContext";
import { API_BASE_URL } from "./api";

export const useCreateQuarter2Emp = () => {
  const { jwt } = useAuthContext();

  const createQuarter2EmpData = async (data) => {
    const response = await fetch(`${API_BASE_URL}/api/v1/quarter2Emp`, {
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
    mutateAsync: createQuarter2Emp,
    isLoading,
    isSuccess,
    error,
  } = useMutation(createQuarter2EmpData);

  return { createQuarter2Emp, isLoading, isSuccess, error };
};

export const useGetQuarter2Emp = () => {
  const { jwt } = useAuthContext();

  const getQuarter2EmpData = async () => {
    const response = await fetch(`${API_BASE_URL}/api/v1/quarter2Emp`, {
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
    mutateAsync: getQuarter2Emp,
    isLoading,
    isSuccess,
    error,
  } = useMutation(getQuarter2EmpData);

  return { getQuarter2Emp, isLoading, isSuccess, error };
};
