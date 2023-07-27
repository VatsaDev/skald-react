'use client';
import React from 'react';
import { useState } from 'react';
import { useAuthContext } from '../../context/AuthContext';
import { useRouter } from 'next/navigation';
import Layout from '../../components/layout';
import { getFirestore, doc, getDocs } from 'firebase/firestore';
import firebase_app from '../../firebase/config';
import { collection, query, where } from 'firebase/firestore';

const db = getFirestore(firebase_app);

export default function Home() {
  const { user } = useAuthContext();
  const router = useRouter();

  if (user == null) {
    router.push('/');
  }

  React.useEffect(() => {
    if (user == null) router.push('/');
  }, [user]);

  var author = user.email;
  const storiesRef = collection(db, 'stories');

  async function getStory() {
    const q = query(storiesRef, where('author', '==', 'test'));
    const story = await getDocs(q);
    if (story.docs.length > 0) {
      story.forEach((doc) => {
        //console.log(doc.id, ' => ', doc.data());
        document.getElementById(
          'storyBar'
        ).innerHTML += `<div class="w-3/4 border border-amber-500 mx-auto"><a href='/dashboard/doc?id=${
          doc.id
        }'>
                <h1 class="text-xl m-8">${doc.data().title}</h1>
              </a></div>`;
      });
    } else {
      document.innerHTML = 'you appear to have no stories';
    }
  }

  const [postBar, setPostBar] = useState('you have no stories');

  getStory();

  return (
    <div>
      <h1 className="text-2xl m-8 text-center font-light">Make a new story</h1>
      <a href="/dashboard/create">
        <img
          src="https://raw.githubusercontent.com/VatsaDev/skald-react/main/public/dragonFight.jpg"
          alt="palm"
          className="w-36 h-48 mx-auto drop-shadow-2xl my-8"
        />
      </a>
      <div
        id="storyBar"
        className="m-2 p-2 grid grid-cols-1 lg:grid-cols-4"
        value={postBar}
        onChange={(e) => setPostBar(e.target.value)}
      ></div>
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
