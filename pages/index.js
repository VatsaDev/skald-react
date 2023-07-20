import Head from 'next/head';

export default function Home() {
  var pathArray = [
    'https://raw.githubusercontent.com/VatsaDev/skald-react/main/public/dragonFight.jpg',
    'https://raw.githubusercontent.com/VatsaDev/skald-react/main/public/dwarfMine.jpg',
    'https://raw.githubusercontent.com/VatsaDev/skald-react/main/public/fantasyCastle.jpg',
    'https://raw.githubusercontent.com/VatsaDev/skald-react/main/public/frozenWaste.jpg',
    'https://raw.githubusercontent.com/VatsaDev/skald-react/main/public/jungleTemple.jpg',
    'https://raw.githubusercontent.com/VatsaDev/skald-react/main/public/magicSwamp.jpg',
    'https://raw.githubusercontent.com/VatsaDev/skald-react/main/public/rusticVillage.jpg',
    'https://raw.githubusercontent.com/VatsaDev/skald-react/main/public/yaeger.jpg',
    'https://raw.githubusercontent.com/VatsaDev/skald-react/main/public/planeFlight.jpg',
    'https://raw.githubusercontent.com/VatsaDev/skald-react/main/public/spaceStation.jpg',
    'https://raw.githubusercontent.com/VatsaDev/skald-react/main/public/underwaterPalace.jpg',
    'https://raw.githubusercontent.com/VatsaDev/skald-react/main/public/underworld.jpg',
  ];
  var path = pathArray[Math.floor(Math.random() * pathArray.length)];
  var quote = '';
  if (path == pathArray[0]) {
    quote = 'Have a viking army fight a dragon';
  }
  if (path == pathArray[1]) {
    quote = 'Visit the Dwarven mines to the north';
  }
  if (path == pathArray[2]) {
    quote = 'Visit the home of the Royals';
  }
  if (path == pathArray[3]) {
    quote = 'Trudge Through frozen wastelands';
  }
  if (path == pathArray[4]) {
    quote = 'Loot the jungle temple';
  }
  if (path == pathArray[5]) {
    quote = 'Tread the dangers of the swamp';
  }
  if (path == pathArray[6]) {
    quote = 'Get some Bread and Ale at the Village tavern';
  }
  if (path == pathArray[7]) {
    quote = 'Climb Cliffs with a Yaeger';
  }
  if (path == pathArray[8]) {
    quote = 'Fly a plane through the clouds';
  }
  if (path == pathArray[9]) {
    quote = 'Mine Unobtanium on an Exoplanet far far away';
  }
  if (path == pathArray[10]) {
    quote = 'Travel deep to the kingdom of the merpeople';
  }
  if (path == pathArray[11]) {
    quote = 'Survive the fires of the underworld';
  }
  return (
    <div>
      <Head>
        <title>Skald</title>
      </Head>

      <section />
      <div
        className="w-full p-8 bg-cover bg-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6)), url(${path})`,
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
        <h2 className="text-center text-4xl my-8 typewriter">{quote}</h2>
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
          src="https://raw.githubusercontent.com/VatsaDev/skald-react/main/public/dragonFight.jpg"
          alt="palm"
          className="w-3/4 mx-auto drop-shadow-2xl my-8"
        />
        <img
          src="https://raw.githubusercontent.com/VatsaDev/skald-react/main/public/dragonFight.jpg"
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
          src="https://raw.githubusercontent.com/VatsaDev/skald-react/main/public/dragonFight.jpg"
          alt="palm"
          className="w-3/4 mx-auto drop-shadow-2xl my-8"
        />
        <img
          src="https://raw.githubusercontent.com/VatsaDev/skald-react/main/public/dragonFight.jpg"
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
