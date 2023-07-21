import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Faq</title>
        <link rel="icon" href="/logo.png" sizes="any" />
      </Head>

      <section>
        <img src="/logo-black.png" class="my-8 mx-auto" alt="black logo" />
        <h1 class="text-center text-8xl font-bold m-8">Faq</h1>
        <div class="w-2/3 mx-auto">
          <h1 class="text-4xl font-bold m-8">What are Runes?</h1>
          <p>
            Runes are the tokens used to generate your stories. Yellow runes are
            used for adjective changes, etc, and the Amber runes are used for
            Story generation and rewrites.
          </p>
        </div>
      </section>
    </div>
  );
}
