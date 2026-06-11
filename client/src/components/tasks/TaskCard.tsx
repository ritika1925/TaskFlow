interface TaskCardProps {
  title: string;
  priority: "High" | "Medium" | "Low";
  dueDate: string;
}

const TaskCard = ({
  title,
  priority,
  dueDate,
}: TaskCardProps) => {
  return (
    <div className="bg-white border rounded-xl p-4 shadow-sm">
      <div className="flex justify-between items-start">
        <h3 className="font-semibold">
          {title}
        </h3>

        <span
          className={`text-xs px-2 py-1 rounded-full ${
            priority === "High"
              ? "bg-red-100 text-red-600"
              : priority === "Medium"
              ? "bg-yellow-100 text-yellow-600"
              : "bg-green-100 text-green-600"
          }`}
        >
          {priority}
        </span>
      </div>

      <p className="text-sm text-slate-500 mt-2">
        Due: {dueDate}
      </p>
    </div>
  );
};

export default TaskCard;