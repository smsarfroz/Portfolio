import icon_react from "../assets/react.svg";
import icon_node from "../assets/node.svg";
import icon_express from "../assets/express.svg";
import icon_postgre from "../assets/postgresql.svg";
import icon_prisma from "../assets/prisma.svg";
import icon_html from "../assets/html.svg";
import icon_css from "../assets/css.svg";
import icon_javascript from "../assets/javascript.svg";
import icon_jwt from "../assets/jwt.svg";
import icon_tailwind from "../assets/tailwind.svg";
import icon_vite from "../assets/vite.svg";
import icon_git from "../assets/git.svg";

import github from "../assets/github.svg";
import { Laptop, Server, Wrench } from "lucide-react";

const STACK = {
  REACT: {
    name: "React.js",
    icon: icon_react,
  },
  NODE: {
    name: "Node.js",
    icon: icon_node,
  },
  EXPRESS: {
    name: "Express.js",
    icon: icon_express,
  },
  POSTGRES: {
    name: "PostgreSQL",
    icon: icon_postgre,
  },
  PRISMA: {
    name: "Prisma ORM",
    icon: icon_prisma,
  },
  HTML: {
    name: "HTML",
    icon: icon_html,
  },
  CSS: {
    name: "CSS",
    icon: icon_css,
  },
  JS: {
    name: "JavaScript",
    icon: icon_javascript,
  },
  VITE: {
    name: "Vite",
    icon: icon_vite,
  },
  JWT: {
    name: "JWT",
    icon: icon_jwt,
  },
  GIT: {
    name: "Git",
    icon: icon_git,
  },
  TAILWIND: {
    name: "TailwindCSS",
    icon: icon_tailwind,
  },
  GITHUB: {
    name: "GitHub",
    icon: github,
  },
};

const TECH = [
  {
    name: "Frontend",
    icon: <Laptop size={30} className="text-[#059669]" />,
    stack: [
      STACK.HTML,
      STACK.CSS,
      STACK.JS,
      STACK.REACT,
      STACK.VITE,
      STACK.TAILWIND,
    ],
  },
  {
    name: "Backend",
    icon: <Server size={30} className="text-[#059669]" />,
    stack: [STACK.NODE, STACK.EXPRESS, STACK.POSTGRES, STACK.PRISMA, STACK.JWT],
  },
  {
    name: "Tools",
    icon: <Wrench size={30} className="text-[#059669]" />,
    stack: [STACK.GIT, STACK.GITHUB],
  },
];

const TechStack = () => {
  return (
    <div
      id="tech-stack"
      className="w-full max-w-7xl mx-auto px-8 py-20 md:py-24"
    >
      <h2 className="text-5xl md:text-6xl font-bold text-white mb-16 text-center">
        Skills 
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {TECH.map((category, index) => (
          <div
            key={index}
            className="bg-[#0a1a3a]/50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            {/* Category Header */}
            <div className="flex items-center gap-3 mb-6 border-b border-gray-700 pb-4">
              {category.icon}
              <h3 className="text-2xl font-bold text-white">{category.name}</h3>
            </div>

            {/* Tech Grid */}
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.stack.map((tech, techIndex) => (
                <div
                  key={techIndex}
                  className="flex flex-col items-center justify-center gap-3 transition-transform duration-300 hover:scale-110"
                >
                  <div className="bg-[#001233] rounded-full p-3 w-16 h-16 flex items-center justify-center">
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <p className="text-gray-400 text-sm text-center">
                    {tech.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
