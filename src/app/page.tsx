import ContactButton from './components/ContactButton';
import ProjectButton from './components/ProjectButton';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-start">
        <h2 className="text-xl sm:text-xl font-bold mb-8 text-blue-800"> Hi, I&apos;m Sogol,</h2>

          <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Front-End Developer
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-8">
            Crafting beautiful and responsive web experiences
          </p>
          <div className="flex justify-center gap-4">
            <ProjectButton />
            <ContactButton />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" id="about">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8"> Hi, I&apos;m Sogol,</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
          
            I&apos;m a passionate front-end developer based in Toronto, with a keen eye for design and a love for creating 
            intuitive user experiences. I specialize in modern web technologies and frameworks, 
            turning complex problems into simple, beautiful solutions.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            When I&apos;m not coding, you can find me exploring new technologies, spending time with friends and family, or traveling.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50" id="skills">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">Skills & Technologies</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            {[
              'React', 'TypeScript', 'Next.js', 'Tailwind CSS',
              'JavaScript', 'HTML5', 'CSS3', 'Git',
              'Node.js', 'REST APIs', 'Responsive Design', 'UI/UX', 'Vue', 'Quasar', 'Bootstrap-vue', 'SQL'
            ].map((skill) => (
              <div key={skill} className="text-center p-4 rounded-lg bg-gray-700/50 hover:bg-gray-700 transition-colors">
                <p className="font-medium">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" id="projects">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((project) => (
              <div key={project} className="rounded-lg bg-gray-800/50 p-6 hover:bg-gray-800 transition-colors">
                <div className="aspect-video bg-gray-700 rounded-md mb-4"></div>
                <h3 className="text-xl font-semibold mb-2">Project {project}</h3>
                <p className="text-gray-300 mb-4">
                  A brief description of the project and the technologies used.
                </p>
                <div className="flex gap-4">
                  <a href="#" className="text-blue-400 hover:text-blue-300">View Live</a>
                  <a href="#" className="text-blue-400 hover:text-blue-300">Source Code</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50" id="contact">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">Get In Touch</h2>
          <p className="text-gray-300 text-lg mb-8">
            I&apos;m always open to new opportunities and interesting projects.
            Feel free to reach out!
          </p>
          <a 
            href="mailto:sogol.eizad@gmail.com"
            className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors text-lg"
          >
            Send me an email
          </a>
          <div className="mt-8 flex justify-center gap-6">
            <a href="https://github.com/Eizads" target="_blank" className="text-gray-300 hover:text-white transition-colors">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/sogoleizadshenass/" target="_blank" className="text-gray-300 hover:text-white transition-colors">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
              </svg>
            </a>
         
          </div>
        </div>
      </section>
    </main>
  );
}
