'use client';

import { Mail } from 'lucide-react';

export default function ContactButton() {
  return (
    <button 
      className="px-6 py-3 bg-primary hover:bg-primary/90 text-dark-primary rounded-lg transition-colors flex items-center gap-2"
      onClick={() => window.location.href = 'mailto:sogol.eizads@gmail.com'}
    >
      <Mail size={20} />
      Contact Me
    </button>
  );
} 