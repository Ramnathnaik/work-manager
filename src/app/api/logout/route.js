import { sendResponse } from "@/helper/response";

export async function POST(request) {
  const response = sendResponse("Logged out", true, 200, "success");
  response.cookies.set("authToken", "", {
    expires: new Date(0),
  });
  return response;
}
