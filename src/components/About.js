import React from 'react';
import './About.css';

const About = ({ language }) => {
  return (
    <div className="about-section">
      <h2>{language === 'es' ? '☁️☁️☁️' : '🌧️🌧️🌧️'}</h2>
      <p>
        {language === 'es'
          ? 'La experiencia en tecnología no se mide solo en años, sino en la capacidad de resolver problemas con ingenio y persistencia. Con más de 2.5 años de trayectoria en sectores de alta exigencia como finanzas gubernamentales e ingeniería, me especializo en transformar desafíos complejos en soluciones escalables y arquitectura backend sólida.'
          : 'Experience in technology is not measured merely by years but by the ability to solve problems with ingenuity and persistence. With over 2.5 years of experience in high-demand sectors such as government finance and engineering, I specialize in transforming complex challenges into scalable solutions and solid backend architecture.'
          }      </p>
    </div>
  );
};

export default About;
