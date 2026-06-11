const priorities = [
  "Complete React Dashboard",
  "Finish DSA Practice",
  "Prepare Resume",
];
const PrioritySection = () => {
  return (
    <div className="bg-white rounded-xl border p-6 mt-6">
      <h2 className="text-xl font-semibold mb-4">
        Top 3 Priorities
      </h2>
      <div className="space-y-3">
        {priorities.map((task) => (
          <div
            key={task}
            className="flex items-center gap-3 p-3 rounded-lg border"
          >
            <input type="checkbox" />
            <span>{task}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default PrioritySection;