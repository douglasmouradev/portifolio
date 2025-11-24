# Portfólio Profissional

Um portfólio moderno e responsivo para showcasear seus projetos e habilidades.

## 🚀 Características

- ✨ Design moderno e responsivo
- 🎨 Tema escuro com cores personalizáveis
- 📱 Totalmente mobile-friendly
- ⚡ Rápido e otimizado
- 🔗 Integração com redes sociais
- 📧 Formulário de contato funcional
- 🎯 Navegação suave

## 🛠️ Tecnologias

- **React 18** - Biblioteca JavaScript
- **Vite** - Build tool rápido
- **Tailwind CSS** - Styling
- **Lucide React** - Ícones
- **JavaScript ES6+**

## 📦 Instalação

1. Clone ou copie este projeto
2. Instale as dependências:

```bash
npm install
```

3. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador

## 🎨 Personalização

### Editar Informações Pessoais

Abra `src/data/projects.js` e atualize:

```javascript
export const personalInfo = {
  name: "Seu Nome",
  title: "Seu Título",
  bio: "Sua bio",
  email: "seu.email@example.com",
  phone: "+55 (11) 9999-9999",
  location: "Sua Localização",
  social: {
    github: "https://github.com/seu-usuario",
    linkedin: "https://linkedin.com/in/seu-usuario",
    twitter: "https://twitter.com/seu-usuario",
    instagram: "https://instagram.com/seu-usuario"
  }
};
```

### Adicionar Projetos

No mesmo arquivo `src/data/projects.js`, adicione seus projetos:

```javascript
{
  id: 5,
  title: "Seu Novo Projeto",
  description: "Descrição do projeto",
  image: "URL da imagem",
  technologies: ["React", "Node.js"],
  link: "https://github.com/seu-repo",
  demo: "https://seu-demo.com"
}
```

### Personalizar Cores

Edite `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#0f172a',    // Cor de fundo principal
      secondary: '#1e293b',  // Cor secundária
      accent: '#3b82f6',     // Cor de destaque
    }
  },
}
```

## 📂 Estrutura do Projeto

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Projects.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── projects.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🚀 Deploy

### Netlify

1. Faça build do projeto:
```bash
npm run build
```

2. Suba a pasta `dist` para o Netlify

### Vercel

1. Instale o Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

## 📝 Licença

Este projeto é livre para uso pessoal e comercial.

## 💡 Dicas

- Substitua as imagens de exemplo por screenshots reais dos seus projetos
- Atualize as tecnologias listadas com as que você realmente usa
- Adicione links reais para seus repositórios e demos
- Personalize as cores para combinar com sua marca
- Considere adicionar mais seções como "Experiência" ou "Certificados"

---

Desenvolvido com ❤️ para showcasear seus projetos!
