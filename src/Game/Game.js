import React from 'react';
import css from'./Game.module.css';
import FieldGame from './FieldGame';

export default class Game extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        return(
            <div className={css.bg}>
                <h1 className={css.h1}>1000</h1>
                <FieldGame store={this.props}/>
            </div>
        )
    }
}