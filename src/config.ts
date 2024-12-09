const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: "https://pavel-savchenko-portfolio.netlify.app/",
  title: "PS.",
};

const about = {
  // all the properties are optional - can be left empty or deleted
  name: "Pavel Savchenko",
  role: "JavaScript/TypeScript Developer",
  description:
    "I'm much better at front-end developing than at writing descriptions. Here some of the projects I completed.",
  resume: "Pavel_Savchenko_CV.pdf",
  social: {
    linkedin: "https://www.linkedin.com/in/pawelsawczenko/",
    github: "https://github.com/pawelsawczenko",
  },
};

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: "The Wild Oasis Website",
    img: "/img/the_wild_oasis_website.jpg",
    description:
      "Website that helps clients of the hotel to make and keep track of their bookings.",
    stack: ["TypeScript", "Next.js", "styled-components", "Supabase"],
    sourceCode: "https://github.com/pawelsawczenko/the-wild-oasis-website",
    livePreview: "https://the-wild-oasis-website-demo-ps.vercel.app/",
  },
  {
    name: "The Wild Oasis",
    img: "/img/the_wild_oasis_app.jpg",
    description:
      "Internal application for a hotel used for keeping track of   bookings, cabins & etc.",
    stack: [
      "React",
      "React Router",
      "React Query",
      "styled-components",
      "Supabase",
    ],
    sourceCode: "https://github.com/pawelsawczenko/the-wild-oasis",
    livePreview: "https://the-wild-oasis-ps.netlify.app/",
  },
  {
    name: "Gwent-based Card Game",
    img: "/img/gwent_based_app.jpg",
    description:
      "The course project that I built during the Evolution TypeScript Bootcamp. Inspired by the Gwent mini-game from The Witcher 3",
    stack: ["TypeScript", "React", "React Router", "MobX", "CSS"],
    sourceCode:
      "https://github.com/pawelsawczenko/evolution-ts-bootcamp-2023-the-course-project",
    livePreview: "https://gwent-based-game-bootcamp-2023.netlify.app/",
  },
  {
    name: "Fast React Pizza",
    img: "/img/fast_react_pizza_app.jpg",
    description: "A pizza ordering app for a small business",
    stack: ["React", "React Router", "Redux", "Tailwind CSS"],
    sourceCode: "https://github.com/pawelsawczenko/fast-react-pizza",
    livePreview: "https://fast-react-pizza-ps.netlify.app/",
  },
  {
    name: "WorldWise",
    img: "/img/worldwise_app.jpg",
    description:
      "A digital travel diary web app that allows users to keep track of their travel destinations",
    stack: ["React", "Context API", "React Router", "Leaflet", "CSS"],
    sourceCode: "https://github.com/pawelsawczenko/worldwise",
    livePreview: "https://worldwise-ps.netlify.app/",
  },
  {
    name: "forkify",
    img: "/img/forkify_app.jpg",
    description:
      "A recipe finder web app that allows users to search over one million recipes. It is built using the MVC design pattern",
    stack: ["JavaScript", "SCSS", "HTML"],
    sourceCode: "https://github.com/pawelsawczenko/forkify",
    livePreview: "https://forkify-app-ps.netlify.app/",
  },
  {
    name: "mapty",
    img: "/img/mapty_app.jpg",
    description:
      "An app I built during the Udemy JavaScript course. It tracks activities using geolocation, local storage and Leaflet",
    stack: ["JavaScript", "CSS", "HTML"],
    sourceCode: "https://github.com/pawelsawczenko/mapty",
    livePreview: "https://pawelsawczenko.github.io/mapty/",
  },
  {
    name: "Landing Page for Simple",
    img: "/img/simple_app.jpg",
    description:
      "The landing page for Simple Fasting App that I built while working as a freelancer",
    stack: ["JavaScript", "CSS", "HTML"],
    sourceCode: "https://github.com/pawelsawczenko/Simple",
    livePreview: "https://pawelsawczenko.github.io/Simple/",
  },
  {
    name: "Bankist App",
    img: "/img/bankist_app.jpg",
    description:
      "A simple banking app that I built while completing the Udemy JavaScript course",
    stack: ["JavaScript", "CSS", "HTML"],
    sourceCode: "https://github.com/pawelsawczenko/bankist-app",
    livePreview: "https://pawelsawczenko.github.io/bankist-app/",
  },
  {
    name: "Bankist Landing Page",
    img: "/img/bankist_landing.jpg",
    description:
      "Bankist Landing Page that I built while completing the Udemy JavaScript course",
    stack: ["JavaScript", "CSS", "HTML"],
    sourceCode: "https://github.com/pawelsawczenko/bankist-landing",
    livePreview: "https://pawelsawczenko.github.io/bankist-landing/",
  },
  {
    name: "Website for Belkras",
    img: "/img/belkras.jpg",
    description:
      "The website for Belkras that I built while working as a freelancer",
    stack: ["JavaScript", "CSS", "HTML", "PHP"],
    sourceCode: "https://github.com",
    livePreview: "http://www.belkras.by/",
  },
];

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Redux",
  "MobX",
  "SASS",
  "Material UI",
  "Git",
];

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: "pawelsawczenko@gmail.com",
};

export { header, about, projects, skills, contact };
