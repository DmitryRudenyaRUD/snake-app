import React from 'react';
import css from './Cell.module.css';
import {handler} from '../../Reducer';


export default function Cell(props) {
    return <div className={css.cell}>{handler(props)}</div>
}