import Head from 'next/head';
import { useState } from 'react';

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
    'write a story about a viking who found a dragons treasure...'
  );

  async function gquery(data) {
    const url =
      'https://generativelanguage.googleapis.com/v1beta2/models/text-bison-001:generateText?key=AIzaSyDucoz8cp-KDI5_LWXBzbepSc6MN1Ly-Iw';

    var textBody =
      '{ "prompt": { "text": "As a prolific author:' + data + '"} }';

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

  return (
    <div>
      <Head>
        <title>Create</title>
      </Head>

      <section>
        <h1 className="text-center text-8xl m-8 font-bold">Create</h1>
        <textarea
          id="editor"
          className="bg-slate-100 block w-4/5 h-96 mx-auto drop-shadow-2xl rounded-lg p-8"
          type="text"
          placeholder="hello"
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
        />
        <div id="btn-wrapper" className="w-4/5 mx-auto">
          <button
            id="naraBtn"
            className="enabled:bg-amber-500 enabled:text-white w-48 h-10 rounded-full m-8 float-right disabled:bg-slate-600 disabled:text-slate-100"
            onClick={narrate}
          >
            {btnText}
          </button>
        </div>
      </section>
    </div>
  );
}
