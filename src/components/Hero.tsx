import Image from "next/image";
import SocialLinks from "./SocialLinks";
import SkillsBar from "./SkillsBar";
import Button from './Button';

interface HeroProps {
  name: string;
  lastName: string;
  description: string;
  imagePath: string;
}

const Hero = ({ name, lastName, description, imagePath }: HeroProps) => {
  return (
    <section className="pt-32 pb-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
        <div className="sliding-text text-[30vw] font-bold whitespace-nowrap bg-gradient-to-r text-accent/5 bg-clip-text">
          Fullstack Developer Fullstack Developer
        </div>
      </div>
      <div className="container mx-auto flex flex-col lg:flex-row items-center relative">\
        <div className="lg:w-1/2 flex flex-col justify-center lg:pl-8 xl:pl-16 py-8 relative z-10 mt-8 lg:mt-0 text-center lg:text-left">
          <div className="relative z-10">
            <h1 className="text-6xl xl:text-7xl font-bold">
              <span className="text-accent font-bold">{name}</span>
              <span className="text-text ml-4">{lastName}</span>
            </h1>
            <h2 className="text-xl xl:text-5xl font-semibold mt-2 mb-6 text-accent/90">Desarrollador Fullstack</h2>
          </div>
          <div className="relative z-10 mt-4">
            <p className="text-lg xl:text-xl text-text/80 mb-8 leading-relaxed">{description}</p>
            <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start justify-center lg:justify-start">
              <Button variant="primary">Contact me</Button>
              <Button variant="secondary">Portfolio</Button>
            </div>
          </div>
          <div className="mt-10 relative z-10 flex justify-center lg:justify-start">
            <SocialLinks />
          </div>
        </div>
        <div className="lg:w-1/2 relative z-0 flex justify-center lg:justify-start">
          <div className="aspect-square rounded-3xl overflow-hidden w-xl h-xl">
            <Image
              src={imagePath}
              alt={`${name} ${lastName}`}
              width={700}
              height={700}
              className="object-cover w-full h-full opacity-90"
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <SkillsBar />
      </div>
    </section>
  );
};

export default Hero; 