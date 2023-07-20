import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Skald</title>
      </Head>

      <section />
      <div
        className="w-full p-8 bg-cover bg-center text-white"
        style={{
          fontWeight: 'bold',
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6)), url(./banners/dragonFight.png)`,
        }}
      >
        <image
          src="./logo-white.png"
          alt="logo-black"
          width={100}
          height={100}
          className="mx-auto mt-6"
        />
        <h1 className="font-sans font-bold text-8xl text-center my-2 text-shadow-2xl">
          Skald
        </h1>
        <h2 className="text-center text-4xl my-8 typewriter">must add quote</h2>
        <h2 className="text-center text-lg my-8">
          Unique, Evocative Stories with the power of{' '}
          <span className="text-amber-500 font-bold">Generative AI</span>, at
          your fingertips
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="p-8 m-8">
          <h2 className="text-center text-xl m-8">
            Make your own stories, as{' '}
            <span className="text-amber-500 font-bold">amazing</span> as they
            can be, with{' '}
            <span className="text-amber-500 font-bold">Powerful AI Models</span>{' '}
          </h2>
          <p className="text-center">
            Use the power of google's most advanced AI model, Palm 2
          </p>
        </div>
        <img
          src="https://raw.githubusercontent.com/VatsaDev/skald/main/static/banners/dragonFight.jpg"
          alt="palm"
          className="w-3/4 mx-auto drop-shadow-2xl my-8"
        />
        <img
          src="https://raw.githubusercontent.com/VatsaDev/skald/main/static/banners/fantasyCastle.jpg"
          alt="palm"
          className="w-3/4 mx-auto drop-shadow-2xl my-8"
        />
        <div className="p-8 m-8">
          <h2 className="text-center text-xl my-4">
            Make your stories, as{' '}
            <span className="text-amber-500 font-bold">descriptive</span> as
            they can be, with{' '}
            <span className="text-amber-500 font-bold">Word Suggestions</span>{' '}
          </h2>
        </div>
        <div className="p-8 m-8">
          <h2 className="text-center text-xl my-4">
            Don't like it? get a{' '}
            <span className="text-amber-500 font-bold">Full Rewrite</span>
          </h2>
        </div>
        <img
          src="https://raw.githubusercontent.com/VatsaDev/skald/main/static/banners/fantasyCastle.jpg"
          alt="palm"
          className="w-3/4 mx-auto drop-shadow-2xl my-8"
        />
        <img
          src="https://raw.githubusercontent.com/VatsaDev/skald/main/static/banners/fantasyCastle.jpg"
          alt="palm"
          className="w-3/4 mx-auto drop-shadow-2xl my-8"
        />
        <div className="p-8 m-8">
          <h2 className="text-center text-xl my-4">
            Tailor your stories, by{' '}
            <span className="text-amber-500 font-bold">Age group</span> and{' '}
            <span className="text-amber-500 font-bold">Author Style</span>{' '}
          </h2>
        </div>
      </div>
      <footer className="my-8 mx-2 invisible lg:visible">
        <p className="font-mono">
          Copyright Vatsa 2023-present, all rights reserved
        </p>
      </footer>
      <section />
    </div>
  );
}
