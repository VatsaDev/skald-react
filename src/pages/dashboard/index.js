'use client';
import React from 'react';
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

  React.useEffect(() => {
    if (user == null) router.push('/');
  }, [user]);

  var author = user.email;
  const storiesRef = collection(db, 'stories');

  const storyArray = [];

  React.useEffect(() => {
    async () => {
      const storyArray = [];
      async function getStory() {
        const q = query(storiesRef, where('author', '==', 'test'));
        const story = await getDocs(q);
        story.forEach((doc) => {
          console.log(doc);
          storyArray.push([
            <a href={`doc/${doc.id}`}>
              <h1 className="text-xl">{doc.data().title}</h1>
            </a>,
          ]);
        });
      }
      await getStory();
      return storyArray;
    },
      [author];
  });
  return (
    <div>
      <h1 className="text-2xl m-8 text-center font-light">Make a new story</h1>
      <a
        href="/dashboard/create"
        className="border border-8 border-amber-500 p-8 m-8 font-bold text-8xl text-center"
      >
        +
      </a>
      <div id="storyBar" className="m-8 p-8">
        {storyArray}
      </div>
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
