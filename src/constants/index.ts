import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  carrent,
  jobit,
  tripguide,
  offroadSegmentation,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Frontend Development",
    icon: web,
  },
  {
    title: "Backend API Development",
    icon: backend,
  },
  {
    title: "Full Stack Project Building",
    icon: mobile,
  },
  {
    title: "ML Model Training",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Git",
    icon: git,
  },
];

const experiences: TExperience[] = [
  {
    title: "Computer Science Student",
    companyName: "Academic Journey",
    icon: creator,
    iconBg: "#383E56",
    date: "2022 - Present",
    points: [
      "Building a strong foundation in data structures, algorithms, and software engineering fundamentals.",
      "Applying classroom concepts through hands-on coding projects and practical implementations.",
      "Focusing on clean code practices, modular design, and maintainable project structures.",
      "Continuously learning modern full stack development and machine learning workflows.",
    ],
  },
  {
    title: "Frontend Developer",
    companyName: "Personal Projects",
    icon: web,
    iconBg: "#E6DEDD",
    date: "2023 - Present",
    points: [
      "Developing responsive web interfaces using React and JavaScript.",
      "Designing user-friendly layouts with consistent visual hierarchy and reusable components.",
      "Improving performance, accessibility, and cross-device compatibility across projects.",
      "Turning project ideas into polished frontends with production-ready structure.",
    ],
  },
  {
    title: "Backend and API Developer",
    companyName: "Full Stack Practice",
    icon: backend,
    iconBg: "#383E56",
    date: "2023 - Present",
    points: [
      "Creating backend APIs for full stack applications using Node.js and database integration.",
      "Structuring server-side logic for scalability and easy maintenance.",
      "Integrating frontend clients with secure, clear, and predictable API contracts.",
      "Working with relational and NoSQL databases based on project requirements.",
    ],
  },
  {
    title: "Machine Learning Enthusiast",
    companyName: "Self-Driven Learning",
    icon: mobile,
    iconBg: "#E6DEDD",
    date: "2024 - Present",
    points: [
      "Training and evaluating machine learning models for classification and prediction tasks.",
      "Preparing datasets, tuning model parameters, and comparing model performance metrics.",
      "Applying practical ML workflows to real-world project ideas.",
      "Continuing to strengthen fundamentals in data-driven problem solving.",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "Offroad_segmentation",
    description:
      "Offroad semantic segmentation for desert and simulator scenes, labeling every pixel into 10 classes for safer autonomous navigation.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "pytorch",
        color: "green-text-gradient",
      },
      {
        name: "segmentation-models-pytorch",
        color: "pink-text-gradient",
      },
      {
        name: "opencv",
        color: "blue-text-gradient",
      },
      {
        name: "albumentations",
        color: "green-text-gradient",
      },
      {
        name: "numpy",
        color: "pink-text-gradient",
      },
      {
        name: "tta-ensemble",
        color: "blue-text-gradient",
      },
    ],
    image: offroadSegmentation,
    sourceCodeLink: "https://github.com/Thousip683/Offroad_segmentation",
  },
  {
    name: "Student Task Manager",
    description:
      "Task planner for assignments, deadlines, and priorities with an organized dashboard for daily productivity.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/Thousip683",
  },
  {
    name: "DSA Practice Tracker",
    description:
      "Track solved coding problems by topic and difficulty to build consistency and measurable progress in DSA practice.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/Thousip683",
  },
  {
    name: "Portfolio and Blog Platform",
    description:
      "A personal showcase and technical writing platform built to present projects, ideas, and learning progress.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "php",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/Thousip683",
  },
];

export { services, technologies, experiences, testimonials, projects };
