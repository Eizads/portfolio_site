'use client';
import ContactButton from './ContactButton';
export default function Navigation() {
  return (
    <nav className="fixed w-full bg-transparent backdrop-blur-sm z-50">
      <div className="max-w-6xl mx-auto sm:px-6 lg:px-0">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="ml-4 md:ml-0 text-xl font-bold text-primary">
            Sogol Eizad
          </a>
          <div className="hidden sm:block">
            <div className="flex space-x-8">
              {/* <a href="#about" className="bg-dark-button px-6 py-3 rounded-lg text-gray-300 hover:text-white transition-colors">
                About
              </a>
              <a href="#skills" className="bg-dark-button px-6 py-3 rounded-lg text-gray-300 hover:text-white transition-colors">
                Skills
              </a> */}
              <a href="#projects" className="bg-dark-button px-6 py-3 rounded-lg text-gray-300 hover:text-white transition-colors">
                Projects
              </a>
              {/* <a href="#contact" className="bg-dark-button px-6 py-3 rounded-lg text-gray-300 hover:text-white transition-colors">
                Contact
              </a> */}
                            <ContactButton />

            </div>
          </div>
          <div className="sm:hidden">
            <button
              type="button"
              className="text-gray-300 hover:text-white"
              onClick={() => {
                const mobileMenu = document.getElementById('mobile-menu');
                mobileMenu?.classList.toggle('hidden');
              }}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <div className="hidden sm:hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a
            href="#about"
            className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
          >
            About
          </a>
          <a
            href="#skills"
            className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
} 