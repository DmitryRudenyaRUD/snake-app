export const store = {
    _fieldSize: 30,
    _columnSize: 13,
    _snakeSegments: [
        {x: 0, y: 6},
        {x: 1, y: 6},
        {x: 2, y: 6},
    ],
    _snakeHead: {x: 1, y: 15},
    _mouse__1: {x: 9, y: 15},
    _mouse__2: {x: 5, y: 15},
    _mouse__3: {x: 7, y: 15},
    _time:'0:00:00',

    get fieldSize() {
        return this._fieldSize
    },
    get columnSize() {
        return this._columnSize
    },
    get snakeSegments() {
        return this._snakeSegments
    },
    get snakeHead() {
        return this._snakeHead
    },
    get mouse__1() {
        return this._mouse__1
    },
    get mouse__2() {
        return this._mouse__2
    },
    get time () {
        return this._time
    },

    set recordTime(value) {
        this._time = value;
    }
};
