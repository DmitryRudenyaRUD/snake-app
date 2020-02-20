import React from 'react';
import css from './Menu.module.css';
import {NavLink} from 'react-router-dom';

export function Menu(props) {

    return (
        <div className={css.container}>
            <NavLink
                to='/game'
                className={css.nav}
            >START</NavLink>
            <NavLink
                to='/chooseSnake'
                className={css.nav}
            >Choose Snake</NavLink>
            <NavLink
                to='/highScore'
                className={css.nav}

            >High Score</NavLink>
        </div>
    )
}

export function ChooseSnake() {
    return (
        <h1>ChooseSnake</h1>
    )
}

export function HighScore() {
    return (
        <h1>HighScore</h1>
    )
}