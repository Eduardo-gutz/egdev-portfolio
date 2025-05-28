import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed w-full top-0 z-50 bg-secondary/25 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-white">EG</div>
        <div className="flex gap-8">
          <a href="#" className="text-text hover:text-white">Home</a>
          <a href="#about" className="text-text hover:text-white">About</a>
          <a href="#projects" className="text-text hover:text-white">Projects</a>
          <a href="#contact" className="text-text hover:text-white">Contact</a>
        </div>
        <button className="bg-secondary text-white px-4 py-2 rounded-full hover:bg-accent">
          Light Up the Talk
        </button>
      </div>
    </nav>
  );
};

export default Navbar; 