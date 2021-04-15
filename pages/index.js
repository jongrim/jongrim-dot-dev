import * as React from 'react';
import Head from 'next/head';
import BannerBack from '../components/BannerBack';
import BannerFront from '../components/BannerFront';
import Waves from '../components/Waves';
import Fox from '../components/Fox';
import ProjectsBack, { ProjectsDivider } from '../components/ProjectsBack';
import ImageCard from '../components/ImageCard';
import VideoCard from '../components/VideoCard';
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
        <div className="w-full z-10 relative -bottom-px">
          <Waves />
        </div>
        <main className="w-full bg-dark-cyan flex flex-1 flex-col items-center font-body">
          <section className="text-white text-xl max-w-3xl px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 pt-48 pb-60 md:pb-80">
              <div className="flex flex-col justify-center px-12 lg:px-2">
                <p>
                  I am a <b className="text-3xl">builder</b> and a{' '}
                  <b className="text-3xl">maker</b>
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
            <div className="sticky top-1/3 md:top-0 z-auto w-full safari-transform relative mt-48 md:mt-0">
              <ProjectsBack />
            </div>
            <div className="h-auto md:h-48" />
            <div
              id="heart-hex"
              className="w-full md:w-2/3 lg:w-3/4 mx-auto my-32 z-10 safari-z-fix relative"
            >
              <VideoCard
                src="https://res.cloudinary.com/duf9ddqhl/video/upload/v1618446089/hex_map_slzu7b.webm"
                href="https://github.com/jongrim/roll-with-me/blob/af58cf8445d370a2ca7a80b6b06f07c6ab309981/src/MapModule/HexGrid.tsx"
                linkLabel="Heart game room"
                description="For the Heart game, I created an SVG hex grid that can be used to map out the game. 
                I love creating interactive elements, and the SVG grid includes features like zoom, pan, selecting 
                a background picture for a hex, and saving notes about each space. Future expansions will allow 
                the user to set the grid size and implement a drag and drop pan ability."
                title="SVG Hex Grid"
              />
            </div>
            <div
              id="visual-dice"
              className="w-full md:w-2/3 lg:w-3/4 mx-auto my-32 z-10 safari-z-fix relative"
            >
              <ImageCard
                src="/v1617997670/visual_dice_table_lyzpjz.png"
                alt="Visual Dice Table"
                href="https://rollwithme.xyz/i/industrial-shirt-men-origin-suggest-effect"
                linkLabel="visual dice table example"
                description="The Visual Dice Table mimics rolling dice at a table by enabling users to drag and drop items that have been added to the table. The dice and other items are saved and synced to all connected users, so everyone sees the same thing and keeps up with the game!"
                title="Visual Dice Table"
              />
            </div>
            <div
              id="text-dice"
              className="w-full md:w-2/3 lg:w-3/4 mx-auto my-32 z-10 safari-z-fix relative"
            >
              <ImageCard
                src="/v1617997670/text_dice_roller_rls764.png"
                alt="Text Dice Roller"
                href="https://rollwithme.xyz/r/easier-usual-material-pot-band-setting"
                linkLabel="text dice roller example"
                description="The Text Dice Roller is designed to be a fast and powerful way of rolling dice online. 
                Users can create rolls using an intuitive form or an advanced text syntax, and the results will 
                be saved and synced to the room. Other room features empower users to re-roll or review history items, 
                save rolls and custom dice, and use safety tools to make the game the most fun for everyone. Thoughtful 
                application of animations, such as the ticker-tape of recent rolls, enhance the product."
                title="Text Dice Roller"
              />
            </div>
            <div
              id="trophy-gold"
              className="w-full md:w-2/3 lg:w-3/4 mx-auto my-32 z-10 safari-z-fix relative"
            >
              <ImageCard
                src="/v1617997670/trophy_gold_umllbh.png"
                alt="Trophy Gold"
                href="https://rollwithme.xyz/trophy-gold/trophy-gold-testing"
                linkLabel="Trophy Gold game app"
                description="The Trophy Gold game application brings together dice rolling, character sheets, safety tools, and other 
                resources to allow players to play the game online with an improved experience. Features like rich text for notes,
                 customized column layout, and popout dice mean the user can customize the experience to their liking."
                title="Trophy Gold Game Application"
              />
            </div>
            <div
              id="pure-ui"
              className="w-full md:w-2/3 lg:w-3/4 mx-auto my-32 z-10 safari-z-fix relative"
            >
              <ImageCard
                src="/v1617938014/UI_state_machines_gxjdr7.png"
                alt="UI via state machines"
                href="https://docs.google.com/presentation/d/13fKUYN0dAufLSoW4bPazPfBM0WI1Nc-G7ulkrCcnVK0/edit?usp=sharing"
                linkLabel="Pure UI via State Machines slides"
                description="A presentation introducing state machines and statecharts and their use in UI development. 
                I find state machines to be an extremely promising technique and have used them very successfully at times 
                — such as managing the complex game load animation for Trophy Gold!. I am actively learning more about them 
                and how they can help tame complex interfaces."
                title="Pure UI via State Machines"
              />
            </div>
            <div className="mx-auto mt-32 mb-10 md:my-32 relative flex flex-col items-center bg-mb-yellow py-8 px-12 pt-32 safari-z-fix relative z-10">
              <p className="font-body text-xl">My tools of choice</p>
              <ul className="font-banner text-3xl">
                <li className="py-3">React</li>
                <li className="py-3">TypeScript / JavaScript</li>
                <li className="py-3">GraphQL</li>
                <li className="py-3">Chakra UI</li>
                <li className="py-3">Tailwind CSS</li>
                <li className="py-3">JAMStack</li>
                <li className="py-3">VS Code</li>
              </ul>
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
