import React from 'react';
import './Projects.css';

const projects = [
  {
    title: {
      es: 'Tenkaitech E-Commerce',
      en: 'Tenkaitech E-Commerce'
    },
    description: {
      es: 'Gestiona productos con APIs, añade al carrito, calcula el total con impuestos, y envía pedidos directamente al WhatsApp de la empresa. Prueba sus funciones aquí.',
      en: 'Manages products with APIs, adds to the cart, calculates total with taxes, and sends orders directly to the company’s WhatsApp. Try its features here.'
    },
    liveUrl: 'https://tenkaitech.onrender.com/',
    technologies: ['JavaScript', 'React', 'Django', 'Python', 'PostgreSQL', 'Render', 'GitHub', 'npm'],
  },
  {
    title: {
      es: 'Notas Con Filtro',
      en: 'Notes With Filter'
    },
    description: {
      es: 'En esta website puedes crear notas y filtrarlas, también puedes clasificarlas según las necesidades. (En desarrollo).',
      en: 'On this website, you can create notes and filter them, and also classify them according to your needs. (Under development).'
    },
    liveUrl: 'http://192.168.1.12:3002/',
    technologies: ['JavaScript', 'React', 'Django', 'Python', 'PostgreSQL', 'Render'],
  },
  {
    title: {
      es: 'Portfolio',
      en: 'Portfolio'
    },
    description: {
      es: 'Este portfolio destaca mis proyectos y habilidades en diseño y desarrollo web FullStack. Utiliza tecnologías modernas para ofrecer una experiencia de navegación fluida y adaptativa',
      en: 'This portfolio highlights my projects and skills in Full-Stack web design and development. It utilizes modern technologies to provide a smooth and adaptive browsing experience.'
    },
    liveUrl: 'https://portfolioanelm.onrender.com/',
    technologies: ['JavaScript', 'React', 'CSS3', 'HTML5'],
  },
];

const Projects = ({ language }) => {
  return (
    <div className="projects-section">
      <h2>{language === 'es' ? '☁️Proyectos☁️' : '🌧️Projects🌧️'}</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <iframe
              src={project.liveUrl}
              title={project.title[language]}
              className="project-iframe"
              allowFullScreen
            />
            <div className="project-info">
              <h3>{project.title[language]}</h3>
              <p>{project.description[language]}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="technology">{tech}</span>
                ))}
              </div>
              <a 
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="visit-button"
              >
                {language === 'es' ? 'Visitar' : 'Visit'}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
