import DashboardLayout from "../../layouts/DashboardLayout";
import StatCard from "../../components/dashboard/StatCard";
import PrioritySection from "../../components/dashboard/PrioritySection";
import TaskOverview from "../../components/dashboard/TaskOverview";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-6">
        Good Morning 👋
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Productivity Score"
          value="85%"
        />

        <StatCard
          title="Tasks Completed"
          value="12"
        />

        <StatCard
          title="Current Streak"
          value="8 Days"
        />

        <StatCard
          title="Due Today"
          value="4"
        />
      </div>
      <PrioritySection />
     <TaskOverview />
    </DashboardLayout>
  );
};

export default Dashboard;
