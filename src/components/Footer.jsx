import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import { personalInfo } from '../data/projects';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary border-t border-secondary py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-accent mb-2">Portfolio</h3>
            <p className="text-gray-400">
              Desenvolvedor full stack criando soluções inovadoras.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-accent transition">Home</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-accent transition">Projetos</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-accent transition">Sobre</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-accent transition">Contato</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Redes Sociais</h4>
            <div className="flex gap-4">
              <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition">
                <Github size={24} />
              </a>
              <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition">
                <Linkedin size={24} />
              </a>
              <a href={personalInfo.social.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition">
                <Twitter size={24} />
              </a>
              <a href={personalInfo.social.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition">
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-gray-400">
            © {currentYear} {personalInfo.name}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
