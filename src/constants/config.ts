type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Thousip K | Full Stack Developer Portfolio",
    fullName: "Thousip K",
    email: "thousip683@gmail.com",
  },
  hero: {
    name: "Thousip K",
    p: [
      "Aspiring Full Stack Developer building clean, practical apps",
      "with user-focused design, backend APIs, and ML workflows, open to freelancing",
    ],
  },
  contact: {
    p: "Let's connect",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `I'm a Computer Science student focused on building clean,
      practical, and user-friendly applications. From responsive interfaces
      to structured backend APIs, I enjoy creating projects that solve
      real problems. I also train and evaluate machine learning models for
      classification and prediction tasks. I am ready for freelancing
      projects in web development and ML model building.`,
    },
    experience: {
      p: "My journey so far",
      h2: "Experience & Growth.",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "Featured projects",
      h2: "Projects.",
      content: `These projects highlight my practical work in full stack
    development, problem-solving, and product thinking. Each one focuses on
    building useful functionality with clear architecture and modern tools.`,
    },
  },
};
