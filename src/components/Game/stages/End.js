import React, {useState} from 'react';
import css from './Game.module.css';
import {useHistory} from "react-router-dom";
import {store} from '../../../store/State';
import Tooltip from './Tooltip';

export default function End () {
    const [text, setText] = useState('NAME');
    const [tooltip, setTooltip] = useState(false);
    let history = useHistory();
    const input = React.createRef();

    function handleClick(e) {
        input.current.classList.remove(css.error);

        let value = e.target.value;
        let reg = value.match(/[a-zA-Z0-9]{0,7}/);
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

        fetch('http://www.mocky.io/v2/5e68e9022f000085cad8b0cb',{
            method: 'POST',
            body: JSON.stringify({[text]: store.score})
        })
        .then(data => console.log(JSON.stringify({[text]: `${store.score}/${store._steps}`}), data));

        localStorage.setItem([text], `${store.score}/${store._steps}`);

        history.push('/highScore');
    }

    return (
        <div className={css.bgEnd}>
            <div className={css.h1}>THE END</div>
            <Tooltip bool={tooltip} />
            <form onSubmit={(e) => submit(e)}>
                <input
                    autoFocus={true}
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
