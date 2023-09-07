import gwent_based_app from "./assets/gwent_based_app.jpg";
import forkify_app from "./assets/forkify_app.jpg";
import mapty_app from "./assets/mapty_app.jpg";
import simple_app from "./assets/simple_app.jpg";
import bankist_app from "./assets/bankist_app.jpg";
import bankist_landing from "./assets/bankist_landing.jpg";
import belkras from "./assets/belkras.jpg";
import Pavel_Savchenko_CV from "./assets/Pavel_Savchenko_CV.pdf";

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: "https://pavel-savchenko-portfolio.netlify.app/",
  title: "PS.",
};

const about = {
  // all the properties are optional - can be left empty or deleted
  name: "Pavel Savchenko",
  role: "Front-End Developer",
  description:
    "I'm much better at front-end developing than at writing descriptions. Here some of the projects I completed.",
  resume: Pavel_Savchenko_CV,
  social: {
    linkedin: "https://www.linkedin.com/in/pawelsawczenko/",
    github: "https://github.com/pawelsawczenko",
  },
};

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: "Gwent-based Card Game",
    img: gwent_based_app,
    description:
      "The course project that I built during the Evolution TypeScript Bootcamp",
    stack: ["React", "TypeScript", "MobX", "CSS"],
    sourceCode:
      "https://github.com/pawelsawczenko/evolution-ts-bootcamp-2023-the-course-project",
    livePreview: "https://gwent-based-game-bootcamp-2023.netlify.app/",
  },
  {
    name: "forkify",
    img: forkify_app,
    description:
      "A recipe finder app that I built while completing the Udemy JavaScript course. It uses forkify API and local storage",
    stack: ["JavaScript", "SCSS", "HTML"],
    sourceCode: "https://github.com/pawelsawczenko/forkify",
    livePreview: "https://forkify-app-ps.netlify.app/",
  },
  {
    name: "mapty",
    img: mapty_app,
    description:
      "An app I built during the Udemy JavaScript course. It tracks activities using geolocation, local storage and Leaflet",
    stack: ["JavaScript", "CSS", "HTML"],
    sourceCode: "https://github.com/pawelsawczenko/mapty",
    livePreview: "https://pawelsawczenko.github.io/mapty/",
  },
  {
    name: "Landing Page for Simple",
    img: simple_app,
    description:
      "The landing page for Simple Fasting App that I built while working as freelancer",
    stack: ["JavaScript", "CSS", "HTML"],
    sourceCode: "https://github.com/pawelsawczenko/Simple",
    livePreview: "https://pawelsawczenko.github.io/Simple/",
  },
  {
    name: "Bankist App",
    img: bankist_app,
    description:
      "A simple banking app that I built while completing the Udemy JavaScript course",
    stack: ["JavaScript", "CSS", "HTML"],
    sourceCode: "https://github.com/pawelsawczenko/bankist-app",
    livePreview: "https://pawelsawczenko.github.io/bankist-app/",
  },
  {
    name: "Bankist Landing Page",
    img: bankist_landing,
    description:
      "Bankist Landing Page that I built while completing the Udemy JavaScript course",
    stack: ["JavaScript", "CSS", "HTML"],
    sourceCode: "https://github.com/pawelsawczenko/bankist-landing",
    livePreview: "https://pawelsawczenko.github.io/bankist-landing/",
  },
  {
    name: "Website for Belkras",
    img: belkras,
    description:
      "The website for Belkras that I built while working as freelancer",
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
