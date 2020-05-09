import React from 'react';
import '../assets/styles/components/Social.scss';

const Social = () => (
    <div className="buttons-container">
        <a className="button github" href="http://github.com/adrianhorizon/" rel="noreferrer noopener" target="_blank">
            <i className="fab fa-github fa-lg"></i>
        </a>
        <a className="button linkedin" href="https://www.linkedin.com/in/adrianhorizon/" rel="noreferrer noopener" target="_blank">
            <i className="fab fa-linkedin-in fa-lg"></i>
        </a>
        <a className="button medium" href="https://medium.com/@adrianhorizon" rel="noreferrer noopener" target="_blank">
            <i className="fab fa-medium-m fa-lg"></i>
        </a>
        <a className="button youtube" href="#" rel="noreferrer noopener" target="_blank">
            <i className="fab fa-youtube fa-lg"></i>
        </a>
    </div>
);

export default Social;