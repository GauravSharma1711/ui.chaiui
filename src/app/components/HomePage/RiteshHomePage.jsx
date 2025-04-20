// pages/index.tsx

import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>Chai UI</title>
        <meta name="description" content="An open-source React component library brewed with simplicity and chai vibes." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-[#0e0e10] text-white min-h-screen">

        <section className="px-6 md:px-20 py-16 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Brew beautiful interfaces <br className="hidden md:block" /> with <span className="text-orange-400">Chai UI</span>
            </h1>
            <p className="text-neutral-400 text-lg mb-8">
              An open-source React component library brewed with simplicity, speed, and chai vibes. Designed to help you ship faster and design consistently.
            </p>

            <div className="flex gap-4">
              <a href="#" className="bg-orange-400 text-black px-6 py-3 rounded-lg font-medium hover:bg-orange-300 transition duration-300">Get Started</a>
              <a href="#components" className="border border-neutral-700 px-6 py-3 rounded-lg font-medium hover:border-white transition duration-300">Explore Components</a>
            </div>
          </div>

          <div className="relative w-full max-w-lg aspect-square">
            <Image
              src="/chai-ui-showcase.png"
              alt="UI Showcase"
              fill
              className="object-contain"
              priority
            />
          </div>
        </section>
      </main>
    </>
  );
}
