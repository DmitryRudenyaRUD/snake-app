import React from 'react';
import css from './Game.module.css';
import FieldGame from '../area/FieldGame';
import {time, orientation, movementSnake, isGameOver} from '../../../store/Reducer';
import ProgressBar from './ProgressBar';

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.tick = this.tick.bind(this);
        this.back = this.back.bind(this);
        this.end = this.end.bind(this);
        this.state = {
            originTime: null,
            dynamics: 0,
        };
        this.contain = React.createRef();
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            this.props.store.speed
        );
        this.setState({originTime: Date.now()});
        this.contain.current.focus();
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        const store = this.props.store;
        const originTime = this.state.originTime;

        isGameOver(store) && this.end();
        movementSnake(store);
        time( store, originTime ) && this.setState({originTime: Date.now()});

        this.setState({dynamics: (this.state.dynamics + 1)})
    }

    back() {
        this.props.history.push('/');
        window.location.reload(false)
    }

    end() {
        clearInterval(this.timerID);
        setTimeout(() => this.props.history.push('/end'),400);
        this.props.store._steps = this.state.dynamics;
    }

    render() {
        return (
            <div tabIndex="0"
                 onKeyDown={(e) => {
                     orientation(e.key, this.props.store)
                 }}
                 className={css.bg}
                 ref={this.contain}>
                <div className={css.container}>
                    <ProgressBar class={'score'} child={this.props.store.score} />
                    <ProgressBar class={'clock'} child={this.props.store.time} />
                    <ProgressBar class={'steps'} child={this.state.dynamics}  />
                    <div className={css.exit} onClick={this.back} />
                </div>
                <FieldGame store={this.props.store}/>
            </div>

        )
    }
}