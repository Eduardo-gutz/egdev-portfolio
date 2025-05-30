'use client'
import { useEffect } from 'react';
import { getSkills } from '@/services/skills';
import { Skill } from '@/interfaces/skill.interface';
import { useState } from 'react';
import Image from 'next/image';

const SkillsBar = () => {
  const [skills, setSkills] = useState<Skill[]>([]);

  useEffect(() => {
    (async () => {
      const skills = await getSkills()
      setSkills(skills.sort((a, b) => a.priority - b.priority))
    })()
  }, [])
  return (
    <div className="w-full overflow-hidden bg-secondary backdrop-blur-sm py-4">
      <div className="flex animate-slide">
        {[...skills, ...skills, ...skills].map((skill, index) => (
          <div
            key={index}
            className="flex items-center gap-2 text-light-accent mx-8 text-xl min-w-fit"
          >
            <Image
              src={skill.image}
              alt={skill.name}
              width={24}
              height={24}
              className="object-contain group-hover:brightness-110"
            />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsBar; 