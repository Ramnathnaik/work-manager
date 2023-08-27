import { connectDB } from "@/helper/db";
import { sendResponse } from "@/helper/response";
import { Task } from "@/models/task";
import { User } from "@/models/user";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

connectDB();

/* Get all tasks */
export async function GET() {
  let tasks = [];

  try {
    tasks = await Task.find();
  } catch (error) {
    console.log(error);
    return sendResponse("error in getting all tasks");
  }

  return NextResponse.json(tasks, {
    status: 200,
    statusText: "All tasks",
  });
}

/* Add a new Task */
export async function POST(request) {
  const { title, content, userId, status } = await request.json();
  const authToken = await request.cookies.get("authToken")?.value;
  const data = jwt.verify(authToken, process.env.JWT_KEY);

  try {
    const user = User.findById(userId);

    if (user != null) {
      const task = new Task({
        title,
        content,
        userId: data._id,
        status,
      });
      const createdTask = await task.save();

      return NextResponse.json(createdTask, {
        status: 201,
        statusText: "task created",
      });
    } else {
      return sendResponse("User not found");
    }
  } catch (error) {
    console.log(error);
    return sendResponse("Unable to add the task");
  }
}
