import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-primary/95 backdrop-blur border-b border-secondary">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-accent">Portfolio</div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-accent transition">Home</button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-300 hover:text-accent transition">Projetos</button>
            <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-accent transition">Sobre</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-accent transition">Contato</button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-4 pb-4">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left text-gray-300 hover:text-accent transition">Home</button>
            <button onClick={() => scrollToSection('projects')} className="block w-full text-left text-gray-300 hover:text-accent transition">Projetos</button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left text-gray-300 hover:text-accent transition">Sobre</button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-gray-300 hover:text-accent transition">Contato</button>
          </div>
        )}
      </nav>
    </header>
  );
}
