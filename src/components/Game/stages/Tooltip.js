import React from 'react';
import css from './Game.module.css';

export default function Tooltip(props) {

        if(props.bool) {
            return(
                <div>
                    <div className={css.tooltip}>{
                        'Only English, numbers and at least 3 characters and not __NAME__!'
                    }
                    </div>
                    <div className={css.bubble1}/>
                    <div className={css.bubble2}/>
                    <div className={css.bubble3} />
                </div>
            )
        } else return null
}