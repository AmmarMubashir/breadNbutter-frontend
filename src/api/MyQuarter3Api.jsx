import { useMutation } from "react-query";
import { useAuthContext } from "../../context/AuthContext";
import { API_BASE_URL } from "./api";

export const useGetQuarter3 = () => {
  const { jwt } = useAuthContext();
  const getQuarter3Info = async () => {
    const response = await fetch(`${API_BASE_URL}/api/v1/quarter3`, {
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
    mutateAsync: Quarter3Info,
    isLoading,
    isSuccess,
    error,
  } = useMutation(getQuarter3Info);

  return { Quarter3Info, isLoading, isSuccess, error };
};

export const useUpdateQuarter3 = () => {
  const { jwt } = useAuthContext();
  const updateQuarter3Info = async (data) => {
    const response = await fetch(
      `${API_BASE_URL}/api/v1/admin/updateQuarter3`,
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
    mutateAsync: UpdateQuarter3,
    isLoading,
    isSuccess,
    error,
  } = useMutation(updateQuarter3Info);

  return { UpdateQuarter3, isLoading, isSuccess, error };
};

export const useCreateQuarter3 = () => {
  const { jwt } = useAuthContext();
  const createQuarter3Info = async (data) => {
    const response = await fetch(`${API_BASE_URL}/api/v1/quarter3`, {
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
    mutateAsync: CreateQuarter3,
    isLoading,
    isSuccess,
    error,
  } = useMutation(createQuarter3Info);

  return { CreateQuarter3, isLoading, isSuccess, error };
};

export const useGetUserQuarter3 = () => {
  const { jwt } = useAuthContext();
  const getUserQuarter3 = async () => {
    const response = await fetch(
      `${API_BASE_URL}/api/v1/quarter3/quarter3Details`,
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
    mutateAsync: UserQuarter3,
    isLoading,
    isSuccess,
    error,
  } = useMutation(getUserQuarter3);

  return { UserQuarter3, isLoading, isSuccess, error };
};

export const useGetIndividualUserQuarter3 = () => {
  const { jwt } = useAuthContext();
  const getIndividualUserQuarter3 = async (id) => {
    // console.log("ID");
    const response = await fetch(
      `${API_BASE_URL}/api/v1/quarter3/quarter3Details/${id}`,
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
    mutateAsync: IndividualUserQuarter3,
    isLoading,
    isSuccess,
    error,
  } = useMutation(getIndividualUserQuarter3);

  return { IndividualUserQuarter3, isLoading, isSuccess, error };
};
