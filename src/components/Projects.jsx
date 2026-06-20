import icon_react from "../assets/react.svg";
import icon_node from "../assets/node.svg";
import icon_express from "../assets/express.svg";
import icon_postgre from "../assets/postgresql.svg";
import icon_prisma from "../assets/prisma.svg";
import icon_socket from "../assets/socket.io.svg";
import { Github, Link as LinkIcon, CodeXml } from "lucide-react";
import sarfrozworld from "../assets/SW.png";
import whereiswaldo from "../assets/WIW.png";

const STACK = {
  REACT: {
    name: "React.js",
    icon: icon_react,
    color: "rgba(0, 51, 94, 0.85)",
  },
  NODE: {
    name: "Node.js",
    icon: icon_node,
    color: "rgba(0, 56, 12, 0.85)",
  },
  EXPRESS: {
    name: "Express.js",
    icon: icon_express,
    color: "rgba(179, 95, 0, 0.85)",
  },
  POSTGRES: {
    name: "PostgreSQL",
    icon: icon_postgre,
    color: "rgba(44, 103, 180, 0.85)",
  },
  PRISMA: {
    name: "Prisma ORM",
    icon: icon_prisma,
    color: "rgba(10, 10, 10, 0.85)",
  },
  SOCKET: {
    name: "Socket.io",
    icon: icon_socket,
    color: "rgba(78, 78, 78, 0.85)",
  },
};

const Projects = () => {
  const PROJECTS = [
    {
      title: "SarfrozWorld",
      description:
        "A full-featured social media platform where you can connect, share content, and interact with the community. Built with React, Node, Express, PostgreSQL, and Supabase.",
      stack: [
        STACK.REACT,
        STACK.NODE,
        STACK.EXPRESS,
        STACK.POSTGRES,
        STACK.PRISMA,
      ],
      photo: sarfrozworld,
      code: "https://github.com/smsarfroz/sarfrozworld",
      preview: "https://github.com/smsarfroz/sarfrozworld",
    },
    {
      title: "Where's the Character ?",
      description:
        "A full-stack photo tagging game where players search for hidden characters in detailed illustrations. Built with React, Node, Express, PostgreSQL, and Prisma ORM.",
      stack: [STACK.REACT, STACK.NODE, STACK.EXPRESS, STACK.POSTGRES, STACK.PRISMA],
      photo: whereiswaldo,
      code: "https://github.com/smsarfroz/where-is-waldo",
      preview: "https://where-is-waldo-one.vercel.app/",
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-8 py-20 md:py-24" id="projects">
      <h2 className="text-5xl md:text-6xl font-bold text-white mb-12 flex items-center gap-4">
        <CodeXml size={40} className="text-[#10B981]" />
        <span>Projects</span>
      </h2>

      <div className="flex flex-col gap-16">
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row bg-[#0a1a3a]/50 rounded-xl overflow-hidden shadow-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
          >
            {/* Project Image */}
            <div className="lg:w-1/2 h-[300px] lg:h-[400px]">
              <img
                src={project.photo}
                alt={`${project.title} screenshot`}
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Project Details */}
            <div className="lg:w-1/2 p-8 flex flex-col justify-between h-[400px]">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {project.title}
                </h3>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.stack.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg"
                      style={{
                        backgroundColor: tech.color || "rgba(0, 18, 51, 0.85)",
                      }}
                    >
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="w-5 h-5"
                      />
                      <span className="text-white text-sm">{tech.name}</span>
                    </div>
                  ))}
                </div>

                {/* Description */}
                <p className="text-gray-400 mb-8">{project.description}</p>
              </div>

              {/* Project Links */}
              <div className="flex gap-4">
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#001233] hover:bg-[#001f52] text-white px-4 py-2 rounded-lg transition-colors"
                >
                  <Github size={20} strokeWidth={1.5} />
                  <span>Code</span>
                </a>

                {project.preview && (
                  <a
                    href={project.preview}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#13C287] hover:bg-[#059669] text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    <LinkIcon size={20} />
                    <span>Preview</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
