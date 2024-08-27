import { useEffect } from "react";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { useAuthContext } from "../../context/AuthContext";
import { API_BASE_URL } from "./api";

export const useCreateStartup = () => {
  const { jwt } = useAuthContext();
  // console.log(jwt);
  const createStartupData = async (data) => {
    // console.log(data);
    const response = await fetch(`${API_BASE_URL}/api/v1/startup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("Error in saving Startup ");
    }

    return await response.json();
  };

  const {
    mutateAsync: createStartup,
    isLoading,
    isSuccess,
    error,
  } = useMutation(createStartupData);

  // useEffect(() => {
  //   if (isSuccess) {
  //     toast.success("Startup saved Successfully");
  //   }
  // }, [isSuccess, error]);
  // useEffect(() => {
  //   if (error) {
  //     toast.error(error.toString());
  //   }
  // }, [error]);

  return { createStartup, isLoading, isSuccess, error };
};

export const useGetStartup = () => {
  const getStartupData = async (id) => {
    const response = await fetch(`${API_BASE_URL}/api/v1/startup/${id}`);
    if (!response.ok) {
      throw new Error("Error in Getting Startup");
    }

    return await response.json();
  };

  const {
    mutateAsync: getStartup,
    isLoading,
    isSuccess,
    error,
  } = useMutation(getStartupData);

  return { getStartup, isLoading, isSuccess, error };
};

export const useGetIndividualStartup = () => {
  const { jwt } = useAuthContext();
  const getIndividualStartupData = async () => {
    const response = await fetch(`${API_BASE_URL}/api/v1/startup`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    if (!response.ok) {
      throw new Error("Error in Getting quarter 1");
    }

    return await response.json();
  };

  const {
    mutateAsync: getIndividualStartup,
    isLoading,
    isSuccess,
    error,
  } = useMutation(getIndividualStartupData);

  return { getIndividualStartup, isLoading, isSuccess, error };
};

export const useGetIndividualStartupAdmin = () => {
  const { jwt } = useAuthContext();
  const getIndividualStartupAdminData = async (id) => {
    const response = await fetch(
      `${API_BASE_URL}/api/v1/admin/getIndividualStartup/${id}`,
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      }
    );
    if (!response.ok) {
      throw new Error("Error in Getting Startup");
    }

    return await response.json();
  };

  const {
    mutateAsync: getIndividualStartupAdmin,
    isLoading,
    isSuccess,
    error,
  } = useMutation(getIndividualStartupAdminData);

  return { getIndividualStartupAdmin, isLoading, isSuccess, error };
};

export const useGetIndividualQuarter1Admin = () => {
  const { jwt } = useAuthContext();
  const getIndividualQuarter1Admin = async (id) => {
    const response = await fetch(
      `${API_BASE_URL}/api/v1/admin/getIndividualQuarter1/${id}`,
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
    mutateAsync: getQuarter1Admin,
    isLoading,
    isSuccess,
    error,
  } = useMutation(getIndividualQuarter1Admin);

  return { getQuarter1Admin, isLoading, isSuccess, error };
};

export const useGetIndividualQuarter2Admin = () => {
  const { jwt } = useAuthContext();
  const getIndividualQuarter2Admin = async (id) => {
    const response = await fetch(
      `${API_BASE_URL}/api/v1/admin/getIndividualQuarter2/${id}`,
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
    mutateAsync: getQuarter2Admin,
    isLoading,
    isSuccess,
    error,
  } = useMutation(getIndividualQuarter2Admin);

  return { getQuarter2Admin, isLoading, isSuccess, error };
};
export const useGetIndividualQuarter3Admin = () => {
  const { jwt } = useAuthContext();
  const getIndividualQuarter3Admin = async (id) => {
    const response = await fetch(
      `${API_BASE_URL}/api/v1/admin/getIndividualQuarter3/${id}`,
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
    mutateAsync: getQuarter3Admin,
    isLoading,
    isSuccess,
    error,
  } = useMutation(getIndividualQuarter3Admin);

  return { getQuarter3Admin, isLoading, isSuccess, error };
};

export const useGetIndividualQuarter4Admin = () => {
  const { jwt } = useAuthContext();
  const getIndividualQuarter4Admin = async (id) => {
    const response = await fetch(
      `${API_BASE_URL}/api/v1/admin/getIndividualQuarter4/${id}`,
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      }
    );
    if (!response.ok) {
      throw new Error("Error in Getting quarter 4");
    }

    return await response.json();
  };

  const {
    mutateAsync: getQuarter4Admin,
    isLoading,
    isSuccess,
    error,
  } = useMutation(getIndividualQuarter4Admin);

  return { getQuarter4Admin, isLoading, isSuccess, error };
};
