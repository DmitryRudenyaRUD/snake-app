import React from 'react';
import css from './Menu.module.scss';
import {useHistory} from 'react-router-dom';


export default function ChooseSnake(props) {
    let history = useHistory();

    function choice(e) {
        props.store.chooseModel = e.target.dataset.num;
        props.store.recordSpeed = e.target.dataset.num;
        history.push('/game');
    }

    const fragments = [...new Array(12).keys()];
    return (
        <div className={css.bg}>{
            fragments.map((frag) => (
                    <div
                        key={frag}
                        onClick={choice}
                        className={css.icon}
                        data-num={frag + 1}>
                        <div className={css[`s${frag + 1}`]} data-num={frag + 1}/>
                        <div className={css.string} >SPEED</div>
                        <div className={css.scale}>{scale(frag)}</div>
                    </div>
                )
            )
        }
        </div>
    )
}

function scale(frag) {
    const number = frag < 3 ? 1  :
        frag < 5 ? 2 :
            frag < 7 ? 3 :
                frag < 10 ? 4 :
                    frag < 11 ? 5 : 6;
    return [...new Array(number).keys()].map(i => <div key={i} className={css.cell} />)
}