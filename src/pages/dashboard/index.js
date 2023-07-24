'use client';
import React from 'react';
import { useAuthContext } from '../../context/AuthContext';
import { useRouter } from 'next/navigation';
import Layout from '../../components/layout';

export default function Home() {
  const { user } = useAuthContext();
  const router = useRouter();

  React.useEffect(() => {
    if (user == null) router.push('/');
  }, [user]);

  return (
    <div>
      <h1 className="text-2xl m-8 text-center font-light">Make a new story</h1>
      <a
        href="/dashboard/create"
        className="border border-8 border-amber-500 p-8 m-8 font-bold text-8xl text-center"
      >
        +
      </a>
      <div id="storyBar" className="">
        {stories}
      </div>
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
