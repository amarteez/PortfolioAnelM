import React from 'react';
import { ReactTyped as Typed } from 'react-typed';
import './Home.css';

// URL de los iconos (puedes cambiarlos por los tuyos si lo prefieres)
const iconUrls = {
  github: 'https://cdn4.iconfinder.com/data/icons/social-media-and-logos-11/32/Logo_Github-1024.png',
  linkedin: 'https://logodix.com/logo/91001.png',
  email: 'https://static.vecteezy.com/system/resources/previews/016/716/465/original/gmail-icon-free-png.png',
};

const Home = () => {
  return (
    <div className="home-section">
      <div className="home-content">
        {/* Nombre con fuente de Google Fonts */}
        <h1 className="name">Anel Martéz</h1>

        {/* Efecto de escritura para el título */}
        <Typed
          className="typed-text"
          strings={['Desarrollador Full Stack Junior', 'Full Stack Developer Junior']}
          typeSpeed={50}
          backSpeed={30}
          loop
        />

        {/* Íconos sociales */}
        <div className="social-links">
          <a href="https://github.com/amarteez" target="_blank" rel="noopener noreferrer">
            <img src={iconUrls.github} alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/anelmart%C3%A9z/" target="_blank" rel="noopener noreferrer">
            <img src={iconUrls.linkedin} alt="LinkedIn" />
          </a>
          <a href="mailto:anelmartez18@gmail.com">
            <img src={iconUrls.email} alt="Email" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
