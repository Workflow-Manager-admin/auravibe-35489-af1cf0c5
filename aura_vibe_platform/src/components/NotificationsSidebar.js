/**
 * NotificationsSidebar: Side area for notifications list, real time.
 * TODO: Connect to live notification feed (Firebase/Supabase/Socket.io)
 */

import React from "react";
export default function NotificationsSidebar() {
  return (
    <aside className="bg-black rounded">
      <h3 className="font-bold mb-3 text-lg">Notifications</h3>
      <div className="flex flex-col space-y-2 opacity-60 italic">
        {/* TODO: List real notifications */}
        <div>Notification list…</div>
      </div>
    </aside>
  );
}
