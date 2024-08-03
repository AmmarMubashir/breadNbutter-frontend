import { useMutation } from "react-query";
import { useAuthContext } from "../../context/AuthContext";
import { API_BASE_URL } from "./api";

export const useGetQuarter4 = () => {
  const { jwt } = useAuthContext();
  const getQuarter4Info = async () => {
    const response = await fetch(`${API_BASE_URL}/api/v1/quarter4`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    if (!response.ok) {
      throw new Error("Error in Getting quarter 3");
    }

    return await response.json();
  };

  const {
    mutateAsync: Quarter4Info,
    isLoading,
    isSuccess,
    error,
  } = useMutation(getQuarter4Info);

  return { Quarter4Info, isLoading, isSuccess, error };
};

export const useUpdateQuarter4 = () => {
  const { jwt } = useAuthContext();
  const updateQuarter4Info = async (data) => {
    const response = await fetch(
      `${API_BASE_URL}/api/v1/admin/updateQuarter4`,
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
      throw new Error("Error in Updating quarter 3");
    }

    return await response.json();
  };

  const {
    mutateAsync: UpdateQuarter4,
    isLoading,
    isSuccess,
    error,
  } = useMutation(updateQuarter4Info);

  return { UpdateQuarter4, isLoading, isSuccess, error };
};

export const useCreateQuarter4 = () => {
  const { jwt } = useAuthContext();
  const createQuarter4Info = async (data) => {
    const response = await fetch(`${API_BASE_URL}/api/v1/quarter4`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("Error in Getting quarter 3");
    }

    return await response.json();
  };

  const {
    mutateAsync: CreateQuarter4,
    isLoading,
    isSuccess,
    error,
  } = useMutation(createQuarter4Info);

  return { CreateQuarter4, isLoading, isSuccess, error };
};

export const useGetUserQuarter4 = () => {
  const { jwt } = useAuthContext();
  const getUserQuarter4 = async () => {
    const response = await fetch(
      `${API_BASE_URL}/api/v1/quarter4/quarter4Details`,
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      }
    );
    if (!response.ok) {
      throw new Error("Error in Getting quarter 3");
    }

    return await response.json();
  };

  const {
    mutateAsync: UserQuarter4,
    isLoading,
    isSuccess,
    error,
  } = useMutation(getUserQuarter4);

  return { UserQuarter4, isLoading, isSuccess, error };
};

export const useGetIndividualUserQuarter4 = () => {
  const { jwt } = useAuthContext();
  const getIndividualUserQuarter4 = async (id) => {
    // console.log("ID");
    const response = await fetch(
      `${API_BASE_URL}/api/v1/quarter4/quarter4Details/${id}`,
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      }
    );
    if (!response.ok) {
      throw new Error("Error in Getting quarter 3");
    }

    return await response.json();
  };

  const {
    mutateAsync: IndividualUserQuarter4,
    isLoading,
    isSuccess,
    error,
  } = useMutation(getIndividualUserQuarter4);

  return { IndividualUserQuarter4, isLoading, isSuccess, error };
};
