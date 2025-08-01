"use client"
import Image from "next/image";
import { useState } from "react";
import useSWR from 'swr';
import { useAuth } from "./components/authProvider";
import { ThemeToggleButton } from "./components/themeToggleButton";
import WaitlistForm from "./waitlists/forms";

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function Home() {
  const auth = useAuth()
  const {data, error, isLoading} = useSWR("http://127.0.0.1:8001/api/hello",fetcher)
  if (error) return <div>Failed to load</div>
  if (isLoading) return <div>Loading...</div>
 
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <div>
        <WaitlistForm />
      </div>
      <div>
        {auth.isAuthenticated? "Hello user":"Hello guest"}
      </div>
      <div>
        <ThemeToggleButton />
      </div>
      <div>
        {JSON.stringify(data)}
      </div>
      
      
    </div>
  );
}
