import React from 'react';
import css from './FieldGame.module.css';
import Cell from './Cell';
import {handlerClasses} from './logic';

export default class FieldGame extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        const store = this.props.store;
        const fieldSize = this.props.store.fieldSize;
        const columnSize = this.props.store.columnSize;
        const fieldRow = [...new Array(fieldSize).keys()];
        const fieldColumn = [...new Array(columnSize).keys()];

        return (
            <div className={css.container}>
                <div className={css.column}>{
                    fieldColumn.map(y => (
                        <div className={css.row} key={y}>{
                            fieldRow.map(x => (
                                <Cell
                                    key={x}
                                    className={handlerClasses(
                                        {x: x, y: y},
                                        store
                                    )}/>
                            ))}
                        </div>
                    ))
                }</div>
            </div>
        )
    }
}