import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export async function middleware(request) {
  const authToken = await request.cookies.get("authToken")?.value;

  if (
    request.nextUrl.pathname === "/api/login" ||
    request.nextUrl.pathname === "/api/users"
  )
    return;

  const loggedInUserPathNotAccessible =
    request.nextUrl.pathname === "/login" ||
    request.nextUrl.pathname === "/signup";

  if (loggedInUserPathNotAccessible) {
    //accessing not secured route
    if (authToken)
      return NextResponse.redirect(new URL("/profile/user", request.url));
  } else {
    //accessing secured route
    if (!authToken)
      return NextResponse.redirect(new URL("/login", request.url));
    else {
      //verify token
    }
  }
  //   return NextResponse.redirect(new URL("/", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/",
    "/login",
    "/signup",
    "/add-task",
    "/show-tasks",
    "/profile/:path*",
    "/api/:path*",
  ],
};
