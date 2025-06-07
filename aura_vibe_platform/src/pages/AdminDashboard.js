/**
 * AdminDashboard: Admin/moderation tools.
 * TODO: Show admin tools (user/block/report moderation), visible only for admins.
 * Show list of flagged content, ability to block/suspend users, view reports.
 */

import React from "react";
export default function AdminDashboard() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4 text-red-400">Admin Dashboard</h2>
      {/* TODO: Admin widgets and panels. */}
      <div className="bg-[#19181a] rounded-2xl p-8 text-white opacity-60 italic">
        Admin panel – moderation tools & community safety controls…
      </div>
    </section>
  );
}
