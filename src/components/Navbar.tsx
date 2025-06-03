import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-secondary/25 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-white">Eduardo Gutierrez</div>
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:relative top-full md:top-auto left-0 md:left-auto w-full md:w-auto bg-secondary/95 md:bg-transparent p-4 md:p-0 gap-4 md:gap-8`}>
          <Link href="/" className="text-text hover:text-white">Inicio</Link>
          <Link href="#about" className="text-text hover:text-white">Acerca de mi</Link>
          <Link href="#experience" className="text-text hover:text-white">Experiencia</Link>
          <Link href="#portfolio" className="text-text hover:text-white">Proyectos</Link>
          <Link href="#contact" className="text-text hover:text-white">Contacto</Link>
        </div>
        <a
          href="https://firebasestorage.googleapis.com/v0/b/eduardo-gutierrez-portfolio.appspot.com/o/Eduardo_Guti%C3%A9rrez.pdf?alt=media&token=8e6bdec0-a8e9-4a9d-9e2f-4ac14b604dcb"
          className="hidden md:block bg-secondary text-white px-4 py-2 rounded-full hover:bg-accent"
          target="_blank"
          rel="noopener noreferrer"
        >
          Descargar CV
        </a>
      </div>
    </nav>
  );
};

export default Navbar; 