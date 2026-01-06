'use client';

export default function ProjectButton() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <button 
      className="px-6 py-3 bg-dark-primary border border-dark-accent hover:bg-dark-button text-white rounded-lg transition-colors" 

      onClick={scrollToProjects}
    >
      View Projects
    </button>
  );
} 