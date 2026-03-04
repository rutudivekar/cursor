"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto flex max-w-5xl flex-col gap-10 px-6 py-10">
        {/* Header */}
        <header className="flex items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight">
              Hello Rutuja 👋
            </h1>
            <p className="mt-1 text-sm text-foreground/70">
              This is your simple dashboard overview.
            </p>
          </div>

          <Link
            href="/login"
            className="rounded-full border border-foreground/20 px-4 py-2 text-sm font-medium hover:bg-foreground/5"
          >
            Go to login
          </Link>
        </header>

        {/* Stats row */}
        <section className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-foreground/10 bg-background p-4 shadow-sm">
            <p className="text-xs font-medium text-foreground/60 uppercase">
              Counter
            </p>
            <p className="mt-2 text-3xl font-semibold">{count}</p>
            <p className="mt-1 text-xs text-foreground/60">
              Use the buttons below to change this value.
            </p>
          </div>

          <div className="rounded-2xl border border-foreground/10 bg-background p-4 shadow-sm">
            <p className="text-xs font-medium text-foreground/60 uppercase">
              Tasks
            </p>
            <p className="mt-2 text-3xl font-semibold">3</p>
            <p className="mt-1 text-xs text-foreground/60">
              Example metric for your dashboard.
            </p>
          </div>

          <div className="rounded-2xl border border-foreground/10 bg-background p-4 shadow-sm">
            <p className="text-xs font-medium text-foreground/60 uppercase">
              Messages
            </p>
            <p className="mt-2 text-3xl font-semibold">12</p>
            <p className="mt-1 text-xs text-foreground/60">
              Another placeholder metric you can replace later.
            </p>
          </div>
        </section>

        {/* Counter card */}
        <section className="rounded-2xl border border-foreground/10 bg-background p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Interactive counter</h2>
          <p className="mt-1 text-sm text-foreground/70">
            A simple interactive widget inside your dashboard.
          </p>

          <div className="mt-4 flex items-center gap-6">
            <span className="text-2xl font-semibold">{count}</span>
            <div className="flex gap-3">
              <button
                onClick={() => setCount((c) => c + 1)}
                className="rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600"
              >
                Increase
              </button>
              <button
                onClick={() => setCount((c) => c - 1)}
                className="rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-600"
              >
                Decrease
              </button>
              <button
                onClick={() => setCount(0)}
                className="rounded-lg border border-foreground/20 px-4 py-2 text-sm font-medium hover:bg-foreground/5"
              >
                Reset
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}