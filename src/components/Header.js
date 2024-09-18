import React, { useState } from 'react';
import './Header.css';

const Header = ({ language, setLanguage }) => {
  const [showCVDropdown, setShowCVDropdown] = useState(false);

  const toggleCVDropdown = () => {
    setShowCVDropdown(!showCVDropdown);
  };

  return (
    <header className="header">
      <div className="header-left">
        {/* Botón CV con menú desplegable */}
        <div className="cv-dropdown">
          <button className="btn" onClick={toggleCVDropdown}>
            CV
          </button>
          {showCVDropdown && (
            <div className="cv-dropdown-content">
              <a href="/Anel_Martéz_CV_ES.pdf" target="_blank" rel="noopener noreferrer">Ver CV (Español)</a>
              <a href="/Anel_Martéz_CV_ES.pdf" download="Anel_Martéz_CV_ES">Descargar CV (Español)</a>
              <a href="/Anel_Martéz_CV_EN.pdf" target="_blank" rel="noopener noreferrer">View CV (English)</a>
              <a href="/Anel_Martéz_CV_EN.pdf" download="Anel_Martéz_CV_EN">Download CV (English)</a>
            </div>
          )}
        </div>
      </div>
      
      <nav>
        <ul className="nav-list">
          <li><a href="#home">{language === 'es' ? 'Inicio' : 'Home'}</a></li>
          <li><a href="#projects">{language === 'es' ? 'Proyectos' : 'Projects'}</a></li>
          <li><a href="#contact">{language === 'es' ? 'Contacto' : 'Contact'}</a></li>
        </ul>
      </nav>

      <div className="header-right">
        {/* Botón de cambio de idioma */}
        <button onClick={() => setLanguage(language === 'es' ? 'en' : 'es')} className="btn language-btn">
          {language === 'es' ? 'English' : 'Español'}
        </button>
      </div>
    </header>
  );
};

export default Header;
