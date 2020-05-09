import React from 'react';
import ReactDOM from 'react-dom';
import App from './routes/App';
import './utils/i18n';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <App />,
    document.getElementById('app')
);

serviceWorker.register();