import StatCards from "./StatCards";
import ChartPlaceholder from "./ChartPlaceholder";
import RevenueChart from "./RevenueCharts";
import ProductCharts from "./productCharts";

const Dashboard = () => {
  return (
      <div className="mt-15 overflow-hidden">
          <h1 className="text-2xl font-semibold text-gray-800">
              Dashboard
          </h1>
           
      <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCards title="Total Products" value={120} />
        <StatCards title="Total Orders" value={340} />
              <StatCards title="Pending Orders" value={18} />
              <StatCards title="Revenue" value="$12453"/>
              <StatCards title="Customers" value={89}/>
      </div>
          <RevenueChart />
          <ProductCharts/>
    </div>
  );
};

export default Dashboard;
