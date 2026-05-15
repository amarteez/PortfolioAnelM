import React from 'react';
import './Skills.css';

const skills = [
  { name: 'Python', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg' },
  { name: 'Django', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/75/Django_logo.svg' },
  { name: 'JavaScript', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' },
  { name: 'Node.js', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg' },
  { name: 'React', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
  { name: '.NET', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Microsoft_.NET_logo.svg' },
  { name: 'C#', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png' },
  { name: 'Oracle DB', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg' },
  { name: 'PostgreSQL', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg' },
  { name: 'MongoDB', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg' },
  { name: 'Google BigQuery', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Google_Cloud_BigQuery_logo.svg' },
  { name: 'Docker', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_logo.svg' },
  { name: 'Git', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg' },
  { name: 'Socket.io', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Socket-io.svg' },
  { name: 'Unit Testing', iconUrl: 'https://cdn.worldvectorlogo.com/logos/jest-2.svg' },
  { name: 'SQL Server', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_server_2014_logo.svg' }
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;