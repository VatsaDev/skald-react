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
        <p class="text-center text-lg m-8 w-1/3 mx-auto">
          When we make stories, we want them to be sensational, and that
          involves adding descriptions to your prompts, like names, senses and
          attributes, and maybe a goal, to help Palm create better stories.
          <br />
          before: write a story about a boy going to a magic waterfall <br />
          after: write a story about Leif the viking the the magical waterfall
          of Odin, with its rushing rapids, deep blue water, and its deafening
          roars, to get the idol of Odin.
        </p>
      </section>
    </div>
  );
}
