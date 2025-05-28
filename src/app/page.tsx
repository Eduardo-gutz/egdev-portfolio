import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  const personalInfo = {
    name: "Eduardo Gutierrez",
    phone: "+58 424-1234567",
    experience: "5+ Años",
    availability: "Disponible"
  };

  const jobs = [
    {
      title: "Desarrollador Full Stack Senior",
      company: "Tech Solutions Inc.",
      period: "2021 - Presente",
      description: "Desarrollo de aplicaciones web escalables utilizando React, Node.js y TypeScript. Liderazgo de equipo y mentoría a desarrolladores junior.",
      achievements: [
        { text: "Liderazgo de equipo exitoso", icon: "trophy" as const },
        { text: "Optimización de rendimiento 50%", icon: "star" as const },
        { text: "Implementación CI/CD", icon: "check" as const }
      ]
    },
    {
      title: "Desarrollador Front-end",
      company: "Digital Agency",
      period: "2019 - 2021",
      description: "Implementación de interfaces de usuario responsivas y optimización del rendimiento de aplicaciones web usando React y Next.js.",
      achievements: [
        { text: "Mejor desarrollador del año", icon: "trophy" as const },
        { text: "Innovación en UX/UI", icon: "star" as const },
        { text: "Reducción de bugs 40%", icon: "check" as const }
      ]
    },
    {
      title: "Desarrollador Web",
      company: "StartUp Innovation",
      period: "2018 - 2019",
      description: "Desarrollo de sitios web y aplicaciones utilizando JavaScript, HTML y CSS. Colaboración en proyectos ágiles con equipos multidisciplinarios.",
      achievements: [
        { text: "Proyecto más exitoso", icon: "trophy" as const },
        { text: "Mejora en tiempo de carga", icon: "star" as const },
        { text: "Migración exitosa", icon: "check" as const }
      ]
    }
  ];

  const projects = [
    {
      title: "Portfolio Personal",
      image: "/projects/portfolio.jpg",
      technologies: [
        { name: "Next.js", color: "bg-black text-white" },
        { name: "TypeScript", color: "bg-blue-600 text-white" },
        { name: "Tailwind", color: "bg-cyan-600 text-white" }
      ],
      description: "Portfolio personal desarrollado con Next.js, TypeScript y Tailwind CSS. Muestra proyectos y habilidades como desarrollador full-stack."
    },
    {
      title: "E-commerce Dashboard",
      image: "/projects/dashboard.jpg",
      technologies: [
        { name: "React", color: "bg-blue-500 text-white" },
        { name: "Node.js", color: "bg-green-600 text-white" },
        { name: "MongoDB", color: "bg-green-700 text-white" }
      ],
      description: "Dashboard de e-commerce desarrollado con React, Node.js y MongoDB. Gestiona inventario, ventas y clientes."
    },
    {
      title: "App de Gestión de Tareas",
      image: "/projects/taskapp.jpg",
      technologies: [
        { name: "Vue.js", color: "bg-emerald-600 text-white" },
        { name: "Firebase", color: "bg-yellow-600 text-white" },
        { name: "Sass", color: "bg-pink-500 text-white" }
      ],
      description: "Aplicación de gestión de tareas desarrollada con Vue.js, Firebase y Sass. Facilita la organización de actividades diarias."
    },
    {
      title: "App de Gestión de Tareas",
      image: "/projects/taskapp.jpg",
      technologies: [
        { name: "Vue.js", color: "bg-emerald-600 text-white" },
        { name: "Firebase", color: "bg-yellow-600 text-white" },
        { name: "Sass", color: "bg-pink-500 text-white" }
      ],
      description: "Aplicación de gestión de tareas desarrollada con Vue.js, Firebase y Sass. Facilita la organización de actividades diarias."
    },
    {
      title: "App de Gestión de Tareas",
      image: "/projects/taskapp.jpg",
      technologies: [
        { name: "Vue.js", color: "bg-emerald-600 text-white" },
        { name: "Firebase", color: "bg-yellow-600 text-white" },
        { name: "Sass", color: "bg-pink-500 text-white" }
      ],
      description: "Aplicación de gestión de tareas desarrollada con Vue.js, Firebase y Sass. Facilita la organización de actividades diarias."
    },
    {
      title: "App de Gestión de Tareas",
      image: "/projects/taskapp.jpg",
      technologies: [
        { name: "Vue.js", color: "bg-emerald-600 text-white" },
        { name: "Firebase", color: "bg-yellow-600 text-white" },
        { name: "Sass", color: "bg-pink-500 text-white" }
      ],
      description: "Aplicación de gestión de tareas desarrollada con Vue.js, Firebase y Sass. Facilita la organización de actividades diarias."
    },
    {
      title: "App de Gestión de Tareas",
      image: "/projects/taskapp.jpg",
      technologies: [
        { name: "Vue.js", color: "bg-emerald-600 text-white" },
        { name: "Firebase", color: "bg-yellow-600 text-white" },
        { name: "Sass", color: "bg-pink-500 text-white" }
      ],
      description: "Aplicación de gestión de tareas desarrollada con Vue.js, Firebase y Sass. Facilita la organización de actividades diarias."
    }
  ];

  return (
    <main className="min-h-screen bg-primary">
      <Navbar />
      <Hero 
        name="Eduardo"
        lastName="Gutierrez"
        description="Mi objetivo es escribir código limpio y mantenible que mejore el proceso de desarrollo y haga que la codificación sea agradable a través de prácticas estructuradas y bien pensadas."
        imagePath="/profile.png"
      />
      <About 
        description="¡Hola! Soy Eduardo Gutierrez, un desarrollador full-stack con experiencia en crear soluciones web escalables. Comprometido con el aprendizaje continuo, priorizo el éxito del proyecto y la satisfacción del cliente."
        personalInfo={personalInfo}
      />
      <Skills />
      <Experience jobs={jobs} />
      <Projects projects={projects} />
      <Contact />
    </main>
  );
}
