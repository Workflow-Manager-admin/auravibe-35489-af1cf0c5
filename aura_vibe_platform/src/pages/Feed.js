/**
 * Feed: Main feed of posts from followed users, animated.
 * TODO: Connect to backend feed, like/follow/comment/save actions, infinite scroll, animated transitions.
 */

import React from "react";

export default function Feed() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Main Feed</h2>
      {/* TODO: Actual posts mapped from backend */}
      <div className="bg-[#18181b] rounded-xl p-8 mb-3 text-white shadow">
        <div>Feed Post Card Example</div>
      </div>
      <div className="bg-[#19181a] rounded-xl p-5 opacity-50 italic mb-5">
        More post cards…
      </div>
      <div className="flex gap-2 flex-wrap mx-1 my-7 text-auraBlue text-base">
        <span className="bg-[#19181a] px-4 py-2 rounded-2xl border border-auraBlue">🔑 Auth</span>
        <span className="bg-[#19181a] px-4 py-2 rounded-2xl border border-auraBlue">👤 Profile</span>
        <span className="bg-[#19181a] px-4 py-2 rounded-2xl border border-auraBlue">📤 Upload</span>
        <span className="bg-[#19181a] px-4 py-2 rounded-2xl border border-auraBlue">❤️ Like/Save</span>
        <span className="bg-[#19181a] px-4 py-2 rounded-2xl border border-auraBlue">🔔 Notifs</span>
        <span className="bg-[#19181a] px-4 py-2 rounded-2xl border border-auraBlue">🌈 Stories</span>
        <span className="bg-[#19181a] px-4 py-2 rounded-2xl border border-auraBlue">💬 DM</span>
        <span className="bg-[#19181a] px-4 py-2 rounded-2xl border border-auraBlue">🛡️ Admin</span>
      </div>
    </section>
  );
}
