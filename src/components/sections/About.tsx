import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { services } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";

interface IServiceCard {
  index: number;
  title: string;
  icon: string;
}

const ServiceCard: React.FC<IServiceCard> = ({ index, title, icon }) => (
  <Tilt
    glareEnable
    tiltEnable
    tiltMaxAngleX={30}
    tiltMaxAngleY={30}
    glareColor="#aaa6c3"
  >
    <div className="max-w-[250px] w-full xs:w-[250px]">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="green-pink-gradient shadow-card w-full rounded-[20px] p-[1px]"
      >
        <div className="bg-tertiary flex min-h-[280px] flex-col items-center justify-evenly rounded-[20px] px-12 py-5">
          <img
            src={icon}
            alt="web-development"
            className="h-16 w-16 object-contain"
          />

          <h3 className="text-center text-[20px] font-bold text-white">
            {title}
          </h3>
        </div>
      </motion.div>
    </div>
  </Tilt>
);

const About = () => {
  const socialLinks = [
    { label: "GitHub", href: "https://github.com/Thousip683" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/thousip-kokkinti-163456324",
    },
    { label: "Email", href: "mailto:thousip683@gmail.com" },
  ];

  return (
    <>
      <Header useMotion={true} {...config.sections.about} />

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="text-secondary mt-4 max-w-3xl text-[17px] leading-[30px]"
      >
        {config.sections.about.content}
      </motion.p>

      <motion.div
        variants={fadeIn("", "", 0.2, 1)}
        className="mt-8 flex flex-wrap gap-3"
      >
        <a
          href="mailto:thousip683@gmail.com?subject=Freelance%20Project%20Inquiry"
          className="rounded-full bg-[#1f9d63] px-5 py-2 text-sm font-semibold text-white shadow-md transition-colors hover:bg-[#188a56]"
        >
          Available for Freelancing
        </a>

        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="bg-black-200 hover:bg-black-100 rounded-full px-5 py-2 text-sm font-medium text-white transition-colors"
          >
            {link.label}
          </a>
        ))}
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-10 max-sm:justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
