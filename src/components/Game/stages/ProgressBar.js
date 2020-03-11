import React from 'react';
import css from "./Game.module.css";

export default function ProgressBar(props) {
    return (
        <>
            <div className={css[props.class]}/>
            <span className={css.span}>{props.child}</span>
        </>
    )
}