import Navbar from './navbar';
import { AuthContextProvider } from '../context/AuthContext';

export default function Layout({ children }) {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        {children}
      </AuthContextProvider>
    </>
  );
}
