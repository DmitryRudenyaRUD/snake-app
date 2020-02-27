import React from 'react';
import { useHistory } from "react-router-dom";
import css from './Game.module.css';

export default function Back(props) {
    let history = useHistory();

    if(props.end) setTimeout(() => handleClick('/end'),1000);

    function handleClick(str = '/menu') {
        history.push(str);
    }

    return (
        <div onClick={handleClick} className={css.exit}/>
    );
}
