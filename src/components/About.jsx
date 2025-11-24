import { Code2, Zap, Target } from 'lucide-react';

export default function About() {
  const skills = [
    { category: "Frontend", items: ["React", "Vue.js", "Tailwind CSS", "JavaScript", "TypeScript"] },
    { category: "Backend", items: ["Node.js", "Python", "Django", "Express", "PostgreSQL"] },
    { category: "Tools", items: ["Git", "Docker", "AWS", "Firebase", "Figma"] }
  ];

  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">
          Sobre Mim
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* About Text */}
          <div>
            <p className="text-gray-400 text-lg mb-6">
              Sou um desenvolvedor apaixonado por criar soluções inovadoras e código limpo. Com experiência em desenvolvimento full stack, trabalho com as tecnologias mais modernas para entregar projetos de alta qualidade.
            </p>
            <p className="text-gray-400 text-lg mb-6">
              Meu foco é criar experiências de usuário excepcionais enquanto mantenho um código bem estruturado e fácil de manter. Estou sempre aprendendo e me atualizando com as últimas tendências da indústria.
            </p>
            <p className="text-gray-400 text-lg">
              Quando não estou codificando, gosto de contribuir para projetos open source e compartilhar conhecimento com a comunidade.
            </p>
          </div>

          {/* Stats */}
          <div className="space-y-6">
            <div className="bg-primary p-6 rounded-lg border border-gray-700">
              <div className="flex items-center gap-4 mb-3">
                <Code2 className="text-accent" size={28} />
                <h3 className="text-xl font-bold text-white">Projetos Completos</h3>
              </div>
              <p className="text-3xl font-bold text-accent">15+</p>
            </div>

            <div className="bg-primary p-6 rounded-lg border border-gray-700">
              <div className="flex items-center gap-4 mb-3">
                <Zap className="text-accent" size={28} />
                <h3 className="text-xl font-bold text-white">Anos de Experiência</h3>
              </div>
              <p className="text-3xl font-bold text-accent">3+</p>
            </div>

            <div className="bg-primary p-6 rounded-lg border border-gray-700">
              <div className="flex items-center gap-4 mb-3">
                <Target className="text-accent" size={28} />
                <h3 className="text-xl font-bold text-white">Clientes Satisfeitos</h3>
              </div>
              <p className="text-3xl font-bold text-accent">20+</p>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Habilidades</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-primary p-6 rounded-lg border border-gray-700">
                <h4 className="text-lg font-bold text-accent mb-4">{skillGroup.category}</h4>
                <div className="space-y-2">
                  {skillGroup.items.map((skill, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-gray-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
