/**
 * SideNav: Main navigation for app views.
 * Responsive, animated, changes active tab based on URL.
 * 
 * TODO: Connect routing, mobile nav, highlight active link, admin conditional visibility.
 */

import React from "react";
import { NavLink } from "react-router-dom";

export default function SideNav() {
  // TODO: Show/hide admin/nav links based on auth user role.
  return (
    <nav className="hidden md:flex flex-col w-48 pr-2 border-r border-auraAccent pt-6 bg-black h-[calc(100vh-60px)] sticky top-[60px]">
      <ul className="space-y-1">
        <li>
          <NavLink to="/" className={({ isActive }) =>
            "block px-4 py-3 rounded font-semibold " +
            (isActive ? "bg-[#18181b] text-auraBlue" : "hover:bg-[#22222b] hover:text-auraBlue text-white")
          }>🏠 Home</NavLink>
        </li>
        <li>
          <NavLink to="/explore" className={({ isActive }) =>
            "block px-4 py-3 rounded font-semibold " +
            (isActive ? "bg-[#18181b] text-auraBlue" : "hover:bg-[#22222b] hover:text-auraBlue text-white")
          }>🧭 Explore</NavLink>
        </li>
        <li>
          <NavLink to="/messages" className={({ isActive }) =>
            "block px-4 py-3 rounded font-semibold " +
            (isActive ? "bg-[#18181b] text-auraBlue" : "hover:bg-[#22222b] hover:text-auraBlue text-white")
          }>💬 Messages</NavLink>
        </li>
        <li>
          <NavLink to="/profile/me" className={({ isActive }) =>
            "block px-4 py-3 rounded font-semibold " +
            (isActive ? "bg-[#18181b] text-auraBlue" : "hover:bg-[#22222b] hover:text-auraBlue text-white")
          }>👤 Profile</NavLink>
        </li>
        <li>
          <NavLink to="/admin" className={({ isActive }) =>
            "ml-2 px-4 py-3 rounded font-semibold text-red-400 " +
            (isActive ? "bg-[#18181b]" : "hover:bg-[#22222b] hover:text-red-500")
          }>🛡️ Admin</NavLink>
        </li>
      </ul>
    </nav>
  );
}
