import { sendResponse } from "@/helper/response";
import { User } from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt';
import { connectDB } from "@/helper/db";

connectDB();

/* Get all users */
export async function GET(request) {
    let users = [];

    try {
        users = await User.find();
    } catch (error) {
        console.log(error);
        return sendResponse('Failed to fetch user');
    }
    return NextResponse.json(users, {status: 200, statusText: 'all users'});
}

/* Creation of user */
export async function POST(request) {
    const { name, email, password, about, profileURL } = await request.json();

    const user = new User({
        name,
        email,
        password,
        about,
        profileURL
    });

    try {
        user.password = bcrypt.hashSync(user.password, parseInt(process.env.BCRYPT_SALT));
        const createdUser = await user.save();
        return NextResponse.json(createdUser, {status: 201, statusText: 'user got created'});
    } catch (error) {
        console.log(error);
        return sendResponse('User creation failed');
    }
}