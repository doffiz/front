'use client';

import { useState } from 'react';
import Image from "next/image";
import Sidebar from './components/sidebar';
import LoginForm from './components/login';

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <main className="flex min-h-screen">
      <section className="flex flex-col bg-slate-50 text-black w-full">
        <h1>Dashboard</h1>
      </section>
    </main>
  );
}