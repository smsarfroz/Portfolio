import { Mail, Github, Linkedin, FileUser } from "lucide-react";

const Contact = () => {
  return (
    <div id="contact" className="w-full max-w-7xl mx-auto px-8 py-20 md:py-24">
      <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 text-center">
        <span className="text-[#059669]">Contact</span> Me
      </h2>
      <p className="text-gray-400 text-xl text-center max-w-2xl mx-auto mb-16">
        Feel free to reach out if you're looking for a developer, have a
        question, or just want to connect.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {/* Email */}
        <div className="bg-[#0a1a3a]/50 rounded-xl p-6 flex flex-col items-center transition-all duration-300 hover:scale-105 hover:shadow-xl">
          <a
            href="mailto:ssarfroz@gmail.com"
            aria-label="Email"
            className="bg-[#059669] p-4 rounded-full mb-4 text-white"
          >
            <Mail size={30} />
          </a>
          <div className="text-center">
            <h3 className="text-xl font-bold text-white mb-2">Email</h3>
            <p className="text-gray-400">
              <span>ssarfroz</span>
              <span>@gmail.com</span>
            </p>
          </div>
        </div>

        {/* CV */}
        <div className="bg-[#0a1a3a]/50 rounded-xl p-6 flex flex-col items-center transition-all duration-300 hover:scale-105 hover:shadow-xl">
          <a
            target="_blank"
            rel="noopener noreferrer"
            aria-label="CV"
            className="bg-[#059669] p-4 rounded-full mb-4 text-white"
          >
            <FileUser size={30} />
          </a>
          <div className="text-center">
            <h3 className="text-xl font-bold text-white mb-2">CV</h3>
            <p className="text-gray-400">Download Resume</p>
          </div>
        </div>

        {/* GitHub */}
        <div className="bg-[#0a1a3a]/50 rounded-xl p-6 flex flex-col items-center transition-all duration-300 hover:scale-105 hover:shadow-xl">
          <a
            href="https://github.com/smsarfroz"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github"
            className="bg-[#059669] p-4 rounded-full mb-4 text-white"
          >
            <Github size={30} />
          </a>
          <div className="text-center">
            <h3 className="text-xl font-bold text-white mb-2">GitHub</h3>
            <p className="text-gray-400">smsarfroz</p>
          </div>
        </div>

        {/* LinkedIn */}
        <div className="bg-[#0a1a3a]/50 rounded-xl p-6 flex flex-col items-center transition-all duration-300 hover:scale-105 hover:shadow-xl">
          <a
            href="https://www.linkedin.com/in/Sarfroz-Sheikh/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="bg-[#059669] p-4 rounded-full mb-4 text-white"
          >
            <Linkedin size={30} strokeWidth={1.5} />
          </a>
          <div className="text-center">
            <h3 className="text-xl font-bold text-white mb-2">LinkedIn</h3>
            <p className="text-gray-400">Sarfroz Sheikh</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
