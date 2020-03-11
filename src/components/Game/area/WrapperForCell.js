import React from 'react';
import Cell from "./Cell";

export function WrapperForCell(props) {

    const handler = () => {
        const pos = props.position;
        const {
            snakeSegments,
            snakeHead,
            mouse__1,
            mouse__2,
            blood,
            model,
            orientation
        } = props.store;

        for (let seg of snakeSegments) {
            if(seg.x === pos.x && seg.y === pos.y) {
                return `snake${model}`
            }
        }

        switch (`${pos.x} ${pos.y}`) {
            case `${snakeHead.x} ${snakeHead.y}`:
                return `${orientation.replace('Arrow', 'head')}${model}`;
            case `${mouse__1.x} ${mouse__1.y}`:
                return 'm';
            case `${mouse__2.x} ${mouse__2.y}`:
                return 'm';
            case `${blood.x} ${blood.y}`:
                return 'blood';
            default:
                return;
        }
    };
    return <Cell class={handler()} />
}
