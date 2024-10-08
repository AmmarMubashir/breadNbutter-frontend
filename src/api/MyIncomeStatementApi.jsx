import { useEffect } from "react";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { useAuthContext } from "../../context/AuthContext";
import { API_BASE_URL } from "./api";

export const useGetIncome = () => {
  const getIncomeStatement = async () => {
    const response = await fetch(`${API_BASE_URL}/api/v1/incomeStatement`);
    if (!response.ok) {
      throw new Error("Error in Getting Income Statement");
    }

    return await response.json();
  };

  const {
    mutateAsync: getIncome,
    isLoading,
    isSuccess,
    error,
  } = useMutation(getIncomeStatement);

  return { getIncome, isLoading, isSuccess, error };
};

export const useUpdateIncome = () => {
  const updateIncomeStatement = async (data) => {
    // console.log("DATA", data);
    const response = await fetch(`${API_BASE_URL}/api/v1/editIncomeStatement`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("Error in Updating Income Statement");
    }

    return await response.json();
  };

  const {
    mutateAsync: updateIncome,
    isLoading,
    isSuccess,
    error,
  } = useMutation(updateIncomeStatement);

  // useEffect(() => {
  //   if (isSuccess) {
  //     toast.success("Successfully updated");
  //   }
  // }, [isSuccess]);

  return { updateIncome, isLoading, isSuccess, error };
};

export const useGetUserIncome = () => {
  const { jwt } = useAuthContext();
  const getUserIncomeStatement = async () => {
    const response = await fetch(
      `${API_BASE_URL}/api/v1/user/incomeStatement`,
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      }
    );
    if (!response.ok) {
      throw new Error("Error in Getting Income Statement");
    }

    return await response.json();
  };

  const {
    mutateAsync: getUserIncome,
    isLoading,
    isSuccess,
    error,
  } = useMutation(getUserIncomeStatement);

  return { getUserIncome, isLoading, isSuccess, error };
};

export const useCreateUserIncomeStatement = () => {
  const { jwt } = useAuthContext();

  const createUserIncomeStatement = async () => {
    const response = await fetch(
      `${API_BASE_URL}/api/v1/user/incomeStatement`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
        body: JSON.stringify(),
      }
    );
    if (!response.ok) {
      throw new Error("Error in Getting Income Statement");
    }

    return await response.json();
  };

  const {
    mutateAsync: CreateUserIncome,
    isLoading,
    isSuccess,
    error,
  } = useMutation(createUserIncomeStatement);

  return { CreateUserIncome, isLoading, isSuccess, error };
};

export const useUpdateUserIncomeStatement = () => {
  const { jwt } = useAuthContext();

  const UpdateUserIncomeStatement = async () => {
    const response = await fetch(
      `${API_BASE_URL}/api/v1/user/updateincomeStatement`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
        body: JSON.stringify(),
      }
    );
    if (!response.ok) {
      throw new Error("Error in Getting Income Statement");
    }

    return await response.json();
  };

  const {
    mutateAsync: UpdateUserIncome,
    isLoading,
    isSuccess,
    error,
  } = useMutation(UpdateUserIncomeStatement);

  return { UpdateUserIncome, isLoading, isSuccess, error };
};

export const useUpdateUserIncomeStatementQuarter3 = () => {
  const { jwt } = useAuthContext();

  const UpdateUserIncomeStatementQuarter3 = async () => {
    const response = await fetch(
      `${API_BASE_URL}/api/v1/user/updateincomeStatementQuarter3`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
        body: JSON.stringify(),
      }
    );
    if (!response.ok) {
      throw new Error("Error in Getting Income Statement");
    }

    return await response.json();
  };

  const {
    mutateAsync: UpdateUserIncomeQuarter3,
    isLoading,
    isSuccess,
    error,
  } = useMutation(UpdateUserIncomeStatementQuarter3);

  return { UpdateUserIncomeQuarter3, isLoading, isSuccess, error };
};
export const useUpdateUserIncomeStatementQuarter4 = () => {
  const { jwt } = useAuthContext();

  const UpdateUserIncomeStatementQuarter4 = async () => {
    const response = await fetch(
      `${API_BASE_URL}/api/v1/user/updateincomeStatementQuarter4`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
        body: JSON.stringify(),
      }
    );
    if (!response.ok) {
      throw new Error("Error in Getting Income Statement");
    }

    return await response.json();
  };

  const {
    mutateAsync: UpdateUserIncomeQuarter4,
    isLoading,
    isSuccess,
    error,
  } = useMutation(UpdateUserIncomeStatementQuarter4);

  return { UpdateUserIncomeQuarter4, isLoading, isSuccess, error };
};

export const useGetUserIncomeAdmin = () => {
  const { jwt } = useAuthContext();
  const getUserIncomeStatementAdmin = async (id) => {
    const response = await fetch(
      `${API_BASE_URL}/api/v1/admin/user/incomeStatement/${id}`,
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      }
    );
    if (!response.ok) {
      throw new Error("Error in Getting Income Statement");
    }

    return await response.json();
  };

  const {
    mutateAsync: getUserIncomeAdmin,
    isLoading,
    isSuccess,
    error,
  } = useMutation(getUserIncomeStatementAdmin);

  return { getUserIncomeAdmin, isLoading, isSuccess, error };
};

export const useUpdateUserIncomeAdmin = () => {
  const { jwt } = useAuthContext();
  const updateUserIncomeStatementAdmin = async ({ data, id }) => {
    console.log("DATA", data);
    console.log("ID", id);
    const response = await fetch(
      `${API_BASE_URL}/api/v1/admin/user/incomeStatement/${id}`,
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
      throw new Error("Error in Updating Income Statement");
    }

    return await response.json();
  };

  const {
    mutateAsync: updateUserIncomeAdmin,
    isLoading,
    isSuccess,
    error,
  } = useMutation(updateUserIncomeStatementAdmin);

  return { updateUserIncomeAdmin, isLoading, isSuccess, error };
};
