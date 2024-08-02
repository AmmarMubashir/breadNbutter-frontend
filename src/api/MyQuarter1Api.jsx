import { useMutation } from "react-query";
import { useAuthContext } from "../../context/AuthContext";
import { API_BASE_URL } from "./api";

export const useGetQuarter1 = () => {
  const { jwt } = useAuthContext();
  const getQuarter1Info = async () => {
    const response = await fetch(`${API_BASE_URL}/api/v1/quarter1`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    if (!response.ok) {
      throw new Error("Error in Getting quarter 2");
    }

    return await response.json();
  };

  const {
    mutateAsync: Quarter1Info,
    isLoading,
    isSuccess,
    error,
  } = useMutation(getQuarter1Info);

  return { Quarter1Info, isLoading, isSuccess, error };
};

export const useUpdateQuarter1 = () => {
  const { jwt } = useAuthContext();
  const updateQuarter1Info = async (data) => {
    const response = await fetch(
      `${API_BASE_URL}/api/v1/admin/updateQuarter1`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwt}`,
        },
        body: JSON.stringify(data),
      }
    );
    if (!response.ok) {
      throw new Error("Error in Updating quarter 2");
    }

    return await response.json();
  };

  const {
    mutateAsync: UpdateQuarter1,
    isLoading,
    isSuccess,
    error,
  } = useMutation(updateQuarter1Info);

  return { UpdateQuarter1, isLoading, isSuccess, error };
};

export const useCreateQuarter1 = () => {
  const { jwt } = useAuthContext();
  const createQuarter1Info = async (data) => {
    const response = await fetch(`${API_BASE_URL}/api/v1/quarter1`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("Error in Getting quarter 2");
    }

    return await response.json();
  };

  const {
    mutateAsync: CreateQuarter1,
    isLoading,
    isSuccess,
    error,
  } = useMutation(createQuarter1Info);

  return { CreateQuarter1, isLoading, isSuccess, error };
};

export const useGetUserQuarter1 = () => {
  const { jwt } = useAuthContext();
  const getUserQuarter1 = async () => {
    const response = await fetch(
      `${API_BASE_URL}/api/v1/quarter1/quarter1Details`,
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      }
    );
    if (!response.ok) {
      throw new Error("Error in Getting quarter 2");
    }

    return await response.json();
  };

  const {
    mutateAsync: UserQuarter1,
    isLoading,
    isSuccess,
    error,
  } = useMutation(getUserQuarter1);

  return { UserQuarter1, isLoading, isSuccess, error };
};

export const useGetIndividualUserQuarter1 = () => {
  const { jwt } = useAuthContext();
  const getIndividualUserQuarter1 = async (id) => {
    // console.log("ID");
    const response = await fetch(
      `${API_BASE_URL}/api/v1/quarter1/quarter1Details/${id}`,
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      }
    );
    if (!response.ok) {
      throw new Error("Error in Getting quarter 2");
    }

    return await response.json();
  };

  const {
    mutateAsync: IndividualUserQuarter1,
    isLoading,
    isSuccess,
    error,
  } = useMutation(getIndividualUserQuarter1);

  return { IndividualUserQuarter1, isLoading, isSuccess, error };
};
