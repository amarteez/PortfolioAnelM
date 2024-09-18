import React from 'react';
import './Contact.css';

const Contact = ({ language }) => {
  return (
    <div className="contact-section">
      <h2>{language === 'es' ? 'Contacto' : 'Contact'}</h2>
      <p>{language === 'es' ? 'Puedes contactarme en el siguiente correo:' : 'You can reach me at the following email:'}</p>
      <a href="mailto:anelmartez18@gmail.com" className="email-link">anelmartez18@gmail.com</a>
    </div>
  );
};

export default Contact;
