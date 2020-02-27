import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import View from './View';
import { BrowserRouter } from 'react-router-dom';
import {store} from './State';

function renderFunc() {
    ReactDOM.render((
        <BrowserRouter>
            <View store={store} renderFunc={renderFunc} />
        </BrowserRouter>
    ), document.getElementById('root'));
}
renderFunc();


