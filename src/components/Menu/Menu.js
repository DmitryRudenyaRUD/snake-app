import React from 'react';
import css from './Menu.module.scss';
import {Link} from 'react-router-dom';

export function Menu() {
    return (
        <div className={css.container}>
            <Link
                to='/game'
                className={css.nav}
            >START</Link>
            <Link
                to='/chooseSnake'
                className={css.nav}
            >Choose Snake</Link>
            <Link
                to='/highScore'
                className={css.nav}

            >High Score</Link>
        </div>
    )
}

