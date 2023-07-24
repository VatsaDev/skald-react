import Navbar from './navbar';
import { AuthContextProvider } from '../context/AuthContext';

export default function Layout({ children }) {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        {children}
        <div className="my-8 mx-2">
          <p className="font-mono">
            Copyright Vatsa 2023-present, all rights reserved
          </p>
        </div>
      </AuthContextProvider>
    </>
  );
}
