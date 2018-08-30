import React from 'react'
import { render } from 'react-dom'
import './index.css'
import Home from './home/Home'
import registerServiceWorker from './registerServiceWorker'

const home = document.getElementById('app-home')
const text = 'I am a Full Stack Developer, passionate about software, game arts, platzi blog, tools and platforms that inhabit the thin line between technology. I have built websites, Web applications, mobile applications, REST APIs, Single page applications and custom content management systems. I have been in the front end and back end of various companies, startups and agencies creating products for the web.';

render(<Home name="Adrían Camilo Caminos" text={text} />, home)
registerServiceWorker();
