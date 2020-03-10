import React from 'react';
import { useHistory } from "react-router-dom";
import css from './Game.module.css';

export default function Back(props) {
    let history = useHistory();

    if(props.end) setTimeout(() => handleClick('/end'),400);

    function handleClick(str) {
        history.push(str);

        if(str === '/') {
            window.location.reload(false)
        }
    }

    return (
        <div onClick={() => handleClick('/')} className={css.exit}/>
    );
}
