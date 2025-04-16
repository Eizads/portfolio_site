'use client';

export default function ProjectButton() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <button 
      className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
      onClick={scrollToProjects}
    >
      View Projects
    </button>
  );
} 