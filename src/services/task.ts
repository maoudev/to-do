import type { APITaskResponse, Task } from "../types/api";
import { config } from "dotenv";
config();

export const GetTaskById = async (id: string, jwtToken: string) => {
  const res = await fetch(`http://localhost:3000/api/v1/task/${id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
  });

  const task = (await res.json()) as APITaskResponse;

  return task;
};

export const GetTasks = async (jwtToken: string) => {
  const res = await fetch("http://localhost:3000/api/v1/task", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
  });

  const tasks = (await res.json()) as APITaskResponse[];

  return tasks;
};

export const AddTask = async (task: Task, jwtToken: string) => {
  const apiUrl = process.env.API_URL;

  const response = await fetch(
    `${apiUrl}/task?sdate=${task.startDate}&edate=${task.endDate}`,
    {
      method: "POST",
      body: JSON.stringify({
        name: task.name,
        description: task.description,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwtToken}`,
      },
    }
  );

  return response;
};
