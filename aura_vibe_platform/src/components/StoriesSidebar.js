/**
 * StoriesSidebar: Displays story circle previews.
 * TODO: Implement real story circles, fetching user stories and animation for adding/viewing stories.
 */

import React from "react";
export default function StoriesSidebar() {
  return (
    <aside className="bg-black rounded mb-6">
      <h3 className="font-bold mb-3 text-lg">Stories</h3>
      <div className="flex flex-col space-y-2 opacity-60 italic">
        {/* TODO: Map stories from backend */}
        <div>Story circles…</div>
      </div>
    </aside>
  );
}
