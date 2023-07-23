import { useAuthContext } from '../context/AuthContext';

export default function signInBtn() {
  const { user } = useAuthContext();

  var classes = '';
  if (user == null) {
    classes =
      'inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-black hover:bg-white mt-4 lg:mt-0';
  }
  if (user != null) {
    classes = 'invisible';
  }

  return (
    <a href="/signin" className={classes}>
      Sign in
    </a>
  );
}
