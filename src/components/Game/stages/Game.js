import React from 'react';
import css from './Game.module.css';
import FieldGame from '../area/FieldGame';
import {time, orientation} from '../../../store/Reducer';
import Back from './Back';
import {Loading} from './Loading';

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.tick = this.tick.bind(this);
        this.isGameOver = this.isGameOver.bind(this);
        this.state =  {
            tact: 0,
            end:false
        };
        this.contain = React.createRef();
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            50
        );
        this.contain.current.focus();
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        let tact = this.state.tact;
        this.isGameOver();

        time(tact);
        tact = tact === 19 ? 0 : ++tact;

        this.setState({tact: tact})
    }

   isGameOver() {
        const head = this.props.store.snakeHead;

        for (let seg of this.props.store.snakeSegments) {
            if(seg.x === head.x && seg.y === head.y) {
                this.setState({end: true});
                clearInterval(this.timerID);
            }
        }

        if(head.x < 0 || head.x > this.props.store.fieldSize) {
            this.setState({end: true});
            clearInterval(this.timerID);
        }

        if(head.y < 0 || head.y > this.props.store.columnSize) {
            this.setState({end: true});
            clearInterval(this.timerID);
        }

    }

    render() {
        const Loading = React.lazy(() => import('./Loading'));
        return(
            <React.Suspense fallback={Loading}>
                <div tabIndex="0"
                     onKeyDown={(e) =>{ orientation(e.key)}}
                     className={css.bg}
                     ref={this.contain}>
                    <div className={css.container}>
                        <div className={css.score}/>
                        <span className={css.span}>{this.props.store.score}</span>
                        <div className={css.clock}/>
                        <span className={css.span}>{this.props.store.time}</span>
                        <Back end={this.state.end}/>
                    </div>
                    <FieldGame store={this.props.store}/>
                </div>
            </React.Suspense>

        )
    }
}