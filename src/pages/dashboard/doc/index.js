import { useRouter } from 'next/router';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import firebase_app from '../../../firebase/config';
import { useRef, useEffect, useInterval } from 'react';
import { useState } from 'react';

export default function Page() {
  const db = getFirestore(firebase_app);
  const router = useRouter();
  const isReady = useRef(false);
  const [title, setTitle] = useState();
  var text;

  if (typeof window !== 'undefined') {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    console.log(id);
    async function readData() {
      const docRef = doc(db, 'stories', id);
      if (docRef) {
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          console.log(docSnap.data().author);
          document.getElementById('titleStory').innerHTML =
            docSnap.data().title;
        } else {
          // docSnap.data() will be undefined in this case
          console.log('No such document!');
        }
      } else {
        return;
      }
    }
    readData();
  }

  return (
    <h1
      id="titleStory"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      className="text-center text-8xl m-2"
    >
      {text}
    </h1>
  );
}
