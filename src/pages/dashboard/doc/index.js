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
  const [postContent, setPostContent] = useState(
    'Write a fantasy adventure story about Leif the viking going to the the magical waterfall of Odin, with its rushing rapids, deep blue water, and its deafening roars, to get the obsidian idol of Odin, in the style of Brandon Mull. magic, dragons, treasure, myths ...'
  );
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
    <div>
      <div className="flex">
        <div className="flex-auto w-3/4 m-8">
          <h1
            id="titleStory"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="text-center text-8xl m-2"
          >
            {text}
          </h1>
          <textarea
            id="createEditor"
            className="bg-slate-100 block w-full h-[80rem] my-8 mx-auto drop-shadow-sm rounded-lg p-8"
            type="text"
            placeholder="your story..."
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
          />
          <button className="bg-gradient-to-r from-yellow-500 to-amber-600 py-2 px-6 float-right rounded-lg font-bold">
            Generate
          </button>
        </div>
        <div className="flex-auto w-1/4 p-8 m-8 rounded-lg drop-shadow-sm">
          <h1 className="text-center text-3xl m-2 font-light">
            AI Power Tools
          </h1>
          <div className="bg-slate-100 block w-full h-[80rem] my-8 mx-auto drop-shadow-sm rounded-lg p-8">
            <h1 className="text-xl">Sensory Expansion</h1>
            <h1 className="text-xl">Rewrites</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
