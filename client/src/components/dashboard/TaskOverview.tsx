import TaskCard from "../tasks/TaskCard";
import { mockTasks } from "../../utils/mocktask";

const TaskOverview = () => {
  return (
    <div className="bg-white border rounded-xl p-6 mt-6">
      <h2 className="text-xl font-semibold mb-4">
        Today's Tasks
      </h2>

      <div className="grid gap-4">
         {mockTasks.map((task) => (
           <TaskCard
                 key={task.id}
                 title={task.title}
                 priority={task.priority}
                 dueDate={task.dueDate} 
                 task={task}    />
  ))}
</div>
</div>
  );
};

export default TaskOverview;