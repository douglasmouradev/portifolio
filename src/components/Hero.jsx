import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/projects';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-b from-primary to-secondary flex items-center justify-center pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-accent/10 border-2 border-accent flex items-center justify-center">
            <span className="text-5xl">👨‍💻</span>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
          {personalInfo.name}
        </h1>
        
        <p className="text-2xl md:text-3xl text-accent mb-6">
          {personalInfo.title}
        </p>
        
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
          {personalInfo.bio}
        </p>

        <div className="flex justify-center gap-4 mb-12">
          <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-secondary hover:bg-accent/20 rounded-full transition">
            <Github size={24} className="text-accent" />
          </a>
          <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-secondary hover:bg-accent/20 rounded-full transition">
            <Linkedin size={24} className="text-accent" />
          </a>
          <a href={`mailto:${personalInfo.email}`} className="p-3 bg-secondary hover:bg-accent/20 rounded-full transition">
            <Mail size={24} className="text-accent" />
          </a>
        </div>

        <button 
          onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
          className="inline-flex items-center gap-2 bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-accent/90 transition"
        >
          Ver Projetos <ArrowRight size={20} />
        </button>
      </div>
    </section>
  );
}
