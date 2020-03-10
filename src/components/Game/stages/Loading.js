import React from 'react';
import css from './Game.module.css';

export function Loading() {
    return (
        <div className={css.bgLoading}>
            <div className={css.loading}/>
            <p className={css.p}>LOADING...</p>
        </div>
    )
}