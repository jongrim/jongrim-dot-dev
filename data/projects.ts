export interface Project {
  title: string;
  description: string;
  image: string;
  videos?: string[];
  tech: string[];
  link: string;
  github: string;
}

const projects: Project[] = [
  {
    title: "Playabl",
    description:
      "<p>Playabl is a modern community and event management system built for the roleplaying hobby. Building it has been a great joy and given me the chance to expand my skillset by diving into serverless and backend areas that I typically don't get the chance to use on the job.</p><p class='mt-4'>The app includes a variety of features including messaging, email notifications, and even a partner Slack application. It is currently in Beta as I work with some early adopters to identify key requirements and find market fit.</p>",
    image:
      "https://res.cloudinary.com/duf9ddqhl/image/upload/v1669952748/combined-preview_kkisgz.jpg",
    tech: [
      "Vue 3",
      "TypeScript",
      "Lambda",
      "SNS",
      "PostgreSQL",
      "Webhooks",
      "Stripe",
    ],
    link: "https://app.playabl.io",
    github: "https://github.com/Playabl-io",
  },
  {
    title: "Roll With Me",
    description:
      "<p>Roll With Me started as a weekend project to learn more about webhooks and grew into a set of tools for playing games online, including text based and drag-and-drop versions of dice rollers. I initially deployed it to Heroku to leverage running a Node server for Socket.IO, but I later revamped it and moved it into AWS Amplify so that I could add a database and GraphQL API with subscriptions for realtime data.</p><p class='mt-4'>The app has seen steady adoption and now sees consistent usage among those playing games online.</p>",
    videos: [
      "https://res.cloudinary.com/duf9ddqhl/video/upload/v1618446089/hex_map_slzu7b.webm",
    ],
    image:
      "https://res.cloudinary.com/duf9ddqhl/image/upload/q_auto/v1669952301/roll-with-me.png",
    tech: ["React", "TypeScript", "Amplify", "GraphQL"],
    link: "https://rollwithme.xyz",
    github: "https://github.com/jongrim/roll-with-me",
  },
];

export default projects;
