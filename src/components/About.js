import React from 'react';
import './About.css';

const About = ({ language }) => {
  return (
    <div className="about-section">
      <h2>{language === 'es' ? '☁️☁️☁️' : '🌧️🌧️🌧️'}</h2>
      <p>
        {language === 'es'
          ? 'La experiencia en tecnología no se mide solo en años, sino en la capacidad de enfrentar desafíos con ingenio y persistencia. Aunque mi trayectoria es aún joven, mi verdadera motivación proviene de una intensa pasión por resolver problemas complejos y transformar ideas en soluciones prácticas. Cada proyecto representa una oportunidad para avanzar hacia la mejora continua y la innovación.'
          : 'Experience in technology is not measured merely by years but by the ability to tackle challenges with ingenuity and persistence. While my journey is still young, my true motivation comes from a deep passion for solving complex problems and turning ideas into practical solutions. Each project represents an opportunity to move towards continuous improvement and innovation.'}
      </p>
    </div>
  );
};

export default About;
