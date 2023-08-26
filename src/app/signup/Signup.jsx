"use client";

import { httpAxios } from "@/helper/httpHelper";
import React, { useState } from "react";
import { SignupUser } from "../services/userServices";
import Image from "next/image";
import { toast } from "react-toastify";

const Signup = () => {
  const [signupForm, setSignupForm] = useState({
    name: "",
    email: "",
    password: "",
    about: "",
    profileURL: "",
  });

  const handleSignupForm = async (event) => {
    event.preventDefault();

    if (!signupForm.name) return;
    if (!signupForm.email) return;
    if (!signupForm.password) return;

    /* Email checking using regex */
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValidEmail = emailRegex.test(signupForm.email);

    if (!isValidEmail) return;

    /* Password validation using regex. Here are the conditions 
    1. It should be of atleast 8 characters
    2. It should include atleast 1 Uppercase, 1 Lowercase, 1 numeric and 1 special character
    */
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const isValidPassword = passwordRegex.test(signupForm.password);

    if (!isValidPassword) {
      toast.error("Password should be complex!");
      return;
    }

    const toastyNotify = toast.loading("Signing up the user", {
      position: "top-center",
    });

    try {
      const signedUpUser = await SignupUser(signupForm);
      clearForm();
      console.log(signedUpUser);
      toast.update(toastyNotify, {
        render: "User signed up successfully!",
        type: "success",
        isLoading: false,
        autoClose: 3000,
      });
    } catch (error) {
      clearForm();
      console.log(error);
      toast.update(toastyNotify, {
        render: "User creation failed. Try after sometime",
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
    }
  };

  const clearForm = () => {
    setSignupForm({
      name: "",
      email: "",
      password: "",
      about: "",
      profileURL: "",
    });
  };

  return (
    <div className="grid grid-cols-12">
      <style jsx>
        {`
          .seperator {
            height: 55%;
            width: 2px;
            background: #374151;
            top: 150px;
            bottom: 0;
            position: absolute;
            left: 50%;
          }
        `}
      </style>
      <div className="col-span-4 col-start-2 flex justify-center">
        <Image src={"/signup.svg"} height={300} width={300} alt="signup-img" />
      </div>
      <div className="seperator"></div>
      <div className="col-span-4 col-start-7 p-5 mt-3 ms-5">
        <h1 className="font-semibold text-xl text-center mb-3">Signup</h1>
        <form action="#!" onSubmit={handleSignupForm}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter username"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(event) => {
                setSignupForm({
                  ...signupForm,
                  name: event.target.value,
                });
              }}
              value={signupForm.name}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(event) => {
                setSignupForm({
                  ...signupForm,
                  email: event.target.value,
                });
              }}
              value={signupForm.email}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(event) => {
                setSignupForm({
                  ...signupForm,
                  password: event.target.value,
                });
              }}
              value={signupForm.password}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="about"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              About
            </label>
            <textarea
              id="about"
              name="about"
              placeholder="Write a small bio of you"
              className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(event) => {
                setSignupForm({
                  ...signupForm,
                  about: event.target.value,
                });
              }}
              value={signupForm.about}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="profileURL"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Password
            </label>
            <input
              type="text"
              id="profileURL"
              name="profileURL"
              placeholder="Enter profile URL"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(event) => {
                setSignupForm({
                  ...signupForm,
                  profileURL: event.target.value,
                });
              }}
              value={signupForm.profileURL}
            />
            <div className="flex justify-center space-x-8 mt-5 mb-3">
              <button
                type="submit"
                className="bg-gradient-to-r from-sky-500 to-indigo-500 w-40 px-3 py-2 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 font-semibold"
              >
                Signup
              </button>
              <button
                type="reset"
                className="bg-gradient-to-r from-red-700 to-red-800 w-40 px-3 py-2 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-red-700 duration-300 font-semibold"
              >
                Clear
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
