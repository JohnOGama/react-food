import axiosClient from "./middleware";

export const validateAuthorization = async () => {
  return await axiosClient.get("/validate");
};
