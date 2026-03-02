import { faBox, faChartLine, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'
type SideBarProps = {
  isOpen: boolean;
}
export default function Sidebar({ isOpen }: SideBarProps) {
  return (
    <>
      {}
      <aside className={`  h-[calc(100vh-56px)] bg-white border-r fixed left-0 top-14 z-40 shadow-sm transition-all duration-300 
         ${isOpen ? 'translate-x-0 w-64' : 'w-0 translate-x-full'} overflow-hidden
        `}
      >

        <nav className='p-4 space-y-2 text-sm font-medium text-gray-600'>
          <NavLink to="/dashboard" className={({ isActive }) => `flex items-center gap-3 px-3 py-2 rounded-md ${isActive ? "bg-blue-50 text-blue-600" : "hover:bg-gray-100"}`}>
            <FontAwesomeIcon icon={faChartLine} />
            Dashboard</NavLink>

          <NavLink to="/products" className={({ isActive }) => `flex items-center gap-3 px-3 py-2 rounded-md ${isActive ? "bg-blue-50 text-blue-600" : "hover:bg-gray-100"}`}>
            <FontAwesomeIcon icon={faBox} />
            Products
          </NavLink>
          <NavLink to="/orders" className={({ isActive }) => `flex items-center gap-3 px-3 py-2 rounded-md ${isActive ? "bg-blue-50 text-blue-600" : "hover:bg-gray-100"}`}>
            <FontAwesomeIcon icon={faShoppingCart} />
            Orders</NavLink>


        </nav>
      </aside>
    </>
  )
}

