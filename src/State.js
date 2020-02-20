export const store = {

    _fieldSize: 38,
    _columnSize: 17,
    _snakeSegments: [
        {x: 0, y: 0},
        {x: 1, y: 0},
        {x: 2, y: 0},
    ],
    _snakeHead: {x: 1, y: 15},
    _mouse__1: {x: 9, y: 15},
    _mouse__2: {x: 5, y: 15},
    _mouse__3: {x: 7, y: 15},

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
        return this._mouse__1
    },
    get mouse__3() {
        return this._mouse__1
    },



};
