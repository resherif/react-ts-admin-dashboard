interface StatCardProps {
  title: string;
  value: number|string;
}

const StatCard = ({ title, value }: StatCardProps) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <p className="text-sm text-gray-500">{title}</p>
      <h2 className="text-2xl font-semibold mt-2">{value}</h2>
    </div>
  );
};

export default StatCard;
