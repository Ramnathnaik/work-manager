'use client'

import Image from "next/image";
import React, { useState } from "react";

const Login = () => {
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: ''
  });

  const handleLogin = async () => {
    if (!loginForm.email) return;
    if (!loginForm.password) return;


    clearForm();
  }

  const clearForm = () => {
    setLoginForm({
      email: '',
      password: ''
    })
  }

  return (
    <div className="grid grid-cols-12">
      <style jsx> {
        `
        .seperator {
          height: 25%;
          width: 2px;
          background: #374151;
          top: 180px;
          bottom: 0;
          position: absolute;
          left: 50%;
        }
        `
      }
      </style>
      <div className="col-span-4 col-start-2 flex justify-center">
        <Image src={'/login.svg'} width={250} height={250} alt="login-img" />
      </div>
      <div className="seperator"></div>
      <div className="col-span-4 col-start-7 p-5 mt-3 ms-5">
        <h1 className="text-xl font-semibold text-center mb-3">Login</h1>
        <form action="#!" onSubmit={handleLogin}>
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
                setLoginForm({
                  ...loginForm,
                  email: event.target.value
                });
              }}
              value={loginForm.email}
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
                setLoginForm({
                  ...loginForm,
                  password: event.target.value
                })
              }}
              value={loginForm.password}
            />
          </div>
          <div className="flex justify-center space-x-8 mt-5 mb-3">
            <button
              type="submit"
              className="bg-gradient-to-r from-sky-500 to-indigo-500 w-40 px-3 py-2 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 font-semibold"
            >
              Login
            </button>
            <button type="reset" onClick={clearForm} className="bg-gradient-to-r from-red-700 to-red-800 w-40 px-3 py-2 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-red-700 duration-300 font-semibold">
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
