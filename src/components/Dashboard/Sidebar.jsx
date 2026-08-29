import { useState } from 'react'
import { FaArrowTrendUp, FaArrowTrendDown, } from "react-icons/fa6";
import { SiGoogleanalytics } from "react-icons/si";
import { FiSettings } from "react-icons/fi";
import { LuLayoutDashboard } from "react-icons/lu";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { IoAdd } from "react-icons/io5";
import { Link } from 'react-router-dom';
const Sidebar = ({ open, openside, closeside }) => {
  return (
    <aside
      className={`h-auto shrink-0 overflow-hidden transition-all duration-300 ease-in-out border
        ${open ? "w-[18%]" : "w-0"}
      `}>
      <div className="h-full min-w-55">
        <div className="flex justify-end">
          <button
            type="button"
            className="cursor-pointer p-2 m-2 text-xl"
            onClick={closeside}
            aria-label="Close sidebar"  >
            <ImCross />
          </button>
        </div>

        <h2 className="text-center text-2xl font-bold my-2">
          Expense Manager
        </h2>
        <div className="text-center opacity-15">
          __________________________________
        </div>

        <ul className="flex flex-col text-center py-4 gap-7">
          <li> <Link to={"/"} className="flex items-center justify-center gap-x-2.5 cursor-pointer hover:text-blue-400 hover:scale-110 transition-transform">
            <LuLayoutDashboard />
            Dashboard
          </Link>
          </li>
          <li className="flex items-center justify-center gap-4 cursor-pointer hover:text-blue-400 hover:scale-110 transition-transform">
            <FaArrowTrendUp />
            Income
          </li>

          <li className="flex items-center justify-center gap-4 cursor-pointer hover:text-blue-400 hover:scale-110 transition-transform">
            <FaArrowTrendDown />
            Expenses
          </li>

          <li className="flex items-center justify-center gap-4 cursor-pointer hover:text-blue-400 hover:scale-110 transition-transform">
            <SiGoogleanalytics />
            Analytics
          </li>
          <li >
            <Link to={'/Addtrans'} className="flex items-center justify-center gap-2 cursor-pointer hover:text-blue-400 hover:scale-110 transition-transform">
              <IoAdd className='text-xl' />
              Transactions
            </Link>
          </li>

          <li >
            <Link to={'/Settings'} className="flex items-center justify-center gap-4 cursor-pointer hover:text-blue-400 hover:scale-110 transition-transform"> 
            <FiSettings />
            Settings
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;