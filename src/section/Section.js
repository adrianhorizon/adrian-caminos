import React, { Component } from 'react'
import './Section.css'
import Cloud from '../assets/img/cloud.svg'
import Firebase from '../assets/img/firebase.png'
import Webpack from '../assets/img/webpack.svg'
import MongoDB from '../assets/img/mongodb.svg'
import PostMan from '../assets/img/postman.svg'
import Ionic from '../assets/img/ionic.svg'
import Ocean from '../assets/img/ocean.svg'
class Section extends Component {
  render() {
    return (
      <div className="Section">
        <h1 className="Section-title">Skills</h1>
        <div className="Section-header">
          <div className="Section-cell">
          <i className="fas fa-file-code fa-2x"></i>
            <h5>Architecture REST</h5>
        </div>
          <div className="Section-cell">
            <i className="fab fa-aws fa-2x"></i>
            <h5>Aws essentials</h5>
        </div>
        <div className="Section-cell">
        <img src={Ocean} alt={Ocean} className="icons-cloud"/>
            <h5>Digital ocean</h5>
        </div>
        <div className="Section-cell">
        <i className="fab fa-docker fa-2x"></i>
          <h5>Docker</h5>
        </div>
        <div className="Section-cell">
          <img src={Cloud} alt={Cloud} className="icons-cloud"/>
          <h5>Google cloud</h5>
        </div>
      </div>
      <div className="Section-header">
        <div className="Section-cell">
        <img src={Ionic} alt={Ionic} className="icons-ionic"/>
          <h5>Ionic</h5>
        </div>
        <div className="Section-cell">
          <img src={Firebase} alt={Firebase} className="icons"/>
          <h5>Firebase</h5>
        </div>
        <div className="Section-cell">
        <i className="fab fa-java fa-2x"></i>
          <h5>Java/Spring</h5>
        </div>
        <div className="Section-cell">
        <i className="fab fa-js fa-2x"></i>
          <h5>JavaScript</h5>
        </div>
        <div className="Section-cell">
        <img src={Webpack} alt={Webpack} className="icons-cloud"/>
          <h5>Webpack</h5>
        </div>
      </div>
      <div className="Section-header">
        <div className="Section-cell">
          <i className="fab fa-angular fa-2x"></i>
          <h5>Angular</h5>
        </div>
        <div className="Section-cell">
        <i className="fab fa-react fa-2x"></i>
          <h5>Reactjs</h5>
        </div>
        <div className="Section-cell">
          <i className="fab fa-react fa-2x"></i>
          <h5>React native</h5>
        </div>
        <div className="Section-cell">
          <i className="fab fa-node-js fa-2x"></i>
          <h5>NodeJS</h5>
        </div>
        <div className="Section-cell">
        <img src={MongoDB} alt={MongoDB} className="icons-cloud"/>
          <h5>MongoDB</h5>
        </div>
      </div>
      <div className="Section-header">
        <div className="Section-cell">
        <i className="fab fa-github fa-2x"></i>
          <h5>Git</h5>
        </div>
        <div className="Section-cell">
        <img src={PostMan} alt={PostMan} className="icons-cloud"/>
          <h5>PostMan</h5>
        </div>
        <div className="Section-cell">
        <i className="fab fa-html5 fa-2x"></i>
          <h5>Html</h5>
        </div>
        <div className="Section-cell">
        <i className="fab fa-css3-alt fa-2x"></i>
          <h5>Css3</h5>
        </div>
        <div className="Section-cell">
        <i className="fab fa-sass fa-2x"></i>
          <h5>Sass</h5>
        </div>
      </div>
      </div>
    );
  }
}

export default Section