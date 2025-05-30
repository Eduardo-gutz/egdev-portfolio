"use client"

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import userInfo from "../../public/userInfojson.json";

export default function Home() {
  const { name, lastName, description, initAsDev, imagePath, about, experience, phone, email, position } = userInfo;
  return (
    <main className="min-h-screen bg-primary scroll-smooth">
      <Navbar />
      <Hero 
        name={name}
        lastName={lastName}
        description={description}
        imagePath={imagePath}
        position={position}
        />
      <About 
        description={about}
        experience={experience}
        phone={phone}
        email={email}
        initAsDev={initAsDev}
      />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
