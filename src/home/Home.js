import React, { Component } from 'react'
import './Home.css'
import Section from '../section/Section'
import Work from '../work/Work'
import Footer from '../footer/Footer'
import PropTypes from 'prop-types'
class Home extends Component {
  render() {
    return (
      <div className="Home">
        <header className="Home-header">
          <h1 className="Home-title">{ this.props.name }</h1>
          <small>I am a Full Stack Developer, passionate about software, game arts, platzi blog, tools and platforms
that inhabit the thin line between technology. I have built websites, Web applications, mobile
applications, REST APIs, Single page applications and custom content management systems. I
have been in the front end and back end of various companies, startups and agencies creating
products for the web.</small>
        </header>
          <Section />
            <Work />
              <Footer /> 
      </div>
    );
  }
}

Home.propTypes = {
  name: PropTypes.string.isRequired
}

export default Home
