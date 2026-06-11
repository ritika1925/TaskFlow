interface StatCardProps {
  title: string;
  value: string;
}

const StatCard = ({ title, value }: StatCardProps) => {
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm border min-w-0">
      <p className="text-slate-500 text-sm break-words">
        {title}
      </p>

      <h2 className="text-2xl font-bold mt-2 break-words">
        {value}
      </h2>
    </div>
  );
};
export default StatCard;