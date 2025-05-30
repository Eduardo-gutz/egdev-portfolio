import React from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'; // Íconos de ejemplo
import userInfo from '../../public/userInfojson.json';

const Footer = () => {
  const { email, phone } = userInfo;

  // Enlaces de navegación (similares a Navbar)
  const navLinks = [
    { href: "/", label: "Inicio" },
    { href: "#about", label: "Acerca de mi" },
    { href: "#experience", label: "Experiencia" },
    { href: "#portfolio", label: "Proyectos" },
    { href: "#contact", label: "Contacto" },
  ];

  // Redes sociales (deberás agregar tus enlaces reales aquí)
  const socialLinks = [
    { href: "#", icon: <FaGithub /> },
    { href: "#", icon: <FaLinkedin /> },
    { href: "#", icon: <FaTwitter /> },
  ];

  return (
    <footer className="bg-secondary text-text py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Columna de Contacto */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Contacto</h3>
            <p>Email: {email}</p>
            <p>Teléfono: {phone}</p>
          </div>

          {/* Columna de Enlaces Rápidos */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna de Redes Sociales */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Sígueme</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index} 
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-2xl hover:text-white"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <p className="mt-4 text-sm">
              {/* Aquí puedes agregar más enlaces o información */}
            </p>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Eduardo Gutierrez. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 