import { useRouter } from 'next/router';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import firebase_app from '../../../firebase/config';
import { useRef, useEffect, useInterval } from 'react';

export default function Page() {
  const db = getFirestore(firebase_app);
  const router = useRouter();
  const isReady = useRef(false);
  var text = '';

  console.log(router.query.slug);
  async function readData() {
    const docRef = doc(db, 'stories', router.query.slug);
    if (docRef) {
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log(docSnap.data().author);
        text = docSnap.data().author;
      } else {
        // docSnap.data() will be undefined in this case
        console.log('No such document!');
      }
    } else {
      return;
    }
  }
  readData();
  return <p>Post: {text}</p>;
}
