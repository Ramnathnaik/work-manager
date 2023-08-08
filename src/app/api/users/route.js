import { connectDB } from "@/helper/db";
import { User } from "@/models/user";
import { NextResponse } from "next/server";

connectDB();

/* Get all users */
export async function GET(request) {
    let users = [];

    try {
        users = await User.find();
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: 'Failed to fetch user',
            status: false
        });
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
        const createdUser = await user.save();
        return NextResponse.json(createdUser, {status: 201, statusText: 'user got created'});
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: 'User creation failed', 
            status: false
        }, {
            status: 401,
            statusText: 'failed'
        })
    }
}