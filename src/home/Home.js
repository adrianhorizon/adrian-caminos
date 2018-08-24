import React, { Component } from 'react';
import './Home.css';
import Section from '../section/Section';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <header className="Home-header">
          <h1 className="Home-title">Adrian Camilo Parra Caminos</h1>
        </header>
          <Section />
      </div>
    );
  }
}

export default Home;
