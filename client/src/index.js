import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import 'bootswatch/dist/sketchy/bootstrap.min.css'
import './CSS/Styles.css'
import App from './App';

ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));

