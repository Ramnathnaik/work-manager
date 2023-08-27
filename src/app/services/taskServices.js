import { httpAxios } from "@/helper/httpHelper";

export async function addTask(task) {
  return await httpAxios
    .post("api/tasks", task)
    .then((response) => response.data);
}

export async function getTasksForUser(userId) {
  return await httpAxios
    .get(`/api/users/${userId}/tasks`)
    .then((response) => response.data);
}

export async function deleteTask(taskId) {
  return await httpAxios
    .delete(`/api/tasks/${taskId}`)
    .then((response) => response.data);
}
