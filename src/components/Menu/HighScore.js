import {useHistory} from "react-router-dom";
import React, {useState} from "react";
import css from "./Menu.module.scss";

export default function HighScore() {
    let history = useHistory();
    const [fetching = [], changeState] = useState();

    const handleClick = (() => {
        history.push('/');
        window.location.reload(false);
    });

    if(fetching.length < 2) {
        fetch('http://www.mocky.io/v2/5e68ece52f00007559d8b102?mocky-delay=1000ms',)
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
            changeState([{'No result! The server is not responding': '!'}])
        })
    }

    const results = ((fetching) => {
        let array = [...fetching];
        for(let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            array.push({ [key]: localStorage.getItem(key) });
        }

        return array.sort(
            (a, b) => 1 / a[Object.keys(a)].match(/\d+/) - 1 / b[Object.keys(b)].match(/\d+/)
        )
    });

    return (
        <div className={css.bgHS} >
            <div className={css.banner}/>
            <div className={css.exit} onClick={handleClick}/>
            <span className={css.header}>SCORE STEPS</span>
            <ul>{
                ( results(fetching) ).map((item, ind) => (
                    <li
                        key={ind}
                        className={css.li}>{
                        <>
                            <span>{`${ind + 1}. `}</span>
                            <span>{Object.keys(item)}</span>
                            <span className={css.steps}>{item[Object.keys(item)].match(/\d+$/)}</span>
                            <span className={css.score}>{item[Object.keys(item)].match(/\d+/)}</span>
                        </>
                    }</li>
                ))
            }</ul>
        </div>
    )
}