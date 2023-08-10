import { sendResponse } from "@/helper/response";
import { Task } from "@/models/task";
import { NextResponse } from "next/server";

export async function GET(request, {params}) {
    const {userId} = params;
    let tasks = [];

    try {
        tasks = await Task.find({userId});
    } catch (error) {
        console.log(error);
        return sendResponse('Unable to fetch the task for the user');
    }

    return NextResponse.json(tasks, {
        status: 200,
        statusText: 'User related tasks'
    });
}