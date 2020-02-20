import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import View from './View';
import { BrowserRouter } from 'react-router-dom';
import {store} from './State';


ReactDOM.render((
    <BrowserRouter>
        <View store={store}/>
    </BrowserRouter>
), document.getElementById('root'));


