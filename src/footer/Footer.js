import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    state = {
        name: 'Copyrigth 2018 Wiissy'
    }
    render() {
        return(
            <div className="Footer">
                <div className="Footer-header">
                    <h1 className="Footer-title">{ this.state.name }</h1>
                </div>
            </div>
        );
    }
}

export default Footer;