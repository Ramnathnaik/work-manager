import { httpAxios } from "@/helper/httpHelper"

export const SignupUser = async (signupForm) => {
    return await httpAxios.post('/api/users', signupForm).then((response) => response.data);
}