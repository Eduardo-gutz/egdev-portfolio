import Image from "next/image";
import SocialLinks from "./SocialLinks";
import SkillsBar from "./SkillsBar";
import Button from './Button';
import Link from "next/link";

interface HeroProps {
  name: string;
  lastName: string;
  description: string;
  imagePath: string;
  position: string;
}

const Hero = ({ name, lastName, description, imagePath, position }: HeroProps) => {
  return (
    <section className="pt-24 md:pt-32 pb-12 md:pb-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
        <div className="sliding-text text-[400px] md:text-[500px] font-bold whitespace-nowrap bg-gradient-to-r text-accent/5 bg-clip-text">
          {position} {name} {lastName}
        </div>
      </div>
      <div className="container mx-auto flex flex-col lg:flex-row items-center relative">
        <div className="w-full lg:w-1/2 flex flex-col justify-center lg:pl-8 xl:pl-16 py-4 md:py-8 relative z-10 mt-4 md:mt-8 lg:mt-0 text-center lg:text-left">
          <div className="relative z-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold">
              <span className="text-accent font-bold">{name}</span>
              <span className="text-text ml-2 md:ml-4">{lastName}</span>
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl xl:text-5xl font-semibold mt-2 mb-4 md:mb-6 text-accent/90">{position}</h2>
          </div>
          <div className="relative z-10 mt-2 md:mt-4">
            <p className="text-base sm:text-lg xl:text-xl text-text/80 mb-6 md:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">{description}</p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 items-center sm:items-start justify-center lg:justify-start">
              <Link href="#contact" className="w-full sm:w-auto">
                <Button variant="primary" className="w-full sm:w-auto">Contáctame</Button>
              </Link>
              <Link href="#portfolio" className="w-full sm:w-auto">
                <Button variant="secondary" className="w-full sm:w-auto">Portafolio</Button>
              </Link>
            </div>
          </div>
          <div className="mt-6 md:mt-10 relative z-10 flex justify-center lg:justify-start">
            <SocialLinks />
          </div>
        </div>
        <div className="w-full lg:w-1/2 relative z-0 flex justify-center lg:justify-start mt-8 lg:mt-0">
          <div className="aspect-square rounded-2xl md:rounded-3xl overflow-hidden w-[280px] sm:w-[350px] md:w-[450px] lg:w-[500px] xl:w-[700px]">
            <Image
              src={imagePath}
              alt={`${name} ${lastName}`}
              width={700}
              height={700}
              className="object-cover w-full h-full opacity-90"
              priority
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