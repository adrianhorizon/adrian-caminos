import React, { Component } from 'react'
import './Navigation.css'

class Navigation extends Component {
    render () {
        return (
            <div className="Navigation">
                <ul className="Navigation-ul">
                    <li><a class="active" href="#home">Subscribe</a></li>
                    <li><a href="#news">Work</a></li>
                    <li><a href="#contact">Skills</a></li>
                    <li><a href="#about">Home</a></li>
                </ul>
            </div>
        );
    }
}

export default Navigation