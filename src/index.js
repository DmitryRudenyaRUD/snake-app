import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './Routes';
import {BrowserRouter} from 'react-router-dom';
import {store} from './store/State';


ReactDOM.render((
    <BrowserRouter>
        <Routes store={store}/>
    </BrowserRouter>
), document.getElementById('root'));


