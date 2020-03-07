import {useHistory} from "react-router-dom";
import React, {useState} from "react";
import css from "./Menu.module.css";

export default function HighScore() {
    let history = useHistory();
    const [fetching = [], changeState] = useState();

    const handleClick = (() => {
        history.push('/');
        window.location.reload(false);
    });

    const results = ((fetching) => {
        let array = [...fetching];
        for(let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            array.push({ [key]: localStorage.getItem(key) })
        }

        return array.sort(
            (a, b) => 1 / a[Object.keys(a)] - 1 / b[Object.keys(b)]
        )
    });


    if(fetching.length < 2) {
        fetch(' http://www.mocky.io/v2/5e5fe9c1330000800097b6f3?mocky-delay=1000ms',)
        .then(response => {
            if(response.status !== 200) {
                return Promise.reject(new Error(response.statusText))
            }
            return Promise.resolve(response)
        })
        .then(response => response.json())
        .then(data => changeState(data))
        .catch(error => {
            console.log(error);
            changeState([{'no result': 'the server is not responding'}])
        })
    }

    return (
        <div className={css.bgHS} >
            <div className={css.banner}/>
            <div className={css.exit} onClick={handleClick}/>
            <ul>{
                ( results(fetching) ).map((item, ind) => (
                    <li
                        key={ind}
                        className={css.li}>{
                        <>
                            <span>{`${ind + 1}. `}</span>
                            <span>{Object.keys(item)}</span>
                            <span className={css.score}>{item[Object.keys(item)]}</span>
                        </>
                    }</li>
                ))
            }</ul>
        </div>
    )
}