import React from 'react';
import { FaReact } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';

function Footer() {
  return (
    <footer className="bg-black text-white py-6">
      <div className="max-w-6xl mx-auto flex items-center justify-center space-x-4">
        <span className="font-bold text-center">Made with</span>
        <FaReact
          size={30}
          className="text-blue-400 hover:scale-110 transition-transform duration-300"
        />
        <SiTailwindcss
          size={30}
          className="text-teal-400 hover:scale-110 transition-transform duration-300"
        />
      </div>
    </footer>
  );
}

export default Footer;
