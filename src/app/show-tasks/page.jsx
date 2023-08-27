import React, { Suspense } from "react";
import ShowTasks from "./ShowTasks";
import ShowTasksLoading from "./loading";

export const metadata = {
  title: "Show Tasks : Task Manager",
};

const ShowTasksPage = () => {
  return (
    <Suspense fallback={<ShowTasksLoading />}>
      <ShowTasks />
    </Suspense>
  );
};

export default ShowTasksPage;
