'use client'
import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Popover from '@/components/Popover';
import ReusableBackground from './ReusableBackground';

interface Skill {
  name: string;
  icon: string;
  description: string;
}

const skills: Skill[] = [
  {
    name: "React",
    icon: "/skills/react.svg",
    description: "Biblioteca JavaScript para construir interfaces de usuario interactivas"
  },
  {
    name: "Next.js",
    icon: "/skills/nextjs.svg",
    description: "Framework de React para aplicaciones web modernas"
  },
  {
    name: "TypeScript",
    icon: "/skills/typescript.svg",
    description: "JavaScript con sintaxis de tipado estático"
  },
  {
    name: "Node.js",
    icon: "/skills/nodejs.svg",
    description: "Entorno de ejecución para JavaScript del lado del servidor"
  },
  {
    name: "TailwindCSS",
    icon: "/skills/tailwind.svg",
    description: "Framework CSS utility-first para diseño rápido"
  },
  {
    name: "PostgreSQL",
    icon: "/skills/postgresql.svg",
    description: "Sistema de gestión de bases de datos relacional"
  },
  {
    name: "React",
    icon: "/skills/react.svg",
    description: "Biblioteca JavaScript para construir interfaces de usuario interactivas"
  },
  {
    name: "Next.js",
    icon: "/skills/nextjs.svg",
    description: "Framework de React para aplicaciones web modernas"
  },
  {
    name: "TypeScript",
    icon: "/skills/typescript.svg",
    description: "JavaScript con sintaxis de tipado estático"
  },
  {
    name: "Node.js",
    icon: "/skills/nodejs.svg",
    description: "Entorno de ejecución para JavaScript del lado del servidor"
  },
  {
    name: "TailwindCSS",
    icon: "/skills/tailwind.svg",
    description: "Framework CSS utility-first para diseño rápido"
  },
  {
    name: "PostgreSQL",
    icon: "/skills/postgresql.svg",
    description: "Sistema de gestión de bases de datos relacional"
  },
  {
    name: "React",
    icon: "/skills/react.svg",
    description: "Biblioteca JavaScript para construir interfaces de usuario interactivas"
  },
  {
    name: "Next.js",
    icon: "/skills/nextjs.svg",
    description: "Framework de React para aplicaciones web modernas"
  },
  {
    name: "TypeScript",
    icon: "/skills/typescript.svg",
    description: "JavaScript con sintaxis de tipado estático"
  },
  {
    name: "Node.js",
    icon: "/skills/nodejs.svg",
    description: "Entorno de ejecución para JavaScript del lado del servidor"
  },
  {
    name: "TailwindCSS",
    icon: "/skills/tailwind.svg",
    description: "Framework CSS utility-first para diseño rápido"
  },
  {
    name: "PostgreSQL",
    icon: "/skills/postgresql.svg",
    description: "Sistema de gestión de bases de datos relacional"
  }
];

const Skills = () => {
  const [openPopover, setOpenPopover] = useState<string | null>(null);

  const getPositions = (index: number) => {
    const itemsPerRow = 10; // Número máximo de items por fila
    
    // Calculamos la fila y la posición en la fila
    const row = Math.floor(index / itemsPerRow);
    const itemInRow = index % itemsPerRow;
    
    // Ajustamos el espaciado horizontal y vertical
    const horizontalSpacing = 120;
    
    // Calculamos la posición base
    let x = ((itemInRow - (itemsPerRow - 1) / 2.2) * horizontalSpacing);
    let y = row;
    
    // Añadimos un offset alternado para cada fila para crear un patrón más dinámico
    if (row % 2 === 1) {
      x += horizontalSpacing / 1.5;
    }
    
    // Añadimos una ligera curva sinusoidal para cada fila
    x += Math.sin(itemInRow * 0.5) * 5;
    y += Math.sin(itemInRow * 0.8) * 75;
    
    // Animaciones personalizadas
    const floatingAnimation = `floating-${index % 4}`;
    
    return {
      left: `calc(50% + ${x}px)`,
      top: `calc(35% + ${y}px)`, // Ajustamos el centro vertical para mejor visualización
      transform: `translate(-50%, -50%)`,
      animation: `${floatingAnimation} 4s ease-in-out infinite`,
      transition: 'all 0.3s ease-out',
      zIndex: row + 1,
    };
  };

  // Generamos todas las posiciones de una vez para mantener consistencia
  const positions = useMemo(() => {
    return skills.slice(0, 18).map((_, index) => getPositions(index));
  }, []);

  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 text-white max-w-5xl mx-auto">
          Habilidades & Tecnologías
        </h2>
        
        <div className="relative">
          {/* Efectos de fondo mejorados */}
          <ReusableBackground />
          
          {/* Contenedor de skills */}
          <div className="relative w-[900px] h-[400px] mx-auto">
            {/* Skills */}
            <div className="absolute inset-0">
              {skills.slice(0, 18).map((skill, index) => (
                <Popover
                  key={`${skill.name}-${index}`}
                  open={openPopover === `${skill.name}-${index}`}
                  useHover={true}
                  onClose={() => setOpenPopover(null)}
                  content={
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-3 border border-white/20">
                      <p className="font-semibold text-gray-900">{skill.name}</p>
                      <p className="text-sm text-gray-600">{skill.description}</p>
                    </div>
                  }
                >
                  <div
                    className="absolute w-14 h-14 bg-white/5 rounded-2xl p-2.5 backdrop-blur-sm hover:scale-110 transition-all duration-300 cursor-pointer hover:bg-white/10 border border-white/10 hover:border-white/30 group hover:z-10"
                    style={positions[index]}
                    onClick={() => setOpenPopover(`${skill.name}-${index}`)}
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={skill.icon}
                        alt={skill.name}
                        width={56}
                        height={56}
                        className="w-full h-full object-contain group-hover:brightness-110"
                      />
                    </div>
                  </div>
                </Popover>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 