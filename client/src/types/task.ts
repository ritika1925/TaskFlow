export interface Task {
  id: string;
  title: string;
  description?: string;

  priority: "High" | "Medium" | "Low";

  status:
    | "todo"
    | "in-progress"
    | "completed";

  dueDate: string;

  category:
    | "Study"
    | "Work"
    | "Personal"
    | "Health";
}