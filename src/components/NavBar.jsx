import React, { useState } from "react";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav className="bg-primary text-white p-4 md:p-8">
      <div className="container mx-auto flex justify-between items-center">
        <span className="text-xl font-bold">KNMR'S DEV</span>
        <div className="md:hidden">
          <button className="text-white focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        <ul className={`hidden md:flex flex-col md:flex-row md:space-x-16 ${isOpen ? "flex" : "hidden"}`}>
          <li><button onClick={() => scrollToSection("home")}>Home</button></li>
          <li><button onClick={() => scrollToSection("about")}>About</button></li>
          <li><button onClick={() => scrollToSection("projects")}>Projects</button></li>
          <li><button onClick={() => scrollToSection("certificates")}>Certificates</button></li>
          <li><button onClick={() => scrollToSection("contact")}>Contact</button></li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
