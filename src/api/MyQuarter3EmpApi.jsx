import { useMutation } from "react-query";
import { useAuthContext } from "../../context/AuthContext";
import { API_BASE_URL } from "./api";

export const useCreateQuarter3Emp = () => {
  const { jwt } = useAuthContext();

  const createQuarter3EmpData = async (data) => {
    const response = await fetch(`${API_BASE_URL}/api/v1/quarter3Emp`, {
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
    mutateAsync: createQuarter3Emp,
    isLoading,
    isSuccess,
    error,
  } = useMutation(createQuarter3EmpData);

  return { createQuarter3Emp, isLoading, isSuccess, error };
};

export const useGetQuarter3Emp = () => {
  const { jwt } = useAuthContext();

  const getQuarter3EmpData = async () => {
    const response = await fetch(`${API_BASE_URL}/api/v1/quarter3Emp`, {
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
    mutateAsync: getQuarter3Emp,
    isLoading,
    isSuccess,
    error,
  } = useMutation(getQuarter3EmpData);

  return { getQuarter3Emp, isLoading, isSuccess, error };
};
