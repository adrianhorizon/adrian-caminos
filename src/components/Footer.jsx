import React from 'react';
import '../assets/styles/components/Footer.scss';

const Footer = () => (
    <footer className="container-column-footer">
        <div className="container-style-footer">
            <a aria-label="Twitter" target="_blank" rel="noopener noreferrer" href="/">Terminos de uso</a>
        </div>
        <div className="container-style-footer">
            <a aria-label="Facebook" target="_blank" rel="noopener noreferrer" href="/">Declaración de privacidad</a>
        </div>
        <div className="container-style-footer">
            <a aria-label="Linkedin" target="_blank" rel="noopener noreferrer" href="/">Centro de ayuda</a>
        </div>
        <div className="container-style-footer">
            <a aria-label="Github" target="_blank" rel="noopener noreferrer" href="/">Suscribete</a>
        </div>
    </footer>
);

export default Footer;