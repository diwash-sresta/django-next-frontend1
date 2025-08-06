"use client";
import WaitlistTable from './table';

export default function Page() {
  return (
    <main className="font-sans grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1 className="text-2xl font-bold text-center">Waitlist</h1>
      <WaitlistTable />
    </main>
  );
}
