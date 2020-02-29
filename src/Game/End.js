import React, {useState} from 'react';
import css from './Game.module.css';
import {useHistory} from "react-router-dom";
import {store} from '../State';
import Tooltip from './Tooltip';

export default function End () {
    const [text, setText] = useState('NAME');
    const [tooltip, setTooltip] = useState(false);
    let history = useHistory();
    const input = React.createRef();


    function handleClick(e) {
        input.current.classList.remove(css.error);

        let value = e.target.value;
        let reg = value.match(/[a-zA-Z0-9]{0,10}/);
        setText(reg);
    }

    function submit(e) {
        e.preventDefault();
        if(text[0].length < 3) {
            input.current.classList.add(css.error);
            input.current.focus();
            setTooltip(true);
            return;
        }
        store.recordHighScore = text;
        history.push('/highScore');
    }

    return (
        <div className={css.bgEnd}>
            <div className={css.h1}>THE END</div>
            <Tooltip bool={tooltip} />
            <form onSubmit={(e) => submit(e)}>
                <input
                    ref={input}
                    onChange={(e) => handleClick(e)}
                    type='text'
                    className={css.form}
                    value={text}
                    placeholder='enter a name' />
            </form>
            <p className={css.p}>...and press ENTER</p>
        </div>
    )
}