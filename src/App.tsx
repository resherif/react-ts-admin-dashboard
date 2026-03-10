import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Sidebar from './Components/sidebar'
import Dashboard from './Components/Dashboard/Dashboard'
import { useState } from 'react'
import ProductsPage from './Components/Products/ProductPage'
import OrdersPage from './Components/orders/ordersPage'

function App() {

  const [BarMenuIsOpen, setBarMenuIsOpen] = useState(true);
  return (
    <>
      <Navbar toggleSideBar={() => setBarMenuIsOpen(!BarMenuIsOpen)} />
      <Sidebar isOpen={BarMenuIsOpen} />
      <main className={`transition-all duration-300 p-6 bg-gray-50 min-h-screen ${BarMenuIsOpen ? "ml-64" : "ml-0"}`}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="*" element={<h1 className="text-red-500">404: Page Not Found</h1>} />
        </Routes>
      </main>
    </>
  )
}

export default App
