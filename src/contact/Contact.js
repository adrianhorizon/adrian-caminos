import React, { Component } from 'react'
import './Contact.css'

class Contact extends Component {
    render() {
        return (
            <div className="Contact">
                <div className="Contact-header">
                <div className="Contact-header">
                    <div className="Contact-cell">
                        <h5>Architecture REST</h5>
                    </div>
                    <div className="Contact-cell">
                        <h5>Aws essentials</h5>
                    </div>
                    <div className="Contact-cell">
                        <h5>Digital ocean</h5>
                    </div>
                    <div className="Contact-cell">
                    <h5>Docker</h5>
                    </div>
                    <div className="Contact-cell">
                    <h5>Google cloud</h5>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default Contact