import * as React from 'react';
import Head from 'next/head';
import BannerBack from '../components/BannerBack';
import BannerFront from '../components/BannerFront';
import Waves from '../components/Waves';
import Fox from '../components/Fox';
import ProjectsBack, { ProjectsDivider } from '../components/ProjectsBack';
import ImageCard from '../components/ImageCard';
import {
  RiGithubFill,
  RiLinkedinFill,
  RiTwitterFill,
  RiMailFill,
} from 'react-icons/ri';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  React.useEffect(() => {
    gsap.set('#heart-bubble', {
      scale: 0.25,
      opacity: 0,
      transformOrigin: 'bottom center',
    });
    gsap.to('#heart-bubble', {
      opacity: 1,
      scale: 1,
      duration: 1,
      scrollTrigger: {
        trigger: '#heart-bubble',
        start: 'top 60%',
        end: 'top 50%',
        scrub: 1,
        once: true,
      },
    });
  }, []);
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
          <div className="w-full pt-8 md:py-8 sm:my-8 md:my-8 lg:my-12 xl:my-32 z-10 flex justify-center">
            <div className="font-banner mx-2 my-auto px-4 lg:px-8 py-3 lg:py-6 rounded-md bg-gray-50 shadow-lg flex items-center justify-between">
              <div>
                <h1 className="text-5xl md:text-7xl lg:text-9xl">Jon Grim</h1>
                <p className="text-3xl md:text-4xl lg:text-5xl pb-1">
                  Software Engineer
                </p>
                <p className="text-2xl md:text-4xl lg:text-5xl text-blue-700 text-opacity-90">
                  not really that grim
                </p>
              </div>
              <div className="w-44 md:w-60 lg:w-96">
                <BannerFront />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full z-10">
          <Waves />
        </div>
        <main className="w-full bg-dark-cyan flex flex-1 flex-col items-center font-body">
          <section className="text-white text-xl max-w-3xl px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 pt-48 pb-80">
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
          <div className="w-full transform rotate-180 relative -bottom-px">
            <ProjectsDivider />
          </div>
          <section className="w-full bg-mb-yellow">
            <ProjectsBack />
            <div className="h-48" />
            <div
              id="visual-dice"
              className="w-full md:w-2/3 lg:w-3/4 mx-auto my-32 relative"
            >
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
            <div
              id="text-dice"
              className="w-full md:w-2/3 lg:w-3/4 mx-auto my-32 relative"
            >
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
            <div
              id="trophy-gold"
              className="w-full md:w-2/3 lg:w-3/4 mx-auto my-32 relative"
            >
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
            <div
              id="pure-ui"
              className="w-full md:w-2/3 lg:w-3/4 mx-auto my-32 relative"
            >
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
        <footer className="w-full bg-mb-yellow flex flex-col justify-center text-black pt-6 pb-12">
          <div className="flex justify-center">
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
                href="https://www.linkedin.com/in/jonathangrim/"
                aria-label="Jon Grim's LinkedIn"
              >
                <RiLinkedinFill size="2em" />
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
          <div className="flex justify-center mt-4 font-body text-black">
            <a
              className="text-xs italic"
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
