import React from 'react';
import {store} from '../State'
import Mouse from "./Mouse";
import Snake from './Snake';

export function handler(props) {
    const pos = props.position;
    const snake = props.store.snakeSegments;
    const head = props.store.snakeHead;
    const mouse__1 = props.store.mouse__1;
    const mouse__2 = props.store.mouse__2;

    for(let seg of snake) {
        if(seg.x === pos.x && seg.y === pos.y) return(<Snake />)
    }

    switch (`${pos.x} ${pos.y}`) {
        case `${head.x} ${head.y}`:
            return ;
        case `${mouse__1.x} ${mouse__1.y}`:
            return (<Mouse />) ;
        case `${mouse__2.x} ${mouse__2.y}`:
            return (<Mouse />);
            default:
               return;
    }
}

export function time(renderFunc, tact) {

    let [h, m, s] = store.time.split(':').map((item) => parseInt(item));

    if(tact === 9) {
        [s, m] = s === 59 ? [0, ++m] : [++s, m];
        [h, m] = m === 60 ? [0, ++h] : [h, m];

        m = m < 10 ? '0' + m : m;
        s = s < 10 ? '0' + s : s;
        let time = `${h}:${m}:${s}`;

        store.recordTime = (time);
    }
    renderFunc();
}



