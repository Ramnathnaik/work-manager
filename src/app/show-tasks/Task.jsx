import UserContext from "@/context/userContext";
import React, { useContext } from "react";
import { deleteTask } from "../services/taskServices";
import { toast } from "react-toastify";

const Task = ({ task }) => {
  const { user } = useContext(UserContext);

  const taskDelete = async () => {
    try {
      const response = await deleteTask(task._id);
      toast.success("Task got deleted successfully!");
    } catch (error) {
      console.log(error);
      toast.error("Error in deleting the task");
    }
  };

  return (
    <div className="block mb-3">
      <div
        className={`p-6 bg-white border border-gray-200 rounded-lg hadow dark:bg-gray-800 ${
          task.status === "completed"
            ? "dark:bg-green-700"
            : "dark:border-gray-700"
        }`}
      >
        <h2 className="mb-2 font-semibold text-xl">{task.title}</h2>
        <br />
        <p className="font-normal">{task.content}</p>
        <br />
        <div className="flex justify-between">
          <p className="font-normal">
            Status: <span className="font-semibold">{task.status}</span>
          </p>
          <p className="font-normal">
            Author: <span className="font-semibold">{user?.name}</span>
          </p>
        </div>
        <br />
        <div className="flex justify-end">
          <button
            className="inline-flex items-end px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md"
            onClick={taskDelete}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Task;
