'use client';

export default function ContactButton() {
  return (
    <button 
      className="px-6 py-3 border border-blue-600 hover:bg-blue-600/10 rounded-lg transition-colors" 
      onClick={() => window.location.href = 'mailto:sogol.eizad@gmail.com'}
    >
      Contact Me
    </button>
  );
} 