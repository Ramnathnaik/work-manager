"use client";

import React, { useState } from "react";
import { addTask } from "../services/taskServices";
import { ToastContainer, toast } from "react-toastify";

const AddTask = () => {
  // document.title = metadata.title;

  const [task, setTask] = useState({
    title: "",
    content: "",
    status: "none",
    userId: "64d26d739612e53e1c9f1159",
  });

  /* Handle Add Task */
  const handleAddTask = async (event) => {
    event.preventDefault();
    if (!task.title) return;
    if (!task.content) return;
    if (task.status === "none") return;

    const toastyNotify = toast.loading("Please wait...", {
      position: 'top-center'
    });

    try {
      const createdTask = await addTask(task);
      console.log(createdTask);
      toast.update(toastyNotify, { render: "Task created successfully!", type: "success", isLoading: false, autoClose: 3000 });
    } catch (error) {
      console.log(error);
      toast.update(toastyNotify, { render: "Task creation failed!", type: "error", isLoading: false, autoClose: 3000 });
    }

  };

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-6 col-start-4 p-5 mt-3">
        <h1 className="font-semibold text-xl text-center mb-3">Add Task</h1>
        <form action="#!" onSubmit={handleAddTask}>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Enter title"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(event) => {
                setTask({
                  ...task,
                  title: event.target.value,
                });
              }}
              value={task.title}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="content"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Content
            </label>
            <textarea
              id="content"
              name="content"
              placeholder="Enter content"
              className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(event) => {
                setTask({
                  ...task,
                  content: event.target.value,
                });
              }}
              value={task.content}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="status"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Status
            </label>
            <select
              id="status"
              name="status"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(event) => {
                setTask({
                  ...task,
                  status: event.target.value,
                });
              }}
              value={task.status}
            >
              <option value="none" default disabled>
                ----Select Value----
              </option>
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
            </select>
          </div>
          <div className="flex justify-center space-x-8 mt-5 mb-3">
            <button className="bg-gradient-to-r from-sky-500 to-indigo-500 w-40 px-3 py-2 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 font-semibold">
              Add Task
            </button>
            <button className="bg-gradient-to-r from-red-700 to-red-800 w-40 px-3 py-2 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-red-700 duration-300 font-semibold">
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
