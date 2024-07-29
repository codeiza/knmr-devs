// Footer.jsx
import React from "react";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa"; // Import icons from Font Awesome

function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Social media icons */}
        <div className="flex">
          {/* Facebook icon */}
          <a href="https://www.facebook.com/xkenCDD" target="_blank" rel="noopener noreferrer" className="mr-4">
            <FaFacebook size={24} />
          </a>
          {/* LinkedIn icon */}
          <a href="https://www.linkedin.com/in/ken-mar-lisondra-b164b4306/" target="_blank" rel="noopener noreferrer" className="mr-4">
            <FaLinkedin size={24} />
          </a>
          {/* Instagram icon */}
          <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={24} />
          </a>
        </div>
        {/* Copyright text */}
        <div>
          <p>&copy; 2024 © My Portfolio. Developed by KNRM</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
