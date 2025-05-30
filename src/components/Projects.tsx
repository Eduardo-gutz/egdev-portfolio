'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Card from './Card';
import { Project } from '@/interfaces/project.interface';
import { getProjects } from '@/services/skills';

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    (async () => {
      const projects = await getProjects()
      setProjects(projects)
    })()
  }, [])
  return (
    <section id="portfolio" className="container mx-auto px-4 py-16">
      <div className="flex flex-col mb-8 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-white">
          Proyectos
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
        {projects.map((project, index) => {
          const colSpanClass = (index % 5) < 3 ? 'md:col-span-2' : 'md:col-span-3';
          return (
            <div
              key={index}
              className={`${colSpanClass} relative`}
            >
              <Card className="!p-2 min-h-[450px] !overflow-hidden group">
                <div className="relative aspect-video h-3/4 max-w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute bottom-0 left-0 p-6 backdrop-blur-md bg-secondary/50 rounded-2xl">
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-white mb-3 h-0 overflow-hidden group-hover:h-auto !transition-all duration-300">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, toolIndex) => (
                      <span
                        key={toolIndex}
                        className={`px-3 py-1 rounded-full text-sm font-medium bg-light-accent text-primary`}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects; 