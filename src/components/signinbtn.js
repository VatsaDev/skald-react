import { useAuthContext } from '../context/AuthContext';
import { useRouter } from 'next/navigation';
import signOutUser from '../firebase/auth/signout.js';

export default function signInBtn() {
  const { user } = useAuthContext();
  const router = useRouter();
  var btnText = '';
  var btnFunc = '';

  if (user == null) {
    btnText = 'Sign in';
    btnFunc = router.push('/signin');
  }
  if (user != null) {
    btnText = 'Sign Out';
    btnFunc = signOutUser;
  }

  return (
    <button
      onClick={btnFunc}
      className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-black hover:bg-white mt-4 lg:mt-0"
    >
      {btnText}
    </button>
  );
}
