import React, { Component } from 'react'
import './Section.css'

class Section extends Component {
  render() {
    return (
      <div className="Section">
        <div className="Section-header">
          <h1 className="Section-title">Skills</h1>
        </div>
          <div className="Section-intro">
            <ul>
              <li>Scrum</li>
              <li>NodeJS</li>
              <li>Docker</li>
              <li>React native</li>
              <li>Java Spring</li>
              <li>Aws</li>
            </ul>
            <ul>
              <li>Google cloud</li>
              <li>Ionic</li>
              <li>Angular 1,2,4,5,6</li>
              <li>Webpack</li>
              <li>Javascript</li>
              <li>MongoDB</li>
            </ul>
            <ul>
              <li>Architecture REST</li>
              <li>Firebase</li>
              <li>ReactJS</li>
              <li>Redux</li>
              <li>Git/Git-flow</li>
              <li>HTML/Sass/css3</li>
            </ul>
        </div>
      </div>
    );
  }
}

export default Section
