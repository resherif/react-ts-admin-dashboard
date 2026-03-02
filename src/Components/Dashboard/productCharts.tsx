import { productsStatusData } from "./ProductStatusData"
import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
const Colors = ["#22c55e", "#ef4444", "#f59e0b"];
export const ProductCharts = () => {
  return (
      <>
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
              <h2 className="text-lg font-semibold text-gray-800 mb-4"> Products Status</h2>
              <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%" >
                      <PieChart>
                          <Pie data={productsStatusData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80}>
                              {productsStatusData.map((_, index) => (<Cell key={index} fill={Colors[index % Colors.length]} />
                              ))}
                              
                          </Pie>
                          <Tooltip />
                          
                      </PieChart>
                  </ResponsiveContainer>
              </div>
          </div>
      </>
  )
}
export default ProductCharts