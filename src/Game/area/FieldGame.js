import React from 'react';
import css from './FieldGame.module.css';
import Cell from './Cell';


export default class FieldGame extends React.Component {

    render() {
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
                                    position={{x: x, y: y}}
                                    store={this.props.store}/>
                            ))}
                        </div>
                    ))
                }</div>
            </div>
        )
    }
}