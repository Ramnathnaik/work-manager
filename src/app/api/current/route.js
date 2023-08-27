import { sendResponse } from "@/helper/response";
import { User } from "@/models/user";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function GET(request) {
  const authToken = await request.cookies.get("authToken")?.value;

  let currentUser = {};

  try {
    if (authToken) {
      const data = jwt.verify(authToken, process.env.JWT_KEY);
      currentUser = await User.findById(data._id).select("-password");
    }
  } catch (error) {
    console.log(error);
    return sendResponse("Error in fetching current user", false, 401);
  }

  return NextResponse.json(currentUser, {
    status: 200,
    statusText: "Current user",
  });
}
