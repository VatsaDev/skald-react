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
        <h1 class="text-center text-8xl font-bold m-8">Prompt Guide</h1>
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
            <li>Choosing An age group</li>
            <li>Adding Keywords</li>
            <li>Moral Themes or story types</li>
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
        <h2 class="text-center text-3xl font-bold m-8">
          Choosing an Age group
        </h2>
        <p class="text-lg m-8 w-4/5 mx-auto">
          Choosing an Age group can tailor your story to the audience much
          better than a regular story. Choosing an Age group changes everything
          about a story, from its Vocabulary to its writing style, and is vital
          for a good story
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
            and its deafening roars, to get the obsidian idol of Odin,{' '}
            <span className="text-amber-500 ">for children ages 8-12</span>, in
            the style of Brandon Mull.
          </div>
        </p>
        <h2 class="text-center text-3xl font-bold m-8">Adding Keywords</h2>
        <p class="text-lg m-8 w-4/5 mx-auto">
          Adding Keywords is a small benefit, but it can be good for underlying
          story themes, etc.
          <br />
          <br />
          <div className="bg-slate-100 rounded-lg text-xl drop-shadow-xl p-8">
            <span className="text-red-500 font-bold">Before:</span> Write a
            fantasy adventure story about Leif the viking going to the the
            magical waterfall of Odin, with its rushing rapids, deep blue water,
            and its deafening roars, to get the obsidian idol of Odin, for
            children ages 8-12, in the style of Brandon Mull
          </div>
          <br />
          <br />
          <div className="bg-slate-100 rounded-lg text-xl drop-shadow-xl p-8">
            <span className="text-green-500 font-bold">After:</span> Write a
            fantasy adventure story about Leif the viking going to the the
            magical waterfall of Odin, with its rushing rapids, deep blue water,
            and its deafening roars, to get the obsidian idol of Odin, for
            children ages 8-12, in the style of Brandon Mull{' '}
            <span className="text-amber-500 ">
              magic, dragons, treasure, myths
            </span>
          </div>
        </p>
        <h2 class="text-center text-3xl font-bold m-8">
          Moral themes and stoy types
        </h2>
        <p class="text-lg m-8 w-4/5 mx-auto">
          Completely optional, But moral themes and story types can be useful in
          engineering stories for children and stories for discussions in a
          classroom, etc.
          <br />
          <br />
          <div className="bg-slate-100 rounded-lg text-xl drop-shadow-xl p-8">
            <span className="text-red-500 font-bold">Before:</span> Write a
            fantasy adventure story about Leif the viking going to the the
            magical waterfall of Odin, with its rushing rapids, deep blue water,
            and its deafening roars, to get the obsidian idol of Odin, for
            children ages 8-12, in the style of Brandon Mull. magic, dragons,
            treasure, myths
          </div>
          <br />
          <br />
          <div className="bg-slate-100 rounded-lg text-xl drop-shadow-xl p-8">
            <span className="text-green-500 font-bold">After:</span> Write a
            fantasy adventure <span className="text-amber-500 ">bedtime</span>{' '}
            story{' '}
            <span className="text-amber-500 ">
              with an underlying moral theme about great power meaning great
              responsibility
            </span>{' '}
            about Leif the viking going to the the magical waterfall of Odin,
            with its rushing rapids, deep blue water, and its deafening roars,
            to get the obsidian idol of Odin, for children ages 8-12, in the
            style of Brandon Mull. magic, dragons, treasure, myths
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
            Once upon a time, there was a young Viking named Leif who lived in a
            small village on the coast of Norway. Leif was a brave and
            adventurous boy, and he loved to hear the stories of the old Vikings
            who had sailed the seas and explored new lands.
            <br />
            <br />
            One day, Leif heard a story about a magical waterfall that was said
            to be located far to the north. The waterfall was said to be home to
            the obsidian idol of Odin, a powerful artifact that was said to
            grant the wishes of its owner. Leif was determined to find the
            waterfall and claim the idol for himself.
            <br />
            <br />
            He set sail on his boat and traveled for many days, until he finally
            reached the edge of the world. There, he found a towering waterfall
            that plunged into a deep blue pool. The water was so clear that Leif
            could see the obsidian idol sitting on the bottom of the pool. Leif
            knew that he had to get the idol, but he also knew that it would be
            dangerous.
            <br />
            <br />
            The waterfall was surrounded by dragons, and they were known to be
            fierce protectors of the idol. Leif decided to wait until nightfall,
            when the dragons would be sleeping. When it was dark, Leif snuck
            down to the edge of the pool and dove into the water. He swam down
            to the bottom and grabbed the idol.
            <br />
            <br />
            Just as he was about to swim back to the surface, one of the dragons
            woke up and saw him. The dragon roared and breathed fire, but Leif
            was able to dodge the flames. He swam as fast as he could to the
            surface, and the dragon was too slow to catch him.
            <br />
            <br />
            Leif escaped with the idol, and he returned to his village a hero.
            He used the idol to grant wishes for the people of the village, and
            they were all grateful for his help. Leif learned that with great
            power comes great responsibility. He used the idol to help others,
            and he made sure that it never fell into the wrong hands.
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
