import { Routes, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Tasks from "../pages/Tasks";
import Calendar from "../pages/Calendar";
import Kanban from "../pages/Kanban";
import Focus from "../pages/Focus";
import Analytics from "../pages/Analytics";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Settings from "../pages/Settings";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/tasks" element={<Tasks />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/kanban" element={<Kanban />} />
      <Route path="/focus" element={<Focus />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
};

export default AppRoutes;