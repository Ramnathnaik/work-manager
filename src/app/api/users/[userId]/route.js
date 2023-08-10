import { sendResponse } from "@/helper/response";
import { User } from "@/models/user";
import { NextResponse } from "next/server";

/* Delete user by userId */
export async function DELETE(request, {params}) {
    const {userId} = params;
    
    try {
        await User.deleteOne({_id: userId});
    } catch (error) {
        console.log(error);
        return sendResponse('error in deleting user');
    }

    return NextResponse.json({message: `${userId} got deleted`});
}

/* Get user by userId */
export async function GET(request, {params}) {
    const {userId} = params;

    let user = {};

    try {
       user = await User.findById(userId);
    } catch (error) {
        console.log(error);
        return sendResponse('User not found');
    }

    return NextResponse.json(user, {status: 200, statusText: 'User found'});
}

/* Update user by userId */
export async function PUT(request, {params}) {
    const { userId } = params;
    const { name, password, about, profileURL } = await request.json();

    try {
        const user = await User.findById(userId);
        if (user != null) {
            user.name = name;
            user.password = password;
            user.about = about;
            user.profileURL = profileURL;
            
            await user.save();
        }

        return NextResponse.json(user, {
            status: 200,
            statusText: 'user details updated successfully!'
        });
    } catch (error) {
        console.log(error);
        return sendResponse('Failed to update user');
    }
}