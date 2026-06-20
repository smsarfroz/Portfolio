const Nav = () => {
  const scrollToSection = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center gap-8 p-4 bg-[#0E0F0E]/80 backdrop-blur-md shadow-md">
      <a
        href="#projects"
        onClick={(e) => {
          e.preventDefault();
          scrollToSection("projects");
        }}
        className="text-gray-400 font-semibold px-4 py-2 rounded hover:text-white transition-colors"
      >
        Projects
      </a>
      <a
        href="#tech-stack"
        onClick={(e) => {
          e.preventDefault();
          scrollToSection("tech-stack");
        }}
        className="text-gray-400 font-semibold px-4 py-2 rounded hover:text-white transition-colors"
      >
        Skills
      </a>
      <a
        href="#contact"
        onClick={(e) => {
          e.preventDefault();
          scrollToSection("contact");
        }}
        className="text-gray-400 font-semibold px-4 py-2 rounded hover:text-white transition-colors"
      >
        Contact
      </a>
    </nav>
  );
};

export default Nav;
