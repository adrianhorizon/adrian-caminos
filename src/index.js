import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './home/Home';
import registerServiceWorker from './registerServiceWorker';

const home = document.getElementById('app-home')

ReactDOM.render(<Home />, home);
registerServiceWorker();
