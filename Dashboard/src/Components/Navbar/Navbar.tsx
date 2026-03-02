import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBell,
  faMagnifyingGlass,
  faMessage,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import logo from "./logo.png";
import { useState } from "react";
type NavbarProps = {
  toggleSideBar: () => void;
 }
const Navbar = ({toggleSideBar}:NavbarProps) => {
  
  return (
    // <header className="w-full h-14 fixed bg-white border-b flex items-center justify-between px-6 ">
    //   <div className="flex gap-3 items-center">
    //     <button onClick={toggleSideBar }
    //     className="text-gray-600 hover:text-black">
    //       <FontAwesomeIcon icon={faBars}/>
    //     </button>
    //   </div>
    //   <div className="flex items-center gap-2 font-semibold text-lg">
    //     <img src={logo} alt="Logo" className="w-6 h-6" />
    //     <span className="text-gray-800">NiceAdmin </span>
    //   </div>
    //   <div className="hidden md:flex items-center bg-gray-100 px-3 py-1 rounded-md">
    //     <input type="search" placeholder="Search..." name="" id="" className="bg-transparent outline-none text-sm w-48" />
    //     <FontAwesomeIcon icon={ faMagnifyingGlass} className="text-gray-500 text-sm"/>
    //   </div>
    //   <div className="flex items-center gap-5 text-gray-600">
    //      <button className="hover:text-black relative">
    //        <FontAwesomeIcon icon={faBell} />
    //        <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
    //      </button>

    //      <button className="hover:text-black">
    //        <FontAwesomeIcon icon={faMessage} />
    //      </button>

    //      <button className="hover:text-black">
    //        <FontAwesomeIcon icon={faUser} />
    //      </button>
    //    </div>
    // </header>
    <header className="w-full h-14 fixed bg-white border-b flex items-center px-6 justify-between">
      <div className="flex items-center gap-3">  
 <button className="text-gray-600 hover:text-black">
          <FontAwesomeIcon icon={faBars} onClick={toggleSideBar}/>
        </button>

        <div className="flex items-center gap-2 font-semibold text-lg">
          <img src={logo} alt="logo" className="w-6 h-6" />
          <span className="text-gray-800">NiceAdmin</span>
        </div>
      </div>
      <div className="hidden md:flex items-center bg-gray-100 px-3 py-1 rounded-md">
        <input
          type="search"
          placeholder="Search..."
          className="bg-transparent outline-none text-sm w-48"
        />
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="text-gray-500 text-sm"
        />
      </div>
      <div className="flex items-center gap-5 text-gray-600">
        <button className="hover:text-black relative">
          <FontAwesomeIcon icon={faBell} />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        <button className="hover:text-black">
          <FontAwesomeIcon icon={faMessage} />
        </button>

        <button className="hover:text-black">
          <FontAwesomeIcon icon={faUser} />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
