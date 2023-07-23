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
    </div>
  );
}

export default Page;
