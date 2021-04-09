import Head from 'next/head';
import Banner from '../components/Banner';
import Waves from '../components/Waves';
import Image from 'next/image';
import {
  RiGithubFill,
  RiTwitterFill,
  RiMailFill,
  RiFileListFill,
} from 'react-icons/ri';

export default function Home() {
  return (
    <div>
      <Head>
        <title>jongrim.dev</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className="w-screen h-screen flex flex-col">
        <div className="w-full">
          <Banner />
        </div>
        <div className="w-full">
          <Waves />
        </div>
        <main className="w-full bg-sea-foam flex flex-1 flex-col items-center">
          <section className="text-center text-black text-xl max-w-3xl px-6">
            <p>
              I am a <b className="text-3xl">builder</b> and a{' '}
              <b className="text-3xl">creator</b>
            </p>
            <p className="mt-4">
              I am fulfilled when working on ideas that focus on user enjoyment
              and success
            </p>
          </section>
          <div className="w-4/5 h-1 border-b-2 border-gray-50 border-opacity-60 my-4" />
          <section className="relative w-full flex justify-around">
            <div className="w-1/3 h-auto relative">
              <Image src="/rollwithme.png" width={1200} height={800} />
              <a
                className="text-xl text-black cursor-pointer underline mb-4"
                href="https://rollwithme.xyz"
                target="_blank"
              >
                Roll With Me
              </a>
              <p className="text-black">
                Roll With Me is a full-stack application that provides tools and
                applications for playing tabletop games online. It is built on
                serveless technology using the Amplify framework and supports a
                growing gaming community.
              </p>
            </div>
            <div className="w-1/3 h-auto relative">
              <Image src="/UI_state_machines.png" width={1200} height={800} />
              <a
                className="text-xl text-black underline mb-4 scale-125 cursor-pointer"
                href="https://docs.google.com/presentation/d/13fKUYN0dAufLSoW4bPazPfBM0WI1Nc-G7ulkrCcnVK0/edit?usp=sharing"
                target="_blank"
              >
                Pure UI via State Machines
              </a>
              <p className="text-black">
                An introduction and discussion of how UI is a representation of
                application state, and how state machines can help reduce bugs
                and increase confidence
              </p>
            </div>
          </section>
        </main>
        <footer className="w-full bg-sea-foam flex justify-center text-white pt-6 pb-12">
          <div className="w-16 flex justify-center">
            <a
              className="cursor-pointer"
              target="_blank"
              href="https://docs.google.com/document/d/1Daw-CFqJlKpetcxXza1RtIs1n-myQSET5E7tUEP0pM8/edit?usp=sharing"
              aria-label="Jon Grim's Resume"
            >
              <RiFileListFill size="2em" />
            </a>
          </div>
          <div className="w-16 flex justify-center">
            <a
              className="cursor-pointer"
              target="_blank"
              href="https://github.com/jongrim"
              aria-label="Jon Grim's Github"
            >
              <RiGithubFill size="2em" />
            </a>
          </div>
          <div className="w-16 flex justify-center">
            <a
              className="cursor-pointer"
              target="_blank"
              href="https://twitter.com/jonjongrim"
              aria-label="Jon Grim's twitter"
            >
              <RiTwitterFill size="2em" />
            </a>
          </div>
          <div className="w-16 flex justify-center">
            <a
              className="cursor-pointer"
              target="_blank"
              href="mailto:jonjongrim@gmail.com"
              aria-label="email Jon"
            >
              <RiMailFill size="2em" />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
