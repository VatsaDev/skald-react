import { getAuth, signOut } from 'firebase/auth';

const auth = getAuth();
export default async function signOutUser() {
  signOut(auth)
    .then(() => {
      alert('ok! signed out!');
    })
    .catch((error) => {
      return error;
    });
}
