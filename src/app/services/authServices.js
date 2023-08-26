import { httpAxios } from "@/helper/httpHelper";

export const login = async (loginData) => {
  return await httpAxios
    .post("/api/login", loginData)
    .then((response) => response.data);
};

export const currentUser = async () => {
  return await httpAxios.get("/api/current").then((response) => response.data);
};
