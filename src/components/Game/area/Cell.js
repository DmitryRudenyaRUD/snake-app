import React from 'react';
import css from './articles.module.scss';


export default function Cell(props) {
    return <div className={css.cell}>{
        props ? <div className={css[props.class]}/> : null
    }</div>
}