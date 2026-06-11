import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-64 border-r bg-white p-6">
      <h1 className="text-2xl font-bold text-indigo-600 mb-8">
        TaskFlow
      </h1>

      <nav className="flex flex-col gap-4">
        <NavLink
  to="/dashboard"
  className={({ isActive }) =>
    `
      flex items-center gap-3
      px-4 py-3 rounded-xl
      transition
      ${
        isActive
          ? "bg-indigo-600 text-white"
          : "hover:bg-slate-100"
      }
    `
  }
>
  Dashboard
</NavLink>
        <NavLink
  to="/tasks"
  className={({ isActive }) =>
    `
      flex items-center gap-3
      px-4 py-3 rounded-xl
      transition
      ${
        isActive
          ? "bg-indigo-600 text-white"
          : "hover:bg-slate-100"
      }
    `
  }
>
  Tasks
</NavLink>
        <NavLink
  to="/kanban"
  className={({ isActive }) =>
    `
      flex items-center gap-3
      px-4 py-3 rounded-xl
      transition
      ${
        isActive
          ? "bg-indigo-600 text-white"
          : "hover:bg-slate-100"
      }
    `
  }
>
  Kanban
</NavLink>
        <NavLink
  to="/calendar"
  className={({ isActive }) =>
    `
      flex items-center gap-3
      px-4 py-3 rounded-xl
      transition
      ${
        isActive
          ? "bg-indigo-600 text-white"
          : "hover:bg-slate-100"
      }
    `
  }
>
  Calendar
</NavLink>
        <NavLink
  to="/focus"
  className={({ isActive }) =>
    `
      flex items-center gap-3
      px-4 py-3 rounded-xl
      transition
      ${
        isActive
          ? "bg-indigo-600 text-white"
          : "hover:bg-slate-100"
      }
    `
  }
>
  Focus
</NavLink>
        <NavLink
  to="/analytics"
  className={({ isActive }) =>
    `
      flex items-center gap-3
      px-4 py-3 rounded-xl
      transition
      ${
        isActive
          ? "bg-indigo-600 text-white"
          : "hover:bg-slate-100"
      }
    `
  }
>
  Analytics
</NavLink>
        <NavLink
  to="/settings"
  className={({ isActive }) =>
    `
      flex items-center gap-3
      px-4 py-3 rounded-xl
      transition
      ${
        isActive
          ? "bg-indigo-600 text-white"
          : "hover:bg-slate-100"
      }
    `
  }
>
  Settings
</NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;