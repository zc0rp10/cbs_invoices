import React from "react";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-gray-800 flex mb-8">
      <ul className="flex items-center justify-between h-16 w-full max-w-screen-xl mx-auto">
        <li className="mr-6 ml-6 xl:ml-0">
          <Link
            to="/"
            className="navLink px-3 py-2 rounded-md text-sm font-medium leading-5 text-white bg-gray-900 transition duration-150 ease-in-out"
          >
            CB's Invoices
          </Link>
        </li>
        <li className="mr-6">
          <NavLink
            to="/dashboard"
            className="navLink ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none transition duration-150 ease-in-out"
          >
            Dashboard
          </NavLink>
        </li>
        <li className="mr-6">
          <NavLink
            to="/invoices"
            className="navLink ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none transition duration-150 ease-in-out"
          >
            Invoices
          </NavLink>
        </li>
        <li className="mr-6">
          <NavLink
            to="/clients"
            className="navLink ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none transition duration-150 ease-in-out"
          >
            Clients
          </NavLink>
        </li>
        <li className="mr-6">
          <NavLink
            to="/reports"
            className="navLink ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none transition duration-150 ease-in-out"
          >
            Reports
          </NavLink>
        </li>
        <li className="mr-6 xl:mr-0 ml-auto">
          <NavLink
            to="/signin"
            className="navLink ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none transition duration-150 ease-in-out"
          >
            Sign In
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
