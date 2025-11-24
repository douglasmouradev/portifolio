import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { personalInfo } from '../data/projects';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar lógica para enviar o email
    console.log('Formulário enviado:', formData);
    alert('Obrigado pela mensagem! Entrarei em contato em breve.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
          Entre em Contato
        </h2>
        <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          Tem uma pergunta ou proposta? Adoraria ouvir de você. Envie uma mensagem e responderei assim que possível.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Contact Info */}
          <div className="bg-secondary p-6 rounded-lg border border-gray-700 text-center">
            <Mail className="text-accent mx-auto mb-4" size={32} />
            <h3 className="text-lg font-bold text-white mb-2">Email</h3>
            <a href={`mailto:${personalInfo.email}`} className="text-gray-400 hover:text-accent transition">
              {personalInfo.email}
            </a>
          </div>

          <div className="bg-secondary p-6 rounded-lg border border-gray-700 text-center">
            <Phone className="text-accent mx-auto mb-4" size={32} />
            <h3 className="text-lg font-bold text-white mb-2">Telefone</h3>
            <a href={`tel:${personalInfo.phone}`} className="text-gray-400 hover:text-accent transition">
              {personalInfo.phone}
            </a>
          </div>

          <div className="bg-secondary p-6 rounded-lg border border-gray-700 text-center">
            <MapPin className="text-accent mx-auto mb-4" size={32} />
            <h3 className="text-lg font-bold text-white mb-2">Localização</h3>
            <p className="text-gray-400">
              {personalInfo.location}
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto bg-secondary p-8 rounded-lg border border-gray-700">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-white font-semibold mb-2">
                Nome
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-primary border border-gray-700 rounded-lg text-white focus:outline-none focus:border-accent transition"
                placeholder="Seu nome"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-white font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-primary border border-gray-700 rounded-lg text-white focus:outline-none focus:border-accent transition"
                placeholder="seu.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-white font-semibold mb-2">
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-3 bg-primary border border-gray-700 rounded-lg text-white focus:outline-none focus:border-accent transition resize-none"
                placeholder="Sua mensagem aqui..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-accent text-white font-semibold py-3 rounded-lg hover:bg-accent/90 transition flex items-center justify-center gap-2"
            >
              <Send size={20} />
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
