import { httpAxios } from "@/helper/httpHelper"

export const login = async (loginData) => {
    return await httpAxios.post('/api/login', loginData).then((response) => response.data);
}