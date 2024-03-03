"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      router.push("/classes");
    } else {
      // Handle errors
    }
  }

  return (
    <>
      <div className="min-h-screen bg-black text-white flex flex-col items-center p-8">
        <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
          <h1 className="text-6xl font-bold">Login</h1>
          <input
            className="text-black p-2"
            type="email"
            name="email"
            placeholder="Username"
          />
          <input
            className="text-black p-2"
            type="password"
            name="password"
            placeholder="Password"
          />
          <button type="submit" className="bg-blue-600 p-3">
            Login
          </button>
        </form>
      </div>
    </>
  );
}
