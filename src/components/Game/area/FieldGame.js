import React from 'react';
import css from './articles.module.scss';
import {WrapperForCell} from '../area/WrapperForCell';

export default function FieldGame(props) {

    const fieldSize = props.store.fieldSize;
    const columnSize = props.store.columnSize;
    const fieldRow = [...new Array(fieldSize).keys()];
    const fieldColumn = [...new Array(columnSize).keys()];

    return (
        <div className={css.container}>
            <div className={css.column}>{
                fieldColumn.map(y => (
                    <div className={css.row} key={y}>{
                        fieldRow.map(x => (
                            <WrapperForCell
                                key={x}
                                position={{x: x, y: y}}
                                store={props.store}
                            />
                        ))}
                    </div>
                ))
            }</div>
        </div>
    )
}
