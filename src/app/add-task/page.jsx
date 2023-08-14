import React, { Suspense } from "react";
import AddTask from "./AddTask";
import AddTaskLoading from "./loading";

export const metadata = {
  title: "Add Task : Task Manager",
};

const AddTaskPage = () => {
  return (
    <Suspense fallback={<AddTaskLoading/>}><AddTask/></Suspense>
  );
};

export default AddTaskPage;
