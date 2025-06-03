'use client'
import React, { useState, useMemo, useEffect } from 'react';
import Image from 'next/image';
import Popover from '@/components/Popover';
import ReusableBackground from './ReusableBackground';
import { getSkills } from '@/services/skills';
import { Skill } from '@/interfaces/skill.interface';


const Skills = () => {
  const [openPopover, setOpenPopover] = useState<string | null>(null);
  const [skills, setSkills] = useState<Skill[]>([]);

  const getPositions = (index: number) => {
    const itemsPerRow = window.innerWidth < 768 ? 5 : window.innerWidth < 1024 ? 7 : 9;

    const row = Math.floor(index / itemsPerRow);
    const itemInRow = index % itemsPerRow;

    // Ajustamos el espaciado horizontal según el tamaño de la pantalla
    const horizontalSpacing = window.innerWidth < 768 ? 80 : window.innerWidth < 1024 ? 100 : 120;

    let x = ((itemInRow - (itemsPerRow - 1) / 2.2) * horizontalSpacing);
    let y = row;

    if (row % 2 === 1) {
      x += horizontalSpacing / 1.5;
    }

    x += Math.sin(itemInRow * 0.5) * 5;
    y += Math.sin(itemInRow * 0.8) * (window.innerWidth < 768 ? 50 : window.innerWidth < 1024 ? 60 : 75);

    const floatingAnimation = `floating-${index % 4}`;

    return {
      left: `calc(50% + ${x}px)`,
      top: `calc(35% + ${y}px)`,
      transform: `translate(-50%, -50%)`,
      animation: `${floatingAnimation} 4s ease-in-out infinite`,
      transition: 'all 0.3s ease-out',
      zIndex: row + 1,
    };
  };

  // Generamos todas las posiciones de una vez para mantener consistencia
  const positions = useMemo(() => {
    return skills.slice(0, 20).sort((a, b) => a.priority - b.priority).map((_, index) => getPositions(index));
  }, [skills]);

  useEffect(() => {
    (async () => {
      const skills = await getSkills()
      setSkills(skills.sort((a, b) => a.priority - b.priority))
    })()
  }, [])

  // Añadimos un efecto para recalcular las posiciones cuando cambia el tamaño de la ventana
  useEffect(() => {
    const handleResize = () => {
      setSkills(prevSkills => [...prevSkills]);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="py-10 md:py-20 bg-primary relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-16 text-white max-w-5xl mx-auto text-center">
          Habilidades & Tecnologías
        </h2>

        <div className="relative">
          <ReusableBackground />
          <div className="relative w-full max-w-[900px] h-[300px] md:h-[400px] mx-auto">
            {typeof window !== 'undefined' &&
              <div className="absolute inset-0">
                {skills.slice(0, window.innerWidth < 768 ? 12 : window.innerWidth < 1024 ? 15 : 18).map((skill, index) => (
                  <Popover
                    key={`${skill.name}-${index}`}
                    open={openPopover === `${skill.name}-${index}`}
                    useHover={true}
                    onClose={() => setOpenPopover(null)}
                    content={
                      <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-3 border border-white/20">
                        <p className="font-semibold text-gray-900">{skill.name}</p>
                        <p className="text-sm text-gray-600">{skill.description.es}</p>
                      </div>
                    }
                  >
                    <div
                      className="absolute w-10 h-10 md:w-14 md:h-14 bg-white/5 rounded-2xl p-2 md:p-2.5 backdrop-blur-sm hover:scale-110 transition-all duration-300 cursor-pointer hover:bg-white/10 border border-white/10 hover:border-white/30 group hover:z-10"
                      style={positions[index]}
                      onClick={() => setOpenPopover(`${skill.name}-${index}`)}
                    >
                      <div className="relative w-full h-full">
                        <Image
                          src={skill.image}
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
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 