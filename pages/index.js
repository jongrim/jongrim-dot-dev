import Head from 'next/head';
import BannerBack from '../components/BannerBack';
import BannerFront from '../components/BannerFront';
import Waves from '../components/Waves';
import Fox from '../components/Fox';
import ImageCard from '../components/ImageCard';
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
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,600;1,400&family=Oswald&display=swap"
          rel="stylesheet"
        />
        <meta name="author" content="Jon Grim" />
        <meta
          name="description"
          content="Personal site of Jon Grim – software engineer"
        />
        <meta
          name="keywords"
          content="Jon Grim, Jonathan Grim, software, engineer, profressional, roll with me"
        />
      </Head>

      <div className="w-screen h-screen flex flex-col">
        <div className="w-full flex justify-center align-center relative">
          <div className="w-full absolute">
            <BannerBack />
          </div>
          <div className="w-full max-w-9xl mt-12 md:mt-32 z-10">
            <BannerFront />
          </div>
        </div>
        <div className="w-full z-10">
          <Waves />
        </div>
        <main className="w-full bg-dark-cyan flex flex-1 flex-col items-center z-10 font-body">
          <section className="text-white text-xl max-w-3xl px-6">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="flex flex-col justify-center px-12 lg:px-2">
                <p>
                  I am a <b className="text-3xl">builder</b> and a{' '}
                  <b className="text-3xl">creator</b>
                </p>
                <p className="mt-4">
                  I am fulfilled when working on ideas that create user success
                  and <b className="text-3xl align-text-top">joy</b>
                </p>
              </div>
              <div className="flex flex-col justify-center px-6 max-h-80">
                <Fox />
              </div>
            </div>
          </section>
          <div className="w-4/5 h-1 border-b-2 border-gray-50 border-opacity-60 my-4" />
          <section className="relative w-full flex flex-wrap justify-around">
            <div className="w-full md:w-1/2 xl:w-1/3 h-auto">
              <ImageCard
                src="/v1617997670/visual_dice_table_lyzpjz.png"
                alt="Visual Dice Table"
                href="https://rollwithme.xyz/i/industrial-shirt-men-origin-suggest-effect"
                linkLabel="Roll With Me - visual dice table example"
                description="The Visual Dice Table application mimics rolling dice at a table. 
                It also enhances the experience for online play by providing additional 
                features such as safety tools and game supporting items."
                title="Roll With Me - Visual Dice Table"
              />
            </div>
            <div className="w-full md:w-1/2 xl:w-1/3 h-auto">
              <ImageCard
                src="/v1617997670/text_dice_roller_rls764.png"
                alt="Text Dice Roller"
                href="https://rollwithme.xyz/r/easier-usual-material-pot-band-setting"
                linkLabel="Roll With Me - text dice roller example"
                description="The text dice roller is designed to support playing tabletop games online. 
                Through a variety of tools, users can create, save, and roll dice and custom rolls quickly, 
                while also enhancing their game with safety tools and other features."
                title="Roll With Me - Text Dice Roller"
              />
            </div>
            <div className="w-full md:w-1/2 xl:w-1/3 h-auto">
              <ImageCard
                src="/v1617997670/trophy_gold_umllbh.png"
                alt="Trophy Gold"
                href="https://rollwithme.xyz/trophy-gold/trophy-gold-testing"
                linkLabel="Trophy Gold game app"
                description="The Trophy Gold game application is an example of a multiplayer game module. 
                It brings together dice rolling, character sheets, safety tools, and other 
                resources to allow players to play the game online with an improved experience."
                title="Roll With Me - Trophy Gold"
              />
            </div>
            <div className="w-full md:w-1/2 xl:w-1/3 h-auto">
              <ImageCard
                src="/v1617938014/UI_state_machines_gxjdr7.png"
                alt="UI via state machines"
                href="https://docs.google.com/presentation/d/13fKUYN0dAufLSoW4bPazPfBM0WI1Nc-G7ulkrCcnVK0/edit?usp=sharing"
                linkLabel="Pure UI via State Machines slides"
                description="An introduction and discussion of how UI is a representation of
                application state, and how state machines can help reduce bugs
                and increase confidence"
                title="Pure UI via State Machines"
              />
            </div>
          </section>
        </main>
        <footer className="w-full bg-dark-cyan flex flex-col justify-center text-white pt-6 pb-12">
          <div className="flex justify-center">
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
          </div>
          <div className="flex justify-center mt-4 font-body">
            <a
              className="text-xs text-gray-50 italic"
              href="https://www.freepik.com/free-vector/cute-fox-operating-laptop-cartoon-illustration_12853811.htm#page=1&query=programmer%20fox&position=0"
            >
              Fox vector created by catalyststuff - www.freepik.com
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
