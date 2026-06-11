import DashboardLayout from "../../layouts/DashboardLayout";
import { mockTasks } from "../../utils/mocktask";
import  TaskCard  from "../../components/tasks/TaskCard";
import { useState } from "react";
import AddTaskModal from "../../components/tasks/AddTaskModal";

const Tasks = () => {
const [search, setSearch] = useState("");
const [priorityFilter, setPriorityFilter] =
  useState("All");
const [isModalOpen, setIsModalOpen] =
  useState(false);
const [tasks, setTasks] = useState(mockTasks);
const handleCreateTask = (
  newTask: {
    title: string;
    priority: "High" | "Medium" | "Low";
    dueDate: string;
  }
) => {
  setTasks((prev) => [
    {
      id: crypto.randomUUID(),
      title: newTask.title,
      priority: newTask.priority,
      dueDate: newTask.dueDate,
      status: "todo",
      category: "Personal",
    },
    ...prev,
  ]);
};

const filteredTasks = tasks.filter((task) => {
  const matchesSearch = task.title
    .toLowerCase()
    .includes(search.toLowerCase());

  const matchesPriority =
    priorityFilter === "All" ||
    task.priority === priorityFilter;

  return matchesSearch && matchesPriority;

});

  return (
    <DashboardLayout>
      <div className="flex justify-between items-center mb-6">
  <h1 className="text-3xl font-bold">
    Tasks
  </h1>

  <button
    onClick={() =>
      setIsModalOpen(true)
    }
    className="
      bg-indigo-600
      text-white
      px-4 py-2
      rounded-lg
    "
  >
    + Add Task
  </button>
</div>
      <input
         type="text"
         placeholder="Search tasks..."
         value={search}
         onChange={(e) => setSearch(e.target.value)}
         className="
           w-full
           border
           rounded-xl
           p-3
           mb-4
           bg-white "
/>
      <div className="flex gap-2 mb-6">
        {["All", "High", "Medium", "Low"].map(
         (priority) => (
         <button
             key={priority}
             onClick={() =>
             setPriorityFilter(priority)
        }
        className={`
          px-4 py-2 rounded-lg border
          ${
            priorityFilter === priority
              ? "bg-indigo-600 text-white"
              : "bg-white"
          }
        `}
      >
        {priority}
      </button>
    )
  )}
</div>
{filteredTasks.length === 0 ? (
  <div className="bg-white border rounded-xl p-8 text-center">
    <h3 className="font-semibold text-lg">
      No tasks found
    </h3>

    <p className="text-slate-500 mt-2">
      Try changing your search or filters.
    </p>
  </div>
) : (
  <div className="grid gap-4">
    {filteredTasks.map((task) => (
      <TaskCard
        key={task.id}
        title={task.title}
        priority={task.priority}
        dueDate={task.dueDate}
      />
      
    ))}
  </div>

)}
   <AddTaskModal
  isOpen={isModalOpen}
  onClose={() => setIsModalOpen(false)}
  onCreateTask={handleCreateTask}
/>
 </DashboardLayout>
  );
};

export default Tasks;