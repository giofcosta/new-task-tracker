import { defineStore } from "pinia";

interface Task {
  id: number;
  title: string;
  description: string;
  status: "pending" | "in-progress" | "completed";
  createdAt: string;
}

export const useTaskStore = defineStore("task", {
  state: (): { tasks: Task[] } => ({
    tasks: [],
  }),
  actions: {
    addTask(task: Task) {
      this.tasks.push(task);
    },
  },
});
