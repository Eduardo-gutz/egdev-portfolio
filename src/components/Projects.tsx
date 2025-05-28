'use client';

import React from 'react';
import Image from 'next/image';
import Card from './Card';
interface Technology {
	name: string;
	color: string;
}

interface Project {
	title: string;
	description: string;
	image: string;
	technologies: Technology[];
}

interface ProjectsProps {
	projects: Project[];
}

const Projects = ({ projects }: ProjectsProps) => {
	return (
		<section id="projects" className="container mx-auto px-4 py-16">
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
							className={colSpanClass}
						>
							<Card>
								<div className="relative aspect-video w-full">
									<Image
										src={project.image}
										alt={project.title}
										fill
										className="object-cover"
									/>
								</div>
								<div className="p-6">
									<h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
									<p className="text-text-secondary mb-3">{project.description}</p>
									<div className="flex flex-wrap gap-2">
										{project.technologies.map((tech, techIndex) => (
											<span
												key={techIndex}
												className={`px-3 py-1 rounded-full text-sm font-medium bg-light-accent text-primary`}
											>
												{tech.name}
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