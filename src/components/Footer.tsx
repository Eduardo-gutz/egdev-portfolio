import React from 'react';
import Link from 'next/link';
import userInfo from '../../public/userInfojson.json';
import { SocialLinks } from './SocialLinks';

const Footer = () => {
  const { email, phone } = userInfo;

  const navLinks = [
    { href: "/", label: "Inicio" },
    { href: "#about", label: "Acerca de mi" },
    { href: "#experience", label: "Experiencia" },
    { href: "#portfolio", label: "Proyectos" },
    { href: "#contact", label: "Contacto" },
  ];

  return (
    <footer className="bg-secondary text-text py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Contacto</h3>
            <p>Email: {email}</p>
            <p>Teléfono: {phone}</p>
          </div>
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
          <div>
            <SocialLinks />
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