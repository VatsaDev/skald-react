import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>About</title>
        <link rel="icon" href="/logo.png" sizes="any" />
      </Head>

      <section>
        <img src="/logo-black.png" class="my-8 mx-auto" alt="black logo" />
        <h1 class="text-center text-8xl font-bold m-8">About Us</h1>
        <p class="text-center w-1/2 my-8 mx-auto">
          Skald is an innovative artificial intelligence platform designed to
          assist writers, artists, and creatives from all backgrounds and skill
          levels. We offer a variety of tools and resources, including automated
          prompt generators, and detailed stories made with Powerful Ai models
          Our goal is to provide our users with the tools, inspiration and
          guidance so they can unlock their full writing potential and bring
          their most ambitious projects to life.
        </p>
      </section>
    </div>
  );
}
