"use client";

import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="h-60 px-20 py-3 bg-gradient-to-r from-slate-700 to-slate-900">
      <div className="flex justify-around items-center">
        <div>
          <h1 className="text-xl font-semibold">Task Manager</h1>
          <br />
          <p>Track your tasks from everywhere!</p>
        </div>
        <div>
          <h1 className="text-xl font-semibold pt-5">Social Links</h1>
          <br />
          <ul>
            <li>
              <a href="#!">LinkedIn</a>
            </li>
            <li>
              <a href="#!">YouTube</a>
            </li>
            <li>
              <a href="#!">Instagram</a>
            </li>
          </ul>
        </div>
      </div>
      <small className="flex justify-center pt-8 mb-10 text-gray-300">
        taskmanager.com® is a registered trademark by taskmanager.com, Inc. All
        rights reserved.
      </small>
    </footer>
  );
};

export default Footer;
