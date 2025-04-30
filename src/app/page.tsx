import Image from 'next/image';
import ContactButton from './components/ContactButton';
import ProjectButton from './components/ProjectButton';

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-primary text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-between items-center px-4 sm:px-6 lg:px-8">
        <div className="flex-1 flex items-center">
          <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-start"data-aos="fade-up">
              <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-clip-text  text-secondary" >
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
            
              <h2 className="text-xl sm:text-xl font-bold mb-8 text-dark-accent mt-[100px] md:mt-0" data-aos="fade-left"> Hi, I&apos;m Sogol,</h2>

              <p className="text-dark-accent text-lg leading-relaxed mb-6" data-aos="fade-left" data-aos-delay="200">
            
            I&apos;m a front-end developer based in Toronto, with a keen eye for design and a love for crafting 
            intuitive, accessible user experiences. I specialize in modern web technologies and frameworks, 
            turning complex problems into simple, beautiful solutions.
          </p>
          <p className="text-dark-accent text-lg leading-relaxed mb-6" data-aos="fade-left" data-aos-delay="300">
          Previously, I&apos;ve developed custom learning experience courses for companies like Apple, Loblaw, and Citibank, integrating them seamlessly into their LMS platforms.
          </p>
          <p className="text-dark-accent text-lg leading-relaxed" data-aos="fade-left" data-aos-delay="400">
          Outside of coding, I enjoy exploring emerging technologies, spending quality time with friends and family, and traveling.
</p>
            </div>
          </div>
        </div>
        <div className='w-full max-w-6xl my-10 flex flex-col md:flex-row items-start md:items-center gap-4'>
          <div className='text-white text-lg leading-relaxed flex items-center gap-2'>
            You can also <span className='text-primary '>find me here:</span>
            <div className="flex gap-4">
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
          <div className='flex-1'></div>
          <p className='text-white text-lg leading-relaxed'>Explore my <a href="https://github.com/Eizads/TOOLS_I_USE" target="_blank" className='text-primary'>Tech Stack</a></p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-secondary" id="projects">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Stocks Dashboard <span className='text-primary'>Project</span></h2>
          <p className='text-dark-accent text-lg mb-8'>
          This project is a live stock market dashboard that streams real-time financial data using WebSockets. It was built to highlight my front-end development skills, with a focus on performance optimization, responsive UI design, and seamless API integration. The dashboard uses the free tier of the Twelve Data API to fetch live stock data when available, and falls back on historical data when live updates are not provided. It also uses local storage to persist data across sessions for a smoother user experience. The project includes two versions:


          </p>
          <div className="flex flex-col gap-16">
            {/* First Project - Text then Image */}
            <div className="grid grid-cols-1 md:grid-cols-6 gap-8 items-center relative">
              <div className="order-1 md:order-1 md:col-span-2 bg-dark-button shadow-md text-dark-secondary p-4 rounded-md md:absolute md:bottom-0 md:left-0 md:z-10 md:w-1/3" data-aos="fade-up">
                <h3 className="text-xl font-semibold text-white mb-2"><span className='text-primary'>React</span> Version</h3>
                <p className="mb-4 text-gray-300">
                  This version is built using React, Next.js, TypeScript, Tailwind CSS, Shadcn UI, and Chart.js.
                      </p>
                <div className="flex gap-4">
                  <a href="https://sogol.dev/react-stocks-dashboard" target='_blank' className="text-white hover:text-primary">View Live</a>
                  <a href="https://github.com/Eizads/react_stocks_dashboard" target='_blank' className="text-secondary hover:text-primary">Source Code</a>
                </div>
              </div>
              <div className="order-2 md:order-2 md:col-span-5 md:col-start-2 flex justify-end" data-aos="fade-left" data-aos-delay="200">
                <div className="aspect-video bg-gray-700 mb-4 relative w-full">
                  <Image src="/project-1.png" alt="React Version" fill className="object-fit rounded-sm" />
                </div>
              </div>
            </div>

            {/* Second Project - Image then Text */}
            <div className="grid grid-cols-1 md:grid-cols-6 gap-8 items-center relative">
              <div className="order-2 md:order-1 md:col-span-5" data-aos="fade-right">
                <div className="aspect-video bg-gray-700 mb-4 relative">
                  <Image src="/project-2.png" alt="Vue3 Version" fill className="object-fit rounded-sm" />
                </div>
              </div>
              <div className="order-1 md:order-2 md:col-span-2 bg-dark-button text-dark-secondary p-4 rounded-md md:absolute md:bottom-0 md:right-0 md:z-10 md:w-1/3" data-aos="fade-left" data-aos-delay="200">
                <h3 className="text-xl font-semibold mb-2 text-white"><span className='text-primary'>Vue3</span> Version</h3>
                <p className="mb-4 text-gray-300">
                This version is built using Vue3, Quasar, vue-chart.js and Chart.js. 
                </p>
                <div className="flex gap-4">
                <a href="https://sogol.dev/vue-stocks-dashboard" target='_blank' className="text-white hover:text-primary">View Live</a>
                <a href="https://github.com/Eizads/stocks_dashboard" target="_blank" className="text-secondary hover:text-primary">Source Code</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 " id="contact">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">Get In Touch</h2>
          <p className="text-gray-300 text-lg mb-8">
            I&apos;m always open to new opportunities and interesting projects.
            Whether you have a question, a project in mind, or just want to say hello, feel free to reach out!</p>
         
          <ContactButton />
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
            <p className="text-gray-300 text-lg my-8">
          Made with <span className="text-secondary">💚</span> in React © 2025
          </p>
        </div>
      </section>
    </main>
  );
}
