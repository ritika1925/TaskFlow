import type { Task } from "../types/task";

export const mockTasks: Task[] = [
  {
    id: "1",
    title: "Repair Dashboard UI",
    priority: "High",
    status: "todo",
    dueDate: "Today",
    category: "Study",
  },
  {
    id: "2",
    title: "Practice DSA",
    priority: "Medium",
    status: "in-progress",
    dueDate: "Tomorrow",
    category: "Study",
  },
  {
    id: "3",
    title: "Update Resume",
    priority: "High",
    status: "completed",
    dueDate: "Today",
    category: "Work",
  },
];