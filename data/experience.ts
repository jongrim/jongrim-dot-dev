interface ExperienceSection {
  title: string;
  timeSpan: string;
  company: string;
  highlights: string[];
}

const experience: ExperienceSection[] = [
  {
    title: "Team Lead II",
    company: "Olo",
    timeSpan: "June 2021 - Present",
    highlights: [
      "Led the Host team in developing a suite of restaurant applications and their supporting services across mobile and web",
      "Led the Handheld team in developing a new Android product for the market",
      "Managed hiring and performance reviews for both Host and Handheld teams, and worked with management to perform roadmap and capacity planning",
      "Served as frontend tech lead responsible for coordinating efforts among all frontend engineers and guiding architecture decisions",
      "Established accessibility and testing guidelines for the web, and wrote articles for reference and training purposes",
      "Improved webpack build and code configuration to reduce page load times by multiple seconds and reduced build times by 50%",
      "Developed complex features in Vue and TypeScript and introduced state machines and automated testing to ensure quality and reliability",
      "Expanded GitLab CI processes to include linting and test coverage to improve collaboration and code quality",
    ],
  },
  {
    title: "Senior Software Engineer",
    company: "Pindrop",
    timeSpan: "October 2017 - March 2019, February 2020 - June 2021",
    highlights: [
      "Developed a web SaaS product to analyze phone call audio using React, TypeScript, Redux, and Node",
      "Identified a team need for more visibility into our deployments and built a React and TypeScript tool deployed on AWS Amplify to pull deployment info from GitHub using their GraphQL API",
      "Collaborated with Design to build a foundational Design System to increase code reuse and improve consistency across pages",
    ],
  },
  {
    title: "Software Engineer",
    company: "Ware2Go",
    timeSpan: "May 2019 - February 2020",
    highlights: [
      "Led a team of four engineers in understanding business requirements and developing a React Native application to replace multiple web forms and streamline a painful user experience for warehouse operators",
      "Developed a POC application to demonstrate best practices of React hooks, TypeScript, and Jest for junior engineers, and led workshops to introduce these skills",
      "Partnered with Product to understand product analytics requirements, and then created a Google Analytics implementation that enabled them to track and analyze user flows",
    ],
  },
  {
    title: "Senior Specialist",
    company: "KPMG",
    timeSpan: "January 2014 - April 2017",
    highlights: [
      "Conducted requirements analysis and drafted implementation plans for large-scale transformation projects to introduce Priveleged Access Management solutions to enterprise environments",
      "Developed scripts to automate working with large spreadsheets using Python",
      "Executed security assessments to determine compliance with standards such as NIST and HIPAA",
      "Prepared client facing project deliverables and led stakeholder conversations and workshops",
    ],
  },
];

export default experience;
