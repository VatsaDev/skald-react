'use client';
import React from 'react';
import signUp from '../firebase/auth/signup';
import { useRouter } from 'next/navigation';
import Head from 'next/head';
import Layout from '../components/layout';
import addData from '../firebase/firestore/addData.js';

export default function Home() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const router = useRouter();

  function autoID() {
    autoID = 'U';
    for (let i = 0; i < 20; i++) {
      var x = Math.floor(Math.random() * 10);
      autoID = autoID + x;
    }
    return autoID;
  }

  const handleForm = async (event) => {
    event.preventDefault();

    const { result, error } = await signUp(email, password);

    if (error) {
      return console.log(error);
    }

    // else successful
    console.log(result);
    addData('users', { email: email, tokens: 100 }, autoID());
    return router.push('/dashboard');
  };
  return (
    <div>
      <Head>
        <title>Sign up</title>
        <link rel="icon" href="/logo.png" sizes="any" />
      </Head>
      <div className="wrapper w-4/5 mx-auto my-8 p-6 shadow-xl bg-slate-100 rounded-lg">
        <h1 className="text-center text-2xl font-bold m-8">Sign up</h1>
        <div className="form-wrapper w-1/4 mx-auto">
          <form onSubmit={handleForm} className="form">
            <label htmlFor="email">
              <p className="text-xl font-bold m-2">Email</p>
              <input
                onChange={(e) => setEmail(e.target.value)}
                required
                type="email"
                name="email"
                id="email"
                placeholder="example@mail.com"
                className="p-2 rounded-lg"
              />
            </label>
            <label htmlFor="password">
              <p className="text-xl font-bold m-2">Password</p>
              <input
                onChange={(e) => setPassword(e.target.value)}
                required
                type="password"
                name="password"
                id="password"
                placeholder="password"
                className="p-2 rounded-lg"
              />
            </label>
            <br />
            <br />
            <button
              type="submit"
              className="text-black w-1/2 text-center border border-amber-500 hover:bg-amber-500 rounded-lg text-lg p-2 mb-4 font-bold mx-auto"
            >
              Sign up
            </button>
            <p className="text-center">
              Already have an account?{' '}
              <a href="/signin" className="underline text-amber-500">
                Sign in
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
