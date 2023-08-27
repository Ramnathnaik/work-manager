"use client";

import UserContext from "@/context/userContext";
import React, { useContext, useEffect, useState } from "react";
import { getTasksForUser } from "../services/taskServices";
import { toast } from "react-toastify";
import Task from "./Task";

const ShowTasks = () => {
  const context = useContext(UserContext);

  const [tasks, setTasks] = useState([]);

  const getTasks = async (userId) => {
    try {
      const data = await getTasksForUser(userId);
      setTasks([...data].reverse());
    } catch (error) {
      console.log(error);
      toast.error("Error in getting the tasks");
    }
  };

  useEffect(() => {
    if (context.user) {
      getTasks(context.user._id);
    }
  }, [context.user, tasks]);

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-6 col-start-4 p-5 mt-3">
        <h1 className="font-semibold text-xl text-center mb-3">
          Total Tasks: {tasks.length}
        </h1>
        {tasks.map((task) => (
          <Task task={task} key={task._id} />
        ))}
      </div>
    </div>
  );
};

export default ShowTasks;
