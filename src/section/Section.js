import React, { Component } from 'react'
import './Section.css'
class Section extends Component {
  render() {
    return (
      <div className="Section">
      <h1 className="Section-title">Skills</h1>
      <div className="Section-header">
        <div className="Section-cell"><h3>Architecture REST</h3></div>
        <div className="Section-cell"><h3>Aws essentials</h3></div>
        <div className="Section-cell"><h3>Designer UI</h3></div>
        <div className="Section-cell"><h3>Docker</h3></div>
        <div className="Section-cell"><h3>Google cloud</h3></div>
      </div>
      <div className="Section-header">
        <div className="Section-cell"><h3>Ionic</h3></div>
        <div className="Section-cell"><h3>Firebase</h3></div>
        <div className="Section-cell"><h3>Java/Spring</h3></div>
        <div className="Section-cell"><h3>JavaScript</h3></div>
        <div className="Section-cell"><h3>Webpack</h3></div>
      </div>
      <div className="Section-header">
        <div className="Section-cell"><h3>Angular</h3></div>
        <div className="Section-cell"><h3>Reactjs</h3></div>
        <div className="Section-cell"><h3>React native</h3></div>
        <div className="Section-cell"><h3>NodeJS</h3></div>
        <div className="Section-cell"><h3>MongoDB</h3></div>
      </div>
      <div className="Section-header">
        <div className="Section-cell"><h3>Git|</h3></div>
        <div className="Section-cell"><h3>PostMan</h3></div>
        <div className="Section-cell"><h3>Html</h3></div>
        <div className="Section-cell"><h3>Css3</h3></div>
        <div className="Section-cell"><h3>Sass</h3></div>
      </div>
      </div>
    );
  }
}

export default Section