import React, { Component } from 'react'
import './Home.css'
import Section from '../section/Section'
import Footer from '../footer/Footer'
import PropTypes from 'prop-types'
class Home extends Component {
  render() {
    return (
      <div className="Home">
        <header className="Home-header">
          <h1 className="Home-title">{ this.props.name }</h1>
        </header>
          <Section />
            <Footer /> 
      </div>
    );
  }
}

Home.propTypes = {
  name: PropTypes.string.isRequired
}

export default Home
