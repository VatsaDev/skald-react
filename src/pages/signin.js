'use client';
import React from 'react';
import signIn from '../firebase/auth/signin';
import { useRouter } from 'next/navigation';
import Head from 'next/head';

export default function Home() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const router = useRouter();

  const handleForm = async (event) => {
    event.preventDefault();

    const { result, error } = await signIn(email, password);

    if (error) {
      return console.log(error);
    }

    // else successful
    console.log(result);
    return router.push('/dashboard');
  };

  return (
    <div>
      <Head>
        <title>Sign in</title>
        <link rel="icon" href="/logo.png" sizes="any" />
      </Head>

      <section>
        <div className="w-4/5 mx-auto my-8 p-6 shadow-xl bg-slate-100 rounded-lg">
          <h1 className="text-center text-2xl font-bold m-8">Sign in</h1>
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
                className="text-black w-1/2 text-center border border-amber-500 hover:bg-amber-500 rounded-lg text-lg p-2 font-bold mx-auto"
              >
                Sign in
              </button>
            </form>
          </div>
          <div class="container mx-auto flex flex-wrap items-center justify-between">
            <button
              type="button"
              class="text-black w-1/4 border border-amber-500 hover:bg-amber-500 font-medium rounded-lg text-lg px-5 py-2.5 text-center inline-flex items-center justify-between my-8 mx-auto"
            >
              {' '}
              <svg
                class="mr-2 -ml-1 w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
                width="705.6"
                height="720"
                viewBox="0 0 186.69 190.5"
                xmlnsV="https://vecta.io/nano"
              >
                <g transform="translate(1184.583 765.171)">
                  <path
                    clipPath="none"
                    mask="none"
                    d="M-1089.333-687.239v36.888h51.262c-2.251 11.863-9.006 21.908-19.137 28.662l30.913 23.986c18.011-16.625 28.402-41.044 28.402-70.052 0-6.754-.606-13.249-1.732-19.483z"
                    fill="#4285f4"
                  />
                  <path
                    clipPath="none"
                    mask="none"
                    d="M-1142.714-651.791l-6.972 5.337-24.679 19.223h0c15.673 31.086 47.796 52.561 85.03 52.561 25.717 0 47.278-8.486 63.038-23.033l-30.913-23.986c-8.486 5.715-19.31 9.179-32.125 9.179-24.765 0-45.806-16.712-53.34-39.226z"
                    fill="#34a853"
                  />
                  <path
                    clipPath="none"
                    mask="none"
                    d="M-1174.365-712.61c-6.494 12.815-10.217 27.276-10.217 42.689s3.723 29.874 10.217 42.689c0 .086 31.693-24.592 31.693-24.592-1.905-5.715-3.031-11.776-3.031-18.098s1.126-12.383 3.031-18.098z"
                    fill="#fbbc05"
                  />
                  <path
                    d="M-1089.333-727.244c14.028 0 26.497 4.849 36.455 14.201l27.276-27.276c-16.539-15.413-38.013-24.852-63.731-24.852-37.234 0-69.359 21.388-85.032 52.561l31.692 24.592c7.533-22.514 28.575-39.226 53.34-39.226z"
                    fill="#ea4335"
                    clipPath="none"
                    mask="none"
                  />
                </g>
              </svg>
              Sign in with Google
            </button>
            <p>
              Don't have an account yet? <a href="/tutsignup">Sign up</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
