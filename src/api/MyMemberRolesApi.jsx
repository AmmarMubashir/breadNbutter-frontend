import { useMutation } from "react-query";
import { useAuthContext } from "../../context/AuthContext";
import { API_BASE_URL } from "./api";

export const useCreateMemberRoles = () => {
  const { jwt } = useAuthContext();
  const createMembersRoles = async (data) => {
    const response = await fetch(`${API_BASE_URL}/api/v1/roles`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("Error in creating member roles");
    }

    return await response.json();
  };

  const {
    mutateAsync: createRoles,
    isLoading,
    isSuccess,
    error,
  } = useMutation(createMembersRoles);

  return { createRoles, isLoading, isSuccess, error };
};

export const usegetMemberRoles = () => {
  const { jwt } = useAuthContext();
  const getMembersRoles = async () => {
    const response = await fetch(`${API_BASE_URL}/api/v1/roles`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    if (!response.ok) {
      throw new Error("Error in getting member roles");
    }

    return await response.json();
  };

  const {
    mutateAsync: getMembers,
    isLoading,
    isSuccess,
    error,
  } = useMutation(getMembersRoles);

  return { getMembers, isLoading, isSuccess, error };
};

export const usegetMemberRolesById = () => {
  //   console.log(id);
  const { jwt } = useAuthContext();
  const getMembersRolesById = async (id) => {
    const response = await fetch(`${API_BASE_URL}/api/v1/roles/${id}`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    if (!response.ok) {
      throw new Error("Error in getting member roles");
    }

    return await response.json();
  };

  const {
    mutateAsync: getMembersById,
    isLoading,
    isSuccess,
    error,
  } = useMutation(getMembersRolesById);

  return { getMembersById, isLoading, isSuccess, error };
};

export const usegetMemberRolesAdmin = () => {
  const { jwt } = useAuthContext();
  const getMembersRolesAdmin = async (id) => {
    const response = await fetch(`${API_BASE_URL}/api/v1/roles/admin/${id}`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    if (!response.ok) {
      throw new Error("Error in getting member roles");
    }

    return await response.json();
  };

  const {
    mutateAsync: getMembersAdmin,
    isLoading,
    isSuccess,
    error,
  } = useMutation(getMembersRolesAdmin);
  return { getMembersAdmin, isLoading, isSuccess, error };
};
