"use client"
import React, { useEffect, useState } from 'react';
import Card from './Card';
import { getJobs } from '@/services/skills';
import { Job } from '@/interfaces/job.interface';
import { Timestamp } from 'firebase/firestore';

const months = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
]

const Experience = () => {
  const [jobs, setJobs] = useState<Job[]>([])

  const formatDate = (date: Timestamp) => {
    const dateObj = date.toDate()
    const day = dateObj.getDate()
    const month = months[dateObj.getMonth()]
    const year = dateObj.getFullYear()
    return `${day} de ${month} de ${year}`
  }

  useEffect(() => {
    (async () => {
      const jobs = await getJobs()
      setJobs(jobs)
    })()
  }, [])

  return (
    <section id="experience" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 max-w-5xl mx-auto">Experiencia Laboral</h2>
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-accent/30"></div>
          <div className="space-y-12">
            {jobs.map((job, index) => (
              <div 
                key={index} 
                className={`relative pl-12 md:pl-0 ${
                  index % 2 === 0 ? 'md:pr-[50%]' : 'md:pl-[50%] md:ml-4'
                }`}
              >
                <div className="absolute left-2.5 md:left-1/2 top-0 w-3 h-3 bg-accent rounded-full transform md:-translate-x-1/2 hover:scale-150 transition-transform">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-primary rounded-full"></div>
                </div>
                <Card>
                  <div className="flex flex-col">
                    <h3 className="text-2xl font-semibold text-white">{job.position.es}</h3>
                    <p className="text-light-accent font-medium mt-1">{job.company}</p>
                    <p className="text-gray-400 text-sm mt-1">{formatDate(job.startAt)} - {job.endAt ? formatDate(job.endAt) : 'Presente'}</p>
                    <p className="text-gray-300 mt-3">{job.description}</p>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 