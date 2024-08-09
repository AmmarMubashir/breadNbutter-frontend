import { useEffect } from "react";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { useAuthContext } from "../../context/AuthContext";

import { API_BASE_URL } from "./api";

export const useCreateMyUser = () => {
  const { setAuthUser, setJwt } = useAuthContext();
  const createMyUserRequest = async (user) => {
    const response = await fetch(`${API_BASE_URL}/api/v1/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error("Failed to create user");
    }

    // console.log(data.token);
    setJwt(data.token);
    localStorage.setItem("breadUser", JSON.stringify(data.data));
    localStorage.setItem("breadToken", data.token);
    setAuthUser(data);
  };

  const {
    mutateAsync: createUser,
    isLoading,
    error,
    isSuccess,
  } = useMutation(createMyUserRequest);

  useEffect(() => {
    if (isSuccess) {
      toast.success("User created Successfully");
    }
  }, [isSuccess]);
  useEffect(() => {
    if (error) {
      toast.error(error.toString());
    }
  }, [error]);

  return {
    createUser,
    isLoading,
    error,
    isSuccess,
  };
};
export const useLoggedMyUser = () => {
  const { setAuthUser, setJwt } = useAuthContext();
  const loginUser = async (user) => {
    const response = await fetch(`${API_BASE_URL}/api/v1/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error("Failed to login");
    }

    setJwt(data.token);
    localStorage.setItem("breadUser", JSON.stringify(data.data));
    localStorage.setItem("breadToken", data.token);
    setAuthUser(data);
  };

  const {
    mutateAsync: login,
    isLoading,
    error,
    isSuccess,
  } = useMutation(loginUser);

  useEffect(() => {
    if (isSuccess) {
      toast.success("User login Successfully");
    }
  }, [isSuccess]);
  useEffect(() => {
    if (error) {
      toast.error(error.toString());
    }
  }, [error]);

  return {
    login,
    isLoading,
    error,
    isSuccess,
  };
};

export const useForgotPassword = () => {
  const forgotPasswordData = async (data) => {
    const response = await fetch(`${API_BASE_URL}/api/v1/password/forgot`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("Error in Sending mail.Try again later");
    }

    return await response.json();
  };

  const {
    mutateAsync: forgotPassword,
    isLoading,
    isSuccess,
    error,
  } = useMutation(forgotPasswordData);

  return { forgotPassword, isLoading, isSuccess, error };
};

export const useResetPassword = () => {
  const { setAuthUser, setJwt } = useAuthContext();
  const resetPasswordData = async ({ data, token }) => {
    console.log(data, token);
    const response = await fetch(
      `${API_BASE_URL}/api/v1/password/reset/${token}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    const Userdata = await response.json();
    if (!response.ok) {
      throw new Error("Error in Updating password.Try again later");
    }

    setJwt(Userdata.cokkieToken);
    localStorage.setItem("breadUser", JSON.stringify(Userdata.data));
    localStorage.setItem("breadToken", Userdata.cokkieToken);
    setAuthUser(Userdata);

    // return await response.json();
  };

  const {
    mutateAsync: resetPassword,
    isLoading,
    isSuccess,
    error,
  } = useMutation(resetPasswordData);

  return { resetPassword, isLoading, isSuccess, error };
};

export const useLogout = () => {
  const { setAuthUser } = useAuthContext();
  const logoutUser = async () => {
    const response = await fetch(`${API_BASE_URL}/api/v1/logout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error("Failed to logout");
    }

    localStorage.removeItem("breadUser");
    localStorage.removeItem("breadToken");
    setAuthUser(null);
  };

  const {
    mutateAsync: logout,
    isLoading,
    error,
    isSuccess,
  } = useMutation(logoutUser);

  useEffect(() => {
    if (isSuccess) {
      toast.success("User logout Successfully");
    }
  }, [isSuccess]);
  useEffect(() => {
    if (error) {
      toast.error(error.toString());
    }
  }, [error]);

  return {
    logout,
    isLoading,
    error,
    isSuccess,
  };
};

export const useGetAllUsers = () => {
  const getAllUsers = async (id) => {
    const response = await fetch(`${API_BASE_URL}/api/v1/getAllUser`);
    if (!response.ok) {
      throw new Error("Error in Getting All Users");
    }

    return await response.json();
  };

  const {
    mutateAsync: getAllUser,
    isLoading,
    isSuccess,
    error,
  } = useMutation(getAllUsers);

  return { getAllUser, isLoading, isSuccess, error };
};
