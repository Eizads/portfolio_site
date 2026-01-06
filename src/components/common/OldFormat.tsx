import Image from "next/image";
export default function OldFormat() {
  return (
    <div>
      <div>
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Stocks Dashboard <span className="text-primary">Project</span>
        </h2>
        <p className="text-dark-accent text-lg mb-8">
          This project is a live stock market dashboard that streams real-time
          financial data using WebSockets. It was built to highlight my
          front-end development skills, with a focus on performance
          optimization, responsive UI design, and seamless API integration. The
          dashboard uses the free tier of the Twelve Data API with limited stock
          availability to fetch live stock data when available, and falls back
          on historical data when live updates are not provided. It also uses
          local storage to persist data across sessions for a smoother user
          experience. The project includes two versions:
        </p>
        <div className="flex flex-col gap-16">
          {/* First Project - Text then Image */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-8 items-center relative">
            <div
              className="order-1 md:order-1 md:col-span-2 bg-dark-button shadow-md text-dark-secondary p-4 rounded-md md:absolute md:bottom-0 md:left-0 md:z-10 md:w-1/3"
              data-aos="fade-up"
            >
              <h3 className="text-xl font-semibold text-white mb-2">
                <span className="text-primary">React</span> Version
              </h3>
              <p className="mb-4 text-gray-300">
                This version is built using React, Next.js, TypeScript, Tailwind
                CSS, Shadcn UI, and Chart.js.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://sogol.dev/react-stocks-dashboard"
                  target="_blank"
                  className="text-white hover:text-primary"
                >
                  View Live
                </a>
                <a
                  href="https://github.com/Eizads/react_stocks_dashboard"
                  target="_blank"
                  className="text-secondary hover:text-primary"
                >
                  Source Code
                </a>
              </div>
            </div>
            <div
              className="order-2 md:order-2 md:col-span-5 md:col-start-2 flex justify-end"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <div className="aspect-video bg-gray-700 mb-4 relative w-full">
                <Image
                  src="/project-1.png"
                  alt="React Version"
                  fill
                  className="object-fit rounded-sm"
                />
              </div>
            </div>
          </div>

          {/* Second Project - Image then Text */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-8 items-center relative">
            <div
              className="order-2 md:order-1 md:col-span-5"
              data-aos="fade-right"
            >
              <div className="aspect-video bg-gray-700 mb-4 relative">
                <Image
                  src="/project-2.png"
                  alt="Vue3 Version"
                  fill
                  className="object-fit rounded-sm"
                />
              </div>
            </div>
            <div
              className="order-1 md:order-2 md:col-span-2 bg-dark-button text-dark-secondary p-4 rounded-md md:absolute md:bottom-0 md:right-0 md:z-10 md:w-1/3"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <h3 className="text-xl font-semibold mb-2 text-white">
                <span className="text-primary">Vue3</span> Version
              </h3>
              <p className="mb-4 text-gray-300">
                This version is built using Vue3, Quasar, Vue-chart-3 and
                Chart.js.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://sogol.dev/vue-stocks-dashboard"
                  target="_blank"
                  className="text-white hover:text-primary"
                >
                  View Live
                </a>
                <a
                  href="https://github.com/Eizads/stocks_dashboard"
                  target="_blank"
                  className="text-secondary hover:text-primary"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
          {/* BuildFlow App Project - Text then Image */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-8 items-center relative">
            <div
              className="order-1 md:order-1 md:col-span-2 bg-dark-button shadow-md text-dark-secondary p-4 rounded-md md:absolute md:bottom-0 md:left-0 md:z-10 md:w-1/3"
              data-aos="fade-up"
            >
              <h3 className="text-xl font-semibold text-white mb-2">
                <span className="text-primary">BuildFlow</span> App
              </h3>
              <p className="mb-4 text-gray-300">
                This app is built using React, Next.js, TypeScript, Tailwind
                CSS, Shadcn UI, and Clerk.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://buildflow-app-five.vercel.app"
                  target="_blank"
                  className="text-white hover:text-primary"
                >
                  View Live
                </a>
                <a
                  href="https://github.com/Eizads/buildflow-app"
                  target="_blank"
                  className="text-secondary hover:text-primary"
                >
                  Source Code
                </a>
              </div>
            </div>
            <div
              className="order-2 md:order-2 md:col-span-5 md:col-start-2 flex justify-end"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <div className="aspect-video bg-gray-700 mb-4 relative w-full">
                <Image
                  src="/buildflow-app.png"
                  alt="React Version"
                  fill
                  className="object-fit rounded-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
