import { useAuthContext } from '../context/AuthContext';
import signOutUser from '../firebase/auth/signout.js';

export default function signOutBtn() {
  const { user } = useAuthContext();

  var classes = '';
  if (user != null) {
    classes =
      'inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-black hover:bg-white mt-4 -mr-[50px] lg:mt-0';
  }
  if (user == null) {
    classes = 'invisible';
  }

  return (
    <button className={classes} onClick={signOutUser}>
      Sign Out
    </button>
  );
}
