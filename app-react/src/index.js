import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Hello from './Hello';
import Clock from './Clock';
import Clock2 from './Clock2';
import Props from './Props';
import State from './State';
import Events from './Events';
import Events2 from './Events2';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Events2 />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();