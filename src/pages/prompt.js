import Head from 'next/head';
import Layout from '../components/layout';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Prompt</title>
        <link rel="icon" href="/logo.png" sizes="any" />
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
        <p class="text-lg m-8 w-4/5 mx-auto">
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
            <span className="text-amber-500 ">
              {' '}
              Leif the viking going to the the magical waterfall of Odin, with
              its rushing rapids, deep blue water, and its deafening roars, to
              get the obsidian idol of Odin.
            </span>
          </div>
          <h2 class="text-center text-3xl font-bold m-8">
            Choosing an Author Style
          </h2>
          <p class="text-lg m-8 w-4/5 mx-auto" />
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
            <span className="text-amber-500 ">
              in the style of Brandon Mull
            </span>
          </div>
        </p>
        <h2 class="text-center text-3xl font-bold m-8">
          Choosing a Story vibe
        </h2>
        <p class="text-lg m-8 w-4/5 mx-auto">
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
            <span className="text-amber-500 ">fantasy adventure</span> story
            about Leif the viking going to the the magical waterfall of Odin,
            with its rushing rapids, deep blue water, and its deafening roars,
            to get the obsidian idol of Odin, in the style of Brandon Mull
          </div>
        </p>
        <h2 class="text-center text-3xl font-bold m-8">Adding Keywords</h2>
        <p class="text-lg m-8 w-4/5 mx-auto">
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
            <span className="text-amber-500 ">
              magic, dragons, treasure, myths
            </span>
          </div>
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 w-4/5 mx-auto">
          <p className="bg-slate-100 rounded-lg text-xl drop-shadow-xl p-8 m-8">
            <b>With no refinement:</b> <br />
            <br />
            Once upon a time, there was a young boy named Jack who lived in a
            small village. He was a kind and gentle boy, but he was also very
            lonely. He didn't have any friends, and his parents were always too
            busy to play with him. One day, Jack was walking in the forest when
            he came across a beautiful waterfall.
            <br />
            <br /> He had never seen anything like it before. The water was
            crystal clear, and it fell in a gentle cascade over the rocks. Jack
            was so enchanted by the waterfall that he decided to stay there and
            play. As Jack played, he noticed that the water was making strange
            noises. He listened closely, and he realized that the water was
            talking to him. "Hello, Jack," the water said. "My name is Willow.
            I'm a magic waterfall."
            <br />
            <br /> Jack was surprised. He had never met a magic waterfall
            before. "What can you do?" he asked. "I can grant you one wish,"
            Willow said. "But only one." Jack thought for a moment. He had
            always wanted to have a friend, but he knew that a magic waterfall
            couldn't give him that. "I wish I could have someone to play with,"
            he said. "Your wish is my command," Willow said. "From this day
            forward, you will never be lonely again." And with that, Willow
            disappeared.
            <br />
            <br /> Jack didn't know what to expect, but the next day, he met a
            new boy in the village. The boy's name was Tom, and he was just as
            kind and gentle as Jack. The two boys quickly became friends, and
            they played together every day. Jack was so happy to have a friend.
            He knew that he would never be lonely again, thanks to Willow the
            magic waterfall.
          </p>
          <p className="bg-slate-100 rounded-lg text-xl drop-shadow-xl p-8 m-8">
            <b>With the proper prompt:</b> <br />
            <br />
            <br />
            Leif the Viking was a young man who had always dreamed of adventure.
            He had heard the stories of the magical waterfall of Odin, and he
            knew that he had to see it for himself. The waterfall was said to be
            located in a faraway land, and it was said to be guarded by a fierce
            dragon. But Leif was determined to find it, and he was determined to
            claim the obsidian idol of Odin that was said to be hidden there.
            Leif set out on his journey, and he traveled for many days. He faced
            many dangers along the way, but he never gave up. <br />
            <br />
            inally, he reached the magical waterfall of Odin. The waterfall was
            even more beautiful than he had imagined. The water was crystal
            clear, and it fell in a thunderous roar. Leif knew that he had to
            find a way to get to the bottom of the waterfall, but he didn't know
            how. Just then, he saw a young woman standing on the edge of the
            waterfall. She was beautiful, and she had long, flowing hair. "I am
            Freya," she said. "I am the guardian of the waterfall of Odin. I can
            help you get to the bottom, but you must promise to give me the
            obsidian idol of Odin." <br />
            <br /> Leif agreed, and Freya led him to a secret path that led to
            the bottom of the waterfall. At the bottom of the waterfall, Leif
            found a cave. Inside the cave, he found the obsidian idol of Odin.
            He took the idol and gave it to Freya. "Thank you," Freya said.
            "Now, you must go. The dragon will be coming soon." <br />
            <br />
            Leif turned and ran out of the cave. He heard the dragon's roar
            behind him, but he didn't stop. He ran as fast as he could, and he
            finally made it to the edge of the waterfall. Leif jumped into the
            water and swam away. The dragon flew after him, but Leif was too
            fast. He swam to the shore and escaped. Leif returned to his
            village, and he told the people about his adventure. <br />
            <br /> They were amazed by his story, and they were grateful that he
            had brought back the obsidian idol of Odin. Leif was a hero, and he
            was celebrated by everyone in the village. He had found the magical
            waterfall of Odin, and he had claimed the obsidian idol of Odin. He
            had also defeated the dragon, and he had saved the village. <br />
            <br />
            Leif lived a long and happy life, and he never forgot his adventure
            at the magical waterfall of Odin.
          </p>
        </div>
        <p class="text-center text-4xl font-bold m-8">
          What are you waiting for?{' '}
          <a href="/dashboard">
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              Get Generating
            </span>
            <img
              src="/gbard.svg"
              alt="google bard"
              class=" inline w-12 h-12 m-2 p-2"
            />
          </a>
        </p>
      </section>
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
