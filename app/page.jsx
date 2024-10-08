
'use client'
import { useState } from 'react'
import { Button, buttonVariants } from "./components/ui/button"
import { Card, CardContent } from "./components/ui/card"
import Image from 'next/image'
import Link from 'next/link'

export default function Component() {
  const [currentProject, setCurrentProject] = useState(0)

  const projects = [
    {
      image: "/Opera Instantánea_2024-09-25_041115_localhost.png",
      title: "Shop Page",
      description: "He desarrollado una web con Next.js, que está desplegada en Vercel. La aplicación cuenta con una funcionalidad CRUD (Create, Read, Update, Delete) completa, con MySQL como base de datos, alojada en Amazon Web Services (AWS). El diseño es responsive y utiliza Tailwind CSS para ofrecer una interfaz moderna y fácil de usar. Además, la aplicación incluye funciones para crear cuentas y autenticarse mediante credenciales, así como opciones de inicio de sesión social a través de Facebook y Google, implementadas con NextAuth.",
      technologies: ["HTML","CSS","Javascript","React","Next JS","Tailwind.css", "Node.js","Express.js", "MySQL", "Amazon Web Services","Vercel","Next Auth"],
      link: "https://shopest-lyart.vercel.app/"
    },
    {
      image: "/Opera Instantánea_2024-07-07_195447_newspage-v2.vercel.app.png",
      title: "News Page",
      description: " He desarrollado un sitio web de noticias utilizando la API de noticias integrada con Next.js para el renderizado del lado del servidor y el contenido dinámico. El diseño se ha implementado con Tailwind CSS, lo que proporciona una interfaz de usuario moderna y responsive. La aplicación cuenta con todas las funcionalidades CRUD (crear, leer, actualizar y eliminar) con MongoDB como base de datos para el almacenamiento de datos. Además, he utilizado NextAuth para la autenticación segura de usuarios, lo que permite a los usuarios crear y gestionar sus cuentas sin problemas.",
      technologies: ["HTML","CSS","Javascript","React","Next JS","Tailwind.css", "Node.js","express.js", "MongoDB","Amazon Web Services","Vercel","Next Auth"],
      link : "https://newspage-v2.vercel.app/"
    },
    {
      image: "/Screenshot_20240630-201245.png",
      title: "Finance App",
      description: "Aplicación de Finanzas hecha con React Native, Expo. IOS y Android.",
      technologies: ["React Native", "Expo", "Tailwind.css"],
      link:"app siendo testeada por Google"
    }
  ]

  const skills = [
    { name: "JavaScript", level: 90 },
    { name: "React", level: 90 },
    { name: "React Native", level: 80 },
    { name: "NextJS", level: 80 },
    { name: "HTML/CSS", level: 95 },
    { name: "Node.js", level: 80 },
    { name: "MySQL", level: 80 },
    { name: "MongoDB", level: 70 },
    { name: "Amazon Web Services", level: 80 },
  ]

  return (
    <div className=" mx-auto min-h-screen bg-background text-foreground">
      
      <main className="container mx-auto px-4 py-8">
        {/* Projects Carousel */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">My Projects</h2>

          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="relative">
                <img
                  src={projects[currentProject].image}
                  alt={projects[currentProject].title}
                  className="w-full h-[800px] object-cover"
                />
                <Button
                  variant="ghost"
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-slate-300" 
                  onClick={() => setCurrentProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1))}
                >
                  ←
                </Button>
                <Button
                  variant="ghost"
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-slate-300"
                  onClick={() => setCurrentProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1))}
                >
                  →
                </Button>
              </div>
              <div className="p-6">
                <div className='flex flex-row space-x-12 justify-center'>
                <h3 className="text-2xl font-semibold mb-2">{projects[currentProject].title}</h3>
                { projects[currentProject].title != "Finance App" 
                ?
                  <div className=' mb-4 -mt-2 bg-purple-600 p-2 border-l-2 border-b-2 border-slate-800 dark:border-slate-300 rounded-lg text-center  '>
                  <Link href={projects[currentProject].link} className=' text-slate-300  font-bold text-lg'>Visitar página web</Link>
                  </div>
                : 
                  <Button>App siendo probada por PlayStore, aún no lanzada.</Button>
                }
                </div>
                <p className="text-muted-foreground mb-4">{projects[currentProject].description}</p>
                <div className="flex flex-wrap gap-2">
                  {projects[currentProject].technologies.map((tech) => (
                    <span key={tech} className="bg-primary/10 text-primary px-2 py-1 rounded text-sm">
                      {tech}
                    </span>

                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* About Me */}

        <div id='me' className="flex flex-col items-center justify-between lg:flex-row py-16 ml-8">
             <div >
      
                 <div className="lg:max-w-xl lg:pr-5 relative z-40">
                     <p className="flex text-sm uppercase text-g1 mb-40  ">
                          
                         About Me
                     </p>
                     <h2 className="mb-6 mx-auto max-w-lg text-5xl font-light leading-snug tracking-tight text-g1 sm:text-7xl sm:leading-snug">
                         Alan Compay
                         <span className="my-1 inline-block border-b-8 border-g4 px-4 font-bold text-g4 animate__animated animate__flash">FullStack Developer</span>
                     </h2>
                     <p className="text-base text-gray-800 dark:text-slate-300">
                     Soy un apasionado programador Full-Stack con experiencia en el desarrollo de proyectos web y móviles utilizando una variedad de tecnologías modernas. Mi enfoque se centra en la creación de aplicaciones robustas, funcionales y atractivas para mejorar la experiencia del usuario.

                      Durante mi carrera, he trabajado en diversos proyectos de páginas web donde he utilizado Javascript, React, Next JS y Tailwind CSS para el Frontend, así como Node JS, Express JS, MySQL y Mongo DB para el Backend. Esta combinación de tecnologías me ha permitido desarrollar aplicaciones web escalables y eficientes que cumplen con los estándares más altos de calidad.

                      Además, he integrado NextAuth para la autenticación de cuentas en mis proyectos, garantizando la seguridad y la privacidad de los usuarios. Recientemente, he incursionado en el desarrollo móvil y he creado una aplicación con React Native que actualmente está en proceso de prueba para su lanzamiento en la Play Store.
                     </p>
                     
                 </div>
                 
                
             </div>
             <div className="relative lg:ml-32 lg:block lg:w-1/2">
                 <svg xmlns="http://www.w3.org/2000/svg" className=" bg-purple-800 my-6 mx-auto h-10 w-10 animate-bounce rounded-full p-2 " fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M16 17l-4 4m0 0l-4-4m4 4V3"></path>
                 </svg>
                 <div className="abg-orange-400 mx-auto w-fit overflow-hidden rounded-[12rem] rounded-br-none rounded-tl-none  ">
                      <Image alt="myphoto" width={600} height={600} src="/vjgsjl0zglf7ceed6qi6.jpg"/>
                 </div>
             </div>

         </div>

        {/* Skills */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Skills</h2>
          <div className="grid gap-4">
            {skills.map((skill) => (
              <div key={skill.name} className="space-y-2 border-b-2">
                <div className="flex justify-between">
                  <span className="font-medium">{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="h-2 bg-muted rounded overflow-hidden">
                  <div
                    className="h-full bg-primary"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}


