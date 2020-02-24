import React from 'react';
import css from './articles.module.css';

export default function HeadSnake(props) {
    return <div className={handlerClass(props.orientation)}/>
}

function handlerClass(props) {
    switch(props) {
        case 'ArrowRight':
            return css.headRight;
        case 'ArrowLeft':
            return css.headLeft;
        case 'ArrowUp':
            return css.headUp;
        case 'ArrowDown':
            return css.headDown;
        default:
            return;
    }
}