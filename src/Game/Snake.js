import React from 'react';
import css from './articles.module.css';

export default function Snake(props) {

    return(
        <div className={css[`snake${props.id}`]} />
    )
}