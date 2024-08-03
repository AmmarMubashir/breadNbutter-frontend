import { useMutation } from "react-query";
import { useAuthContext } from "../../context/AuthContext";
import { API_BASE_URL } from "./api";

export const useCreateQuarter4Emp = () => {
  const { jwt } = useAuthContext();

  const createQuarter4EmpData = async (data) => {
    const response = await fetch(`${API_BASE_URL}/api/v1/quarter4Emp`, {
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
    mutateAsync: createQuarter4Emp,
    isLoading,
    isSuccess,
    error,
  } = useMutation(createQuarter4EmpData);

  return { createQuarter4Emp, isLoading, isSuccess, error };
};

export const useGetQuarter4Emp = () => {
  const { jwt } = useAuthContext();

  const getQuarter4EmpData = async () => {
    const response = await fetch(`${API_BASE_URL}/api/v1/quarter4Emp`, {
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
    mutateAsync: getQuarter4Emp,
    isLoading,
    isSuccess,
    error,
  } = useMutation(getQuarter4EmpData);

  return { getQuarter4Emp, isLoading, isSuccess, error };
};
