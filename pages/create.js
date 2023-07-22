import Head from 'next/head';
import React, { useState } from 'react';
// Import the Slate editor factory.
import { createEditor } from 'slate';

// Import the Slate components and React plugin.
import { Slate, Editable, withReact } from 'slate-react';

import RichEditor from '../components/RichEditor.tsx';
/*async function query(data) {
        const response = await fetch(
            "https://api-inference.huggingface.co/models/tiiuae/falcon-7b-instruct",
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer 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`
                },
                method: "POST",
                body: JSON.stringify({"inputs": data}),
            }
        );
        const result = await response.json();
        return result;
    }*/ // replace with bert adjective replace
export default function Home() {
  const [postContent, setPostContent] = useState(
    'Write a fantasy adventure story about Leif the viking going to the the magical waterfall of Odin, with its rushing rapids, deep blue water, and its deafening roars, to get the obsidian idol of Odin, in the style of Brandon Mull. magic, dragons, treasure, myths ...'
  );

  async function gquery(data) {
    const url =
      'https://generativelanguage.googleapis.com/v1beta2/models/text-bison-001:generateText?key=AIzaSyDucoz8cp-KDI5_LWXBzbepSc6MN1Ly-Iw';

    var textBody =
      '{ "prompt": { "text": "As a prolific author:' +
      data +
      ', in the markdown format, with markdown bolding on titles, like **this**"} }';

    document.getElementById('naraBtn').disabled = true;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: textBody,
    });

    const gtext = await response.json();
    //console.log(gtext.candidates[0].output);
    document.getElementById('editor').value = gtext.candidates[0].output;
    document.getElementById('naraBtn').disabled = false;
  }

  var btnText = 'narrate';

  function narrate() {
    gquery(postContent);
  }

  const [editor] = useState(() => withReact(createEditor()));
  const initialValue = [
    {
      type: 'paragraph',
      children: [{ text: 'A line of text in a paragraph.' }],
    },
  ];

  return (
    <div>
      <Head>
        <title>Create</title>
        <link rel="icon" href="/logo.png" sizes="any" />
        <meta charset="utf-8" />
      </Head>

      <section>
        <h1 className="text-center text-8xl m-8 font-bold">Create</h1>
        <Slate editor={editor} initialValue={initialValue}>
          <Editable className="w-5/6 mx-auto h-96 bg-slate-100 drop-shadow-2xl rounded-lg p-8 m-2" />
        </Slate>
        <textarea
          id="editor"
          className="bg-slate-100 block w-5/6 h-96 mx-auto drop-shadow-2xl rounded-lg p-8 m-2"
          type="text"
          placeholder="hello"
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
        />
        <div id="btn-wrapper" className="w-4/5 mx-auto">
          <button
            id="naraBtn"
            className="enabled:bg-amber-500 enabled:text-white w-36 h-10 rounded-lg m-8 float-right disabled:bg-slate-600 disabled:text-slate-100"
            onClick={narrate}
          >
            {btnText}
          </button>
        </div>
      </section>
    </div>
  );
}
