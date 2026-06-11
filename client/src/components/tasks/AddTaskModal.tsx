import { useState } from "react";
interface AddTaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreateTask: (task: {
    title: string;
    priority: "High" | "Medium" | "Low";
    dueDate: string;
  }) => void;
}
const AddTaskModal = ({
  isOpen,
  onClose,
  onCreateTask,
}: AddTaskModalProps) => {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState<"High" | "Medium" | "Low">("Medium");
  const [dueDate, setDueDate] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  console.log("Submitting task");

  if (!title.trim()) {
  setError("Please enter a task title");
  return;
}

  onCreateTask({
    title,
    priority,
    dueDate,
  });
  setError("");
  onClose();
};

  if (!isOpen) return null;

  return (
    <div
      className="
        fixed inset-0
        bg-black/40
        flex items-center justify-center
        z-50
      "
    >
      <div
        className="
          bg-white
          rounded-2xl
          p-6
          w-full
          max-w-lg
        "
      >
        <h2 className="text-2xl font-bold mb-6">
          Create New Task
        </h2>

        <form
  onSubmit={handleSubmit}
  className="space-y-4"
>
          <input
  type="text"
  placeholder="Task Title"
  value={title}
  onChange={(e) =>
    setTitle(e.target.value)
  }
  className="w-full border rounded-lg p-3"
/>
{error && (
  <p className="text-red-500 text-sm">
    ⚠ {error}
  </p>
)}
          <select
  value={priority}
  onChange={(e) =>
    setPriority(
      e.target.value as
        | "High"
        | "Medium"
        | "Low"
    )
  }
  className="w-full border rounded-lg p-3"
>
    <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
<input
  type="date"
  value={dueDate}
  onChange={(e) =>
    setDueDate(e.target.value)
  }
  className="w-full border rounded-lg p-3"
/>

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="
                px-4 py-2
                border
                rounded-lg
              "
            >
              Cancel
            </button>

            <button
  type="submit"
  disabled={!title.trim()}
  className="
    px-4 py-2
    bg-indigo-600
    text-white
    rounded-lg
    disabled:opacity-50
    disabled:cursor-not-allowed
  "
>
  Create Task
</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTaskModal;