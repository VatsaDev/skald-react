import Head from 'next/head';
import Layout from '../components/layout';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pricing</title>
        <link rel="icon" href="/logo.png" sizes="any" />
      </Head>

      <section>
        <h1 class="text-center text-8xl m-8">Pricing</h1>
        <div class="flex flex-col lg:flex-row w-5/6 mx-auto text-white">
          <div class="w-full lg:w-1/3 bg-slate-900 m-2 p-2 rounded-lg">
            <h1 class="text-center text-4xl m-8">Village Plan</h1>
            <h1 class="text-center text-2xl m-8">Free</h1>
            <p class="text-center m-8">
              For people who want a couple stories a month
            </p>
            <ul class="list-disc list-inside m-8">
              <li>50 Gold Runes/month</li>
              <li>40 Amber Runes/month</li>
              <li>10 Amethyst Runes/month</li>
            </ul>
          </div>
          <div class="w-full lg:w-1/3 bg-slate-900 m-2 p-2 rounded-lg">
            <p class="text-center m-2 text-amber-500">Coming soon!</p>
            <h1 class="text-center text-4xl m-8">Traveller Plan</h1>
            <h1 class="text-center text-2xl m-8">9.99/month</h1>
            <p class="text-center m-8">
              For Writers, Small Businesses, and Parents who need the perfect
              bedtime story every night
            </p>
            <ul class="list-disc list-inside m-8">
              <li>500 Gold Runes/month</li>
              <li>400 Amber Runes/month</li>
              <li>100 Amethyst Runes/month</li>
            </ul>
          </div>
          <div class="w-full lg:w-1/3 bg-slate-900 m-2 p-2 rounded-lg">
            <p class="text-center m-2 text-amber-500">Coming soon!</p>
            <h1 class="text-center text-4xl m-8">Royal Plan</h1>
            <h1 class="text-center text-2xl m-8">19.99/month</h1>
            <p class="text-center m-8">For Enterprises</p>
            <ul class="list-disc list-inside m-8">
              <li>5000 Gold Runes/month</li>
              <li>4000 Amber Runes/month</li>
              <li>1000 Amethyst Runes/month</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
