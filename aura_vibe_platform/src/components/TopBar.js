/**
 * TopBar: Main header for My AuraGram – branding, search, theme toggle, upload, quick links.
 * Responsive, animated.
 * 
 * TODO: Connect search logic, user avatar, upload dialog, and notification badges.
 */

import React from "react";

export default function TopBar({ theme, setTheme }) {
  return (
    <header className="w-full px-6 py-5 border-b border-auraAccent bg-black flex items-center justify-between sticky top-0 z-30">
      <div className="flex items-center space-x-2 text-2xl font-bold tracking-wide">
        <span className="text-auraBlue">🜚</span>
        <span>My AuraGram</span>
      </div>
      <div className="flex items-center gap-3">
        <input
          className="outline-none px-4 py-2 rounded bg-[#18181b] border border-auraAccent text-white focus:ring-2 focus:ring-auraBlue transition-all"
          placeholder="Search…"
          aria-label="Search"
          // TODO: Implement search logic
        />
        <button
          className="ml-1 px-4 py-2 text-sm font-semibold rounded bg-auraBlue text-white hover:bg-blue-400 transition"
          // TODO: Open upload modal
        >
          ⬆️ Upload
        </button>
        <button
          className="ml-2 px-2 py-1 rounded text-xl bg-transparent hover:text-auraBlue"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          title="Toggle Dark/Light"
        >
          {theme === "dark" ? "🌙" : "🌞"}
        </button>
      </div>
    </header>
  );
}
