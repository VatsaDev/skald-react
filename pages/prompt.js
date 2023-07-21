import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Prompt</title>
      </Head>

      <section>
        <h1 class="text-center text-8xl font-bold m-8">Prompt Generator</h1>
        <p class="text-center text-lg m-8">
          Our model is from Palm 2, the same as{' '}
          <a href="https://bard.google.com/">
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              Google Bard
            </span>
            <img
              src="/gbard.svg"
              alt="google bard"
              class=" inline w-12 h-12 m-2 p-2"
            />
          </a>
        </p>
        <h2 class="text-center text-5xl font-bold m-8">
          Making a good story prompt
        </h2>
        <p class="text-center text-xl m-8">
          For a good story prompt, we recommend...
        </p>
        <div class="w-1/4 mx-auto">
          <ul class="list-disc list-inside m-8">
            <li>Choosing a Descriptive prompt</li>
            <li>Choosing an Author/Writing style</li>
            <li>Choosing a vibe</li>
            <li>Adding Keywords</li>
          </ul>
        </div>
        <h2 class="text-center text-3xl font-bold m-8">
          Choosing a descriptive prompt
        </h2>
        <p class="text-lg m-8 w-2/3 mx-auto">
          When we make stories, we want them to be sensational, and that
          involves adding descriptions to your prompts, like names, senses and
          attributes, and maybe a goal, to help Palm create better stories.
          <br />
          <br />
          <div className="bg-slate-100 rounded-lg text-xl drop-shadow-xl p-8">
            <span className="text-red-500 font-bold">Before:</span> write a
            story about a boy going to a magic waterfall
          </div>
          <br />
          <br />
          <div className="bg-slate-100 rounded-lg text-xl drop-shadow-xl p-8">
            <span className="text-green-500 font-bold">After:</span> write a
            story about{' '}
            <span className="text-amber-500 font-bold">
              {' '}
              Leif the viking going to the the magical waterfall of Odin, with
              its rushing rapids, deep blue water, and its deafening roars, to
              get the obsidian idol of Odin.
            </span>
          </div>
          <h2 class="text-center text-3xl font-bold m-8">
            Choosing an Author Style
          </h2>
          <p class="text-lg m-8 w-2/3 mx-auto" />
          While this is optional, choosing an author style, can help Palm
          generate a better story, as it has the template of an author to go by.
          Here, We'll go with Brandon Mull, a great fantasy author, the writer
          of the fablehaven series!
          <br />
          <br />
          <div className="bg-slate-100 rounded-lg text-xl drop-shadow-xl p-8">
            <span className="text-red-500 font-bold">Before:</span> write a
            story about Leif the viking going to the the magical waterfall of
            Odin, with its rushing rapids, deep blue water, and its deafening
            roars, to get the obsidian idol of Odin.
          </div>
          <br />
          <br />
          <div className="bg-slate-100 rounded-lg text-xl drop-shadow-xl p-8">
            <span className="text-green-500 font-bold">After:</span> write a
            story about Leif the viking going to the the magical waterfall of
            Odin, with its rushing rapids, deep blue water, and its deafening
            roars, to get the obsidian idol of Odin,{' '}
            <span className="text-amber-500 font-bold">
              in the style of Brandon Mull
            </span>
          </div>
        </p>
        <h2 class="text-center text-3xl font-bold m-8">
          Choosing a Story vibe
        </h2>
        <p class="text-lg m-8 w-2/3 mx-auto">
          A simple way to influence how the story is the vibe, or theme,
          choosing a vibe can have large effects, like setting it as a grim
          survivalist story, a fantasy adventure story, or a dark mystery theme.
          <br />
          <br />
          <div className="bg-slate-100 rounded-lg text-xl drop-shadow-xl p-8">
            <span className="text-red-500 font-bold">Before:</span> write a
            story about Leif the viking going to the the magical waterfall of
            Odin, with its rushing rapids, deep blue water, and its deafening
            roars, to get the obsidian idol of Odin, in the style of Brandon
            Mull
          </div>
          <br />
          <br />
          <div className="bg-slate-100 rounded-lg text-xl drop-shadow-xl p-8">
            <span className="text-green-500 font-bold">After:</span> Write a{' '}
            <span className="text-amber-500 font-bold">fantasy adventure</span>{' '}
            story about Leif the viking going to the the magical waterfall of
            Odin, with its rushing rapids, deep blue water, and its deafening
            roars, to get the obsidian idol of Odin, in the style of Brandon
            Mull
          </div>
        </p>
        <h2 class="text-center text-3xl font-bold m-8">Adding Keywords</h2>
        <p class="text-lg m-8 w-2/3 mx-auto">
          While this is optional, choosing an author style, can help Palm
          generate a better story, as it has the template of an author to go by.
          Here, We'll go with Brandon Mull, a great fantasy author, the writer
          of the fablehaven series!
          <br />
          <br />
          <div className="bg-slate-100 rounded-lg text-xl drop-shadow-xl p-8">
            <span className="text-red-500 font-bold">Before:</span> Write a
            fantasy adventure story about Leif the viking going to the the
            magical waterfall of Odin, with its rushing rapids, deep blue water,
            and its deafening roars, to get the obsidian idol of Odin, in the
            style of Brandon Mull
          </div>
          <br />
          <br />
          <div className="bg-slate-100 rounded-lg text-xl drop-shadow-xl p-8">
            <span className="text-green-500 font-bold">After:</span> Write a
            fantasy adventure story about Leif the viking going to the the
            magical waterfall of Odin, with its rushing rapids, deep blue water,
            and its deafening roars, to get the obsidian idol of Odin, in the
            style of Brandon Mull.{' '}
            <span className="text-amber-500 font-bold">
              magic, dragons, treasure, myths
            </span>
          </div>
        </p>
      </section>
    </div>
  );
}
