"use client"

import { useEffect } from 'react';
import useSWR from 'swr';
import { useAuth } from '../components/authProvider';
import WaitlistForm from './forms';

const fetcher = async url => {
  const res = await fetch(url)
 
  // If the status code is not in the range 200-299,
  // we still try to parse and throw it.
  if (!res.ok) {
    const error = new Error('An error occurred while fetching the data.')
    // Attach extra info to the error object.
    error.info = await res.json()
    error.status = res.status
    throw error
  }
 
  return res.json()
}

const WAITLIST_API_URL = "/api/waitlists/"

export default function Page() {
  // Get requets
  const {data, error, isLoading} = useSWR(WAITLIST_API_URL,fetcher)
  const auth = useAuth()
  useEffect(()=> {
    if(error?.status === 401){
      auth.loginRequiredRedirect()
    }
  },[auth,error])
  if (error) return <div>Failed to load</div>
  if (isLoading) return <div>Loading...</div>
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <WaitlistForm/>
      <div>
        {JSON.stringify(data)}
      </div>
      
    </div>
  );
}
