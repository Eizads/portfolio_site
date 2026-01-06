"use client";

import Image from "next/image";
import ContactButton from "@/components/common/ContactButton";
import ProjectButton from "@/components/common/ProjectButton";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CircleIcon, ExternalLinkIcon, GithubIcon } from "lucide-react";

export default function Home() {
  const projects = [
    {
      id: 1,
      title: "BuildFlow App",
      subtitle:
        "A community platform for developers to share and discover projects with voting and admin moderation.",
      description:
        "BuildFlow is a community-driven platform where developers and creators can share their projects with the world. Users can submit their projects, browse a curated collection of featured products, and vote on their favorites. The platform features an admin approval system to ensure quality submissions, an explore page to discover new projects, and detailed product pages with voting functionality. Built with modern web technologies including Next.js, TypeScript, and Clerk authentication, BuildFlow showcases responsive design, real-time voting with optimistic UI updates, and seamless user experience.",
      image: "/buildflow-app.png",
      link: "https://buildflow-app-five.vercel.app",
      source: "https://github.com/Eizads/buildflow-app",
      tech: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Shadcn UI",
        "Drizzle ORM",
        "Neon",
        "Clerk",
        "Zod",
      ],
    },
    {
      id: 2,
      title: "React Stocks Dashboard",
      subtitle:
        "Real-time stock market dashboard with live data streaming, interactive charts, and search functionality.",
      description:
        "A Next.js-based stock market dashboard built with React 19, TypeScript, and Tailwind CSS. Features include real-time price streaming via WebSocket connections with debounced updates, interactive charts using Chart.js and react-chartjs-2 with time-series visualization, comprehensive stock search with debounced API calls, and a watchlist system with localStorage persistence. The application includes a responsive sidebar navigation, stock detail pages with intraday data, market status indicators, and custom React hooks for WebSocket management and watchlist state. Built with Next.js App Router, Shadcn UI components, and demonstrates modern React patterns including custom hooks, server-side API routes, and client-side state management.",
      image: "/project-1.png",
      link: "https://sogol.dev/react-stocks-dashboard",
      source: "https://github.com/Eizads/react_stocks_dashboard",
      tech: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Shadcn UI",
        "Chart.js",
        "react-chartjs-2",
      ],
    },
    {
      id: 3,
      title: "Vue3 Stocks Dashboard",
      subtitle:
        "Vue3-based financial dashboard featuring real-time stock data, interactive charts, and responsive design.",
      description:
        "A Vue3-based stock market dashboard built with Quasar Framework and Pinia for state management. Features include real-time price streaming via WebSocket connections, interactive charts using Chart.js and vue-chart-3, comprehensive stock search with debounced input, personalized watchlist functionality, and detailed stock views with intraday trading data. The application uses Vue-i18n for internationalization, implements data compression with LZString for efficient local storage, and includes market status indicators. Built with Vue 3 Composition API, it demonstrates reactive data binding, component composition, and responsive design principles.",
      image: "/project-2.png",
      link: "https://sogol.dev/vue-stocks-dashboard",
      source: "https://github.com/Eizads/stocks_dashboard",
      tech: ["Vue3", "Quasar", "Pinia", "Vue-chart-3", "Chart.js"],
    },
  ];

  return (
    <main className="min-h-screen bg-dark-primary text-white overflow-x-hidden">
      {/* Hero Section */}
      <section
        className="min-h-screen flex flex-col justify-between items-center px-4 sm:px-6 lg:px-8"
        id="about"
      >
        <div className="flex-1 flex items-center">
          <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-start" data-aos="fade-up">
              <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-clip-text  text-secondary">
                Front-End Developer
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 mb-8">
                Crafting beautiful and responsive web experiences
              </p>

              <div className="flex gap-4 mt-8">
                <ProjectButton />
                {/* <ContactButton /> */}
              </div>
            </div>
            <div className="order-first md:order-last">
              <h2
                className="text-xl sm:text-xl font-bold mb-8 text-white mt-[100px] md:mt-0"
                data-aos="fade-left"
              >
                {" "}
                Hi, I&apos;m Sogol,
              </h2>

              <p
                className="text-dark-accent text-lg leading-relaxed mb-6"
                data-aos="fade-left"
                data-aos-delay="200"
              >
                I&apos;m a front-end developer based in Toronto, with a keen eye
                for design and a love for crafting intuitive, accessible user
                experiences. I specialize in modern web technologies and
                frameworks, turning complex problems into simple, beautiful
                solutions.
              </p>
              <p
                className="text-dark-accent text-lg leading-relaxed mb-6"
                data-aos="fade-left"
                data-aos-delay="300"
              >
                Previously, I&apos;ve developed custom learning experience
                courses for companies like Apple, Loblaws, and Citibank,
                integrating them seamlessly into their LMS platforms.
              </p>
              <p
                className="text-dark-accent text-lg leading-relaxed"
                data-aos="fade-left"
                data-aos-delay="400"
              >
                Outside of coding, I enjoy spending time with my family,
                friends, and traveling.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full max-w-6xl my-10 flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="text-white text-lg leading-relaxed flex items-center gap-2">
            You can also <span className="text-primary ">find me here:</span>
            <div className="flex gap-4">
              <a
                href="https://github.com/Eizads"
                target="_blank"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/sogoleizadshenass/"
                target="_blank"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="flex-1"></div>
          <p className="text-white text-lg leading-relaxed">
            Explore my{" "}
            <a
              href="https://github.com/Eizads/TOOLS_I_USE"
              target="_blank"
              className="text-primary animate-pulse"
            >
              Tech Stack
            </a>
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-secondary"
        id="projects"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-3xl sm:text-4xl font-bold mb-6">
            {" "}
            My <span className="text-primary">Projects</span>
          </h2>
          <p className="text-dark-accent text-lg mb-8 text-center">
            Explore my projects below. Click on the project to view more
            details.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {projects.map((project) => (
              <Dialog key={project.id}>
                <DialogTrigger asChild>
                  <Card className="group cursor-pointer hover:shadow-lg transition-shadow bg-transparent border-muted-foreground/30 min-h-[240px] sm:min-h-[350px] xl:min-h-[275px] text-white hover:scale-105 card-hover transition-all duration-300 hover:border-primary/50 flex flex-col justify-between">
                    <CardHeader className="gap-2">
                      <CardTitle className="text-2xl mb-2">
                        {project.title}
                      </CardTitle>

                      <div className="w-0 h-[2px] bg-primary mb-2 transition-all duration-500 ease-out group-hover:w-full"></div>

                      <CardDescription className="">
                        {project.subtitle}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {project.tech
                          .slice(
                            0,
                            project.tech.length > 3 ? 3 : project.tech.length
                          )
                          .concat(
                            project.tech.length > 3
                              ? `+ ${project.tech.length - 3} more`
                              : ""
                          )
                          .map((tech) => (
                            <Badge
                              key={tech}
                              variant="outline"
                              className="text-primary bg-primary/10 border-primary/30 "
                            >
                              {tech}
                            </Badge>
                          ))}
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="bg-dark-button text-white border-muted-foreground/30 p-0 overflow-y-auto overflow-x-hidden max-h-[90vh] md:max-w-2xl sm:max-w-xl w-full">
                  {/* Image at the top */}
                  <div className="relative w-full h-44 sm:h-64 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover rounded-t-lg object-top"
                    />
                  </div>
                  {/* Header section */}
                  <DialogHeader className="p-4 pb-2 break-words overflow-x-hidden">
                    <DialogTitle className="text-xl sm:text-2xl break-words overflow-wrap-anywhere">
                      {project.title}
                    </DialogTitle>
                    <div className="w-full h-[2px] bg-primary my-2 animate-expand-horizontal"></div>
                    <DialogDescription className="text-dark-accent break-words text-left text-sm sm:text-base">
                      {project.description}
                    </DialogDescription>
                  </DialogHeader>
                  {/* Content section */}
                  <div className="space-y-4 p-4 pt-2 break-words overflow-x-hidden">
                    <div>
                      <h4 className="font-semibold mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="text-primary bg-primary/10 border-primary/30 "
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 pt-4">
                      <Button
                        variant="default"
                        className="text-white hover:text-white/80 transition-colors"
                      >
                        <Link
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="flex items-center gap-2 text-dark-primary">
                            <ExternalLinkIcon className="w-4 h-4" />
                            <span>View Live</span>
                          </div>
                        </Link>
                      </Button>
                      <Button
                        variant="outline"
                        className="text-secondary bg-transparent border-secondary hover:bg-secondary/10"
                      >
                        <Link
                          href={project.source}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="flex items-center gap-2">
                            <svg
                              className="h-6 w-6"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span>Source Code</span>
                          </div>
                        </Link>
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 " id="contact">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">Get In Touch</h2>
          <p className="text-gray-300 text-lg mb-8">
            I&apos;m always open to new opportunities and interesting projects.
            Whether you have a question, a project in mind, or just want to say
            hello, feel free to reach out!
          </p>

          <ContactButton />
          <div className="mt-8 flex justify-center gap-6">
            <a
              href="https://github.com/Eizads"
              target="_blank"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/sogoleizadshenass/"
              target="_blank"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
              </svg>
            </a>
          </div>
          <p className="text-gray-300 text-lg my-8">
            Made with <span className="text-secondary">💚</span> in React © 2025
          </p>
        </div>
      </section>
    </main>
  );
}
