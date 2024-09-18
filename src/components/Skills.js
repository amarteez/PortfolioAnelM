import React from 'react';
import './Skills.css';

const skills = [
  { name: 'JavaScript', level: 'Básico', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' },
  { name: 'Python', level: 'Básico', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg' },
  { name: 'React', level: 'Intermedio', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
  { name: 'Django', level: 'Básico', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/75/Django_logo.svg' },
  { name: 'PostgreSQL', level: 'Intermedio', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg' },
  { name: 'MongoDB', level: 'Básico', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg' },
];

const Skills = ({ language }) => {
  return (
    <div className="skills-section">
      <h2>{language === 'es' ? 'Habilidades Técnicas' : 'Technical Skills'}</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <img src={skill.iconUrl} alt={skill.name} className="skill-icon" />
            <div className="skill-info">
              <h3 className="skill-name">{skill.name}</h3>
              <p className="skill-level">
                {language === 'es' ? skill.level : skill.level === 'Básico' ? 'Basic' : skill.level === 'Intermedio' ? 'Intermediate' : 'Expert'}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
