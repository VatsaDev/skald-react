import Image from 'next/image';
import SignOutBtn from './signinbtn';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-slate-900 p-6">
      <div className="flex items-center flex-shrink-0 text-slate-100 mr-6">
        <Image src="/logo-white.png" width={100} height={100} alt="logo" />
        <span className="font-semibold text-4xl mx-4 tracking-tight">
          Skald
        </span>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <a
            href="/"
            className="block mt-4 lg:inline-block lg:mt-0 text-slate-100 hover:text-white mr-4 hover:underline mx-2"
          >
            Home
          </a>
          <a
            href="/pricing"
            className="block mt-4 lg:inline-block lg:mt-0 text-slate-100 hover:text-white mr-4 hover:underline mx-2"
          >
            Pricing
          </a>
          <a
            href="/about"
            className="block mt-4 lg:inline-block lg:mt-0 text-slate-100 hover:text-white hover:underline mx-2"
          >
            About
          </a>
          <a
            href="/prompt"
            className="block mt-4 lg:inline-block lg:mt-0 text-slate-100 hover:text-white hover:underline mx-2"
          >
            Prompt Generator
          </a>
          <a
            href="/faq"
            className="block mt-4 lg:inline-block lg:mt-0 text-slate-100 hover:text-white hover:underline mx-2"
          >
            FAQ
          </a>
        </div>
        <div>
          <a
            href="/create"
            className="inline-block text-sm px-4 py-2 leading-none border rounded text-amber-500 border-amber-500 hover:border-transparent  hover:bg-amber-500 hover:text-white mt-4 mx-4 lg:mt-0"
          >
            Create
          </a>
          <SignOutBtn />
        </div>
      </div>
    </nav>
  );
}
