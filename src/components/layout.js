import Navbar from './navbar';
import { AuthContextProvider } from '../context/AuthContext';

export default function Layout({ children }) {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        {children}

        <p className="block font-mono m-8 p-8">
          Copyright Vatsa 2023-present, all rights reserved
        </p>
      </AuthContextProvider>
    </>
  );
}
