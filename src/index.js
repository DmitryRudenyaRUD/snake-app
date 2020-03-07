import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './Routes';
import { BrowserRouter } from 'react-router-dom';
import {store} from './store/State';

function renderFunc() {
    ReactDOM.render((
        <BrowserRouter>
            <Routes store={store} renderFunc={renderFunc} />
        </BrowserRouter>
    ), document.getElementById('root'));
}
renderFunc();
