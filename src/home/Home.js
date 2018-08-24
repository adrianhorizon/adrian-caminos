import React, { Component } from 'react';
import './Home.css';
import Section from '../section/Section';
import Footer from '../footer/Footer';
class Home extends Component {
  render() {
    const name = 'Adrían Camilo Parra Caminos';
    return (
      <div className="Home">
        <header className="Home-header">
          <h1 className="Home-title">{name}</h1>
        </header>
          <Section />
            <Footer /> 
      </div>
    );
  }
}

export default Home;
