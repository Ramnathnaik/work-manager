import { sendResponse } from "@/helper/response";
import { User } from "@/models/user";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";

export async function POST(request) {
    const { email, password } = await request.json();

    try {
        /* Check user exists */
        const user = await User.findOne({email});
        if (!user) throw new Error('User not found');

        /* Check password matching */
        const isPasswordMatched = bcrypt.compareSync(password, user.password);
        if (!isPasswordMatched) throw new Error('Password not matched');

        /* Create a JWT Token */
        const token = jwt.sign({
            _id: user._id,
            name: user.name
        }, process.env.JWT_KEY);

        const response = sendResponse('Login success', true, 200, 'login success');
        response.cookies.set('authToken', token, {
            expiresIn: '1d',
            httpOnly: true
        });

        return response;

    } catch (error) {
        console.log(error);
        return sendResponse(error.message, false, 401, 'user login failed');
    }
}