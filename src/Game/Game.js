import React from 'react';
import css from'./Game.module.css';
import FieldGame from './FieldGame';
import {time} from './logic';

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.tick = this.tick.bind(this);
        this.state =  {
            tact: 0
        }
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            100
        );
    }

    tick() {
        let tact = this.state.tact;
        time(this.props.renderFunc, tact);
        tact = tact === 9 ? 0 : ++tact;
        this.setState({tact: tact})
    }

    render() {
        return(
            <div className={css.bg}>
                <div className={css.container}>
                    <div className={css.score}/>
                    <span className={css.span}>1000</span>
                    <div className={css.clock}/>
                    <span className={css.span}>{this.props.store.time}</span>
                </div>
                <FieldGame store={this.props.store}/>
            </div>
        )
    }
}