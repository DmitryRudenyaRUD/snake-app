import React from 'react';
import css from './articles.module.css';

export default function HeadSnake(props) {
    return <div className={handlerClass(props)}/>
}

function handlerClass(props) {
    switch(props.orientation) {
        case 'ArrowRight':
            return css[`headRight${props.id}`];
        case 'ArrowLeft':
            return css[`headLeft${props.id}`];
        case 'ArrowUp':
            return css[`headUp${props.id}`];
        case 'ArrowDown':
            return css[`headDown${props.id}`];
        default:
            return;
    }
}