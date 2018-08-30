import React, { Component } from 'react'
import './Home.css'
import PropTypes from 'prop-types'
import Navigation from '../navigation/Navigation'
import Section from '../section/Section'
import Work from '../work/Work'
import Footer from '../footer/Footer'
import Contact from '../contact/Contact'
class Home extends Component {
  render() {
    return (
      <div className="Home">
      <Navigation />
        <header className="Home-header">
          <h1 className="Home-title">{ this.props.name }</h1>
          <p>{this.props.text}</p>
        </header>
          <Section />
            <Work />
              <Contact />
                <Footer /> 
      </div>
    );
  }
}

Home.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default Home
