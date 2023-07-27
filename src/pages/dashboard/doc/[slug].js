import { useRouter } from 'next/router';
import getData from '../../../firebase/firestore/getData';
export default function Page() {
  const router = useRouter();
  console.log(getData('stories', router.query.slug));
  return <p>Post: {router.query.slug}</p>;
}
