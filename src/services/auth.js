import { apiClient, clearDetails } from "./config";

export const apiSignUp = async (payload) => {
  return apiClient.post("/api/v1/users/auth/signup", payload);
};

export const apiLogin = async (payload) => {
  return apiClient.post("/api/v1/users/auth/token/login", payload);
};

export const apiLogout = async () => {
  clearDetails();
};

export const apiCheckUsernameExists = async (userName) => {
  return apiClient.get(`/auth/${userName}`);
};