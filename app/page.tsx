'use client';

import Image from "next/image";
import { useState, useEffect } from "react";
import {  SiLinux } from "react-icons/si";
import { FaWindows, FaLinux } from "react-icons/fa";
export default function Home() {
  const [showCard, setShowCard] = useState(false);
  return (
    <div className="min-h-screen flex flex-col bg-[#2668da] text-white">

      {/* Header */}
      <header className="bg-[#02245e] shadow-lg">
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">

          <h1 className="text-4xl font-bold tracking-wide">
            Wansah
          </h1>

          <div className="flex gap-4">
            <button className="bg-white text-[#02245e] px-5 py-2 rounded-xl font-semibold hover:scale-105 transition">
              Log In
            </button>

            <button className="bg-[#5f9cff] px-5 py-2 rounded-xl font-semibold hover:bg-[#80b3ff] transition">
              Sign Up
            </button>
          </div>

        </nav>
      </header>

      {/* Main */}
      <main className="flex-1 max-w-7xl mx-auto px-6 py-12">

        {/* Hero Section */}
        <section className="grid md:grid-cols-2 gap-10 items-center">

          <div>
            <h2 className="text-5xl font-bold leading-tight mb-6">
              Secure Messaging
              <br />
              For Everyone 🔒
            </h2>

            <p className="text-lg text-blue-100 mb-8">
              Wansah is a modern chat platform focused on privacy,
              encryption, and simplicity.
            </p>

            <button
              onClick={() => setShowCard(true)}
              className="bg-white text-[#02245e] px-7 py-3 rounded-2xl text-lg font-bold hover:scale-105 transition"
            >
              Get Started
            </button>
          </div>

          <div className="flex justify-center">
            <Image
              src="/login-view.png"
              alt="login-view"
              width={500}
              height={500}
              className="rounded-3xl shadow-2xl"
            />
          </div>
          {showCard && (
            <div className="fixed inset-0 bg-black/60 flex items-center justify-center">

              <div className="bg-white text-black p-8 rounded-3xl shadow-2xl w-[300px] text-center">

                <h2 className="text-2xl font-bold mb-4">
                  Download Wansah
                </h2>

                <div className="flex flex-col gap-3">

                  <a
                    href="/wansah-linux-x86.zip"
                    download
                    className="bg-black text-white py-3 rounded-xl flex items-center justify-center gap-3 font-semibold hover:scale-105 transition"
                  >
                    <SiLinux size={22} />
                    Linux
                  </a>

                  <a
                    href="/wansah-win32-x86.zip"
                    download
                    className="bg-blue-600 text-white py-3 rounded-xl flex items-center justify-center gap-3 font-semibold hover:scale-105 transition"
                  >
                    <FaWindows size={22} />
                    Windows
                  </a>

                </div>

                <button
                  onClick={() => setShowCard(false)}
                  className="mt-5 text-sm text-gray-500"
                >
                  Close
                </button>

              </div>

            </div>
          )}
        </section>

        {/* Goals */}
        <section className="mt-24">

          <h2 className="text-4xl font-bold text-center mb-14">
            Goals 🚀
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {/* Card 1 */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 shadow-xl hover:scale-105 transition">

              <div className="relative w-full h-64 mb-5 overflow-hidden rounded-2xl">
                <Image
                  src="/app-view.png"
                  alt="app-view"
                  fill
                  className="object-contain"
                />
              </div>

              <h3 className="text-2xl font-bold mb-3">
                Private Chats
              </h3>

              <p className="text-blue-100">
                Secure conversations with modern privacy features.
              </p>

            </div>

            {/* Card 2 */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 shadow-xl hover:scale-105 transition">

              <div className="relative w-full h-64 mb-5">
                <Image
                  src="/e2ee-view.jpg"
                  alt="app-view"
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>

              <h3 className="text-2xl font-bold mb-3">
                Encrypted Messages
              </h3>

              <p className="text-blue-100">
                End-to-end encryption keeps messages protected.
              </p>

            </div>

            {/* Card 3 */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 shadow-xl hover:scale-105 transition">

              <div className="relative w-full h-64 mb-5 overflow-hidden rounded-2xl">
                <Image
                  src="/setting-view.png"
                  alt="app-view"
                  fill
                  className="object-contain"
                />
              </div>

              <h3 className="text-2xl font-bold mb-3">
                Easy For All
              </h3>

              <p className="text-blue-100">
                Clean and simple design anyone can use easily.
              </p>

            </div>

          </div>

        </section>

      </main>

      {/* Footer */}
      <footer className="bg-[#02245e] py-6 text-center text-blue-100 mt-16">
        © 2026 Wansah — Secure Communication Platform
      </footer>

    </div>
  );
}