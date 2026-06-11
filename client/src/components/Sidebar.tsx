import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-64 border-r bg-white p-6">
      <h1 className="text-2xl font-bold text-indigo-600 mb-8">
        TaskFlow
      </h1>

      <nav className="flex flex-col gap-4">
        <Link to="/">Dashboard</Link>
        <Link to="/tasks">Tasks</Link>
        <Link to="/kanban">Kanban</Link>
        <Link to="/calendar">Calendar</Link>
        <Link to="/focus">Focus</Link>
        <Link to="/analytics">Analytics</Link>
        <Link to="/settings">Settings</Link>
      </nav>
    </aside>
  );
};

export default Sidebar;