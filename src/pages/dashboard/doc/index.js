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
  async function wordCall(data) {
    const url =
      'https://generativelanguage.googleapis.com/v1beta2/models/text-bison-001:generateText?key=AIzaSyDucoz8cp-KDI5_LWXBzbepSc6MN1Ly-Iw';

    var textBody =
      '{ "prompt": { "text": "return 10 synonyms for the word, give me an html list of the words:' +
      data +
      '"} }';

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: textBody,
    });

    const gtext = await response.json();
    console.log(gtext.candidates[0].output);
    document.getElementById('wordOutput').innerHTML =
      gtext.candidates[0].output;
  }

  function wordSuggest(value) {
    wordCall(value);
  }

  async function rewriteCall(data) {
    const url =
      'https://generativelanguage.googleapis.com/v1beta2/models/text-bison-001:generateText?key=AIzaSyDucoz8cp-KDI5_LWXBzbepSc6MN1Ly-Iw';

    var textBody =
      '{ "prompt": { "text": "rewrite the paragraph, removing any grammatical errors:' +
      data +
      '"} }';

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: textBody,
    });

    const gtext = await response.json();
    console.log(gtext.candidates[0].output);
    document.getElementById('rewriteOutput').innerHTML =
      gtext.candidates[0].output;
  }

  function rewriteSuggest(value) {
    rewriteCall(value);
  }

  return (
    <div>
      <div className="flex">
        <div className="flex-auto w-2/3 m-8">
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
        <div className="flex-auto w-1/3 p-8 m-8 rounded-lg drop-shadow-sm">
          <h1 className="text-center text-3xl m-2 font-light">
            AI Power Tools
          </h1>
          <div className="bg-slate-100 block w-full h-[80rem] my-8 mx-auto drop-shadow-sm rounded-lg p-8">
            <details>
              <summary className="text-xl">Sensory Expansion</summary>
              <p>
                Epcot is a theme park at Walt Disney World Resort featuring
                exciting attractions, international pavilions, award-winning
                fireworks and seasonal special events.
              </p>
            </details>
            <details>
              <summary className="text-xl">Rewrites</summary>
              <textarea
                id="rewritesInput"
                className="w-full h-24 m-2 p-2 rounded-lg"
              ></textarea>
              <button
                onClick={() =>
                  wordSuggest(document.getElementById('rewritesInput').value)
                }
                className="p-2 m-2 rounded-lg border border-amber-500  hover:border-transparent  hover:bg-amber-500"
              >
                Get rewrites
              </button>
              <div
                id="rewriteOutput"
                className="p-2 m-2 rounded-lg bg-slate-200 text-slate-400"
              >
                rewrites come here...
              </div>
            </details>
            <details>
              <summary className="text-xl">Word Suggestions</summary>
              <input
                id="wordSuggest"
                type="text"
                placeholder="give a word"
                className="p-2 m-2 rounded-lg bg-slate-200"
              />
              <button
                onClick={() =>
                  wordSuggest(document.getElementById('wordSuggest').value)
                }
                className="p-2 m-2 rounded-lg border border-amber-500 hover:border-transparent  hover:bg-amber-500"
              >
                Get suggestions
              </button>
              <div
                id="wordOutput"
                className="p-2 m-2 rounded-lg bg-slate-200 text-slate-400"
              >
                suggests come here...
              </div>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
}
