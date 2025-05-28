import { FaReact, FaNodeJs, FaPython, FaDatabase } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiNextdotjs } from 'react-icons/si';

const skills = [
  { name: 'React', icon: <FaReact /> },
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'Python', icon: <FaPython /> },
  { name: 'TypeScript', icon: <SiTypescript /> },
  { name: 'TailwindCSS', icon: <SiTailwindcss /> },
  { name: 'Next.js', icon: <SiNextdotjs /> },
  { name: 'SQL', icon: <FaDatabase /> },
];

const SkillsBar = () => {
  return (
    <div className="w-full overflow-hidden bg-secondary backdrop-blur-sm py-4">
      <div className="flex animate-slide">
        {[...skills, ...skills].map((skill, index) => (
          <div
            key={index}
            className="flex items-center gap-2 text-light-accent mx-8 text-xl"
          >
            <span className="text-2xl">{skill.icon}</span>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsBar; 