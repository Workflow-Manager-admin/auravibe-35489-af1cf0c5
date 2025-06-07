/**
 * AuthPage: Sign up/Sign in, with Email/Google support.
 * TODO: Integrate Firebase/Auth0/Supabase logic and animated transitions, error messages.
 */

import React from "react";
export default function AuthPage() {
  return (
    <section className="flex flex-col items-center justify-center py-16">
      <h2 className="text-2xl font-bold mb-5">Welcome to My AuraGram</h2>
      {/* TODO: Email/password and Google Auth form */}
      <div className="bg-[#18181b] rounded-2xl p-8 shadow text-white">
        <div className="mb-3 italic opacity-65">Auth form goes here…</div>
      </div>
    </section>
  );
}
