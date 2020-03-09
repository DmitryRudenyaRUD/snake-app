import {store} from './State'

export function time(tact) {

    let [h, m, s] = store.time.split(':').map((item) => parseInt(item));

    movementSnake(tact);

    if(tact === 19) {
        [s, m] = s === 59 ? [0, ++m] : [++s, m];
        [h, m] = m === 60 ? [0, ++h] : [h, m];

        m = m < 10 ? '0' + m : m;
        s = s < 10 ? '0' + s : s;
        let time = `${h}:${m}:${s}`;

        store.recordTime = (time);
    }
}

export function orientation(k) {
    if(k === 'ArrowUp' && store.orientation !== 'ArrowDown') {
        store.recordOrientation = k
    }
    if(k === 'ArrowDown' && store.orientation !== 'ArrowUp') {
        store.recordOrientation = k
    }
    if(k === 'ArrowRight' && store.orientation !== 'ArrowLeft') {
        store.recordOrientation = k
    }
    if(k === 'ArrowLeft' && store.orientation !== 'ArrowRight') {
        store.recordOrientation = k
    }
}

function movementSnake(tact) {
    let head = store.snakeHead;
    let snake = store.snakeSegments;
    let newSegment = {...head};

    if(tact % store.speed === 0) {
        snake.push(newSegment);
        grow() && snake.splice(0, 1);

        switch (store.orientation) {
            case 'ArrowRight':
                head.x += 1;
                break;
            case 'ArrowLeft':
                head.x -= 1;
                break;
            case 'ArrowUp':
                head.y -= 1;
                break;
            case 'ArrowDown':
                head.y += 1;
                break;
            default:
                return
        }
        store.locationSnake = [snake, head];
    }
}

function grow() {
    const head = store.snakeHead;
    const mouse__1 = store.mouse__1;
    const mouse__2 = store.mouse__2;
    const snake = store.snakeSegments;

    const array = [head, mouse__1, mouse__2, ...snake];

    if(head.x === mouse__1.x && head.y === mouse__1.y) {
        blood(mouse__1, store.orientation);
        locationMouse('_mouse__1', array);
        handleScore();
        return false
    }
    if(head.x === mouse__2.x && head.y === mouse__2.y) {
        blood(mouse__2, store.orientation);
        locationMouse('_mouse__2', array);
        handleScore();
        return false
    }
    return true;
}

function locationMouse(value, array) {
    const x = Math.floor(1 + Math.random() * (store.fieldSize - 1));
    const y = Math.floor(1 + Math.random() * (store.columnSize - 2));

    for (let seg of array) {
        if(seg.x === x && seg.y === y) return locationMouse(value, array)
    }
    store[value].x = x;
    store[value].y = y;
}

function handleScore() {
    store.recordScore = Math.ceil(10 / store.speed)
}

function blood(m, orientation) {
    let x = m.x;
    let y = m.y;
    let num = store.speed < 4 ? 3 : 2;

    switch(orientation) {
        case 'ArrowRight':
            x += num;
            break;
        case 'ArrowLeft':
            x -= num;
            break;
        case 'ArrowUp':
            y -= num;
            break;
        case 'ArrowDown':
            y += num;
            break;
        default:
            return;
    }
    store._blood = {x: x,  y: y};
    setTimeout( () => store._blood = {x: -1,  y: -1}, 500)
}





