'use client';
import React from 'react';
import { useAuthContext } from '../../context/AuthContext';
import { useRouter } from 'next/navigation';
import signOutUser from '../../firebase/auth/signout';

function Page() {
  const { user } = useAuthContext();
  const router = useRouter();

  React.useEffect(() => {
    if (user == null) router.push('/');
  }, [user]);

  return (
    <div>
      <h1 className="text-8xl m-8 text-center font-bold">Your Stories</h1>
      <button
        type="submit"
        className="text-black w-1/2 text-center border border-amber-500 hover:bg-amber-500 rounded-lg text-lg p-2 mb-4 font-bold mx-auto"
        onClick={signOutUser}
      >
        Sign Out
      </button>
    </div>
  );
}

export default Page;
