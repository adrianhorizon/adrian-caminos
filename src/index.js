import React from 'react'
import { render } from 'react-dom'
import './index.css'
import Home from './home/Home'
import registerServiceWorker from './registerServiceWorker'

const home = document.getElementById('app-home')

render(<Home name="Adrían Camilo Caminos" />, home)
registerServiceWorker();
