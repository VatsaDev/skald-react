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
      </section>
    </div>
  );
}
