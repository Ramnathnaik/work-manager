"use client";

import { logout } from "@/app/services/authServices";
import UserContext from "@/context/userContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const Navbar = () => {
  const context = useContext(UserContext);

  const router = useRouter();

  async function userLogout() {
    try {
      const response = await logout();
      console.log(response);
      context.setUser(undefined);
      router.push("/login");
    } catch (error) {
      console.log(error);
      toast.error("Error in logout");
    }
  }

  return (
    <nav className="bg-gradient-to-r from-sky-500 to-indigo-500 px-20 py-2 h-14 flex justify-between items-center">
      <div className="brand">
        <h1 className="text-xl font-semibold">
          <a href="#!">Task Manager</a>
        </h1>
      </div>
      <div>
        <ul className="flex space-x-7">
          {context.user && (
            <>
              <Link href={"/"} className="hover:text-white hover:font-semibold">
                Home
              </Link>
              <Link
                href={"/add-task"}
                className="hover:text-white hover:font-semibold"
              >
                Add Task
              </Link>
              <Link
                href={"/show-tasks"}
                className="hover:text-white hover:font-semibold"
              >
                Show Tasks
              </Link>
            </>
          )}
        </ul>
      </div>
      <div>
        <ul className="flex space-x-5 font-semibold">
          {!context.user && (
            <>
              <Link href={"/login"}>Login</Link>
              <Link href={"/signup"}>Signup</Link>
            </>
          )}
          {context.user && (
            <>
              <button onClick={userLogout}>Logout</button>
              <Link href={"#!"}>{context.user.name}</Link>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
