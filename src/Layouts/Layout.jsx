// Layouts/Layout.jsx
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from "../components/Dashboard/Sidebar";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Layout() {
  const [open, setOpen] = useState(false);

  const openside = () => setOpen(true);
  const closeside = () => setOpen(false);

  return (
    <div className="flex w-full min-h-screen bg-gray-100">
      {/* 1. Sidebar configured with props */}
      <Sidebar open={open} openside={openside} closeside={closeside} />

      <main className="flex-1 min-w-0 transition-all duration-300">
        {/* 2. Hamburger button placed globally */}
        {!open && (
          <div className="flex justify-start p-2 m-1 text-2xl">
            <button
              type="button"
              className="cursor-pointer"
              onClick={openside}
              aria-label="Open sidebar"
            >
              <GiHamburgerMenu />
            </button>
          </div>
        )}

        {/* 3. Pass toggle methods down to child routes if needed */}
        <Outlet context={{ open, openside, closeside }} />
      </main>
    </div>
  );
}