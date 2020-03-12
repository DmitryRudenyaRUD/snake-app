export function time(store, originTime) {

    let [h, m, s] = store.time.split(':').map((item) => parseInt(item));

    if(Date.now() - originTime >= 1000) {
        [s, m] = s === 59 ? [0, ++m] : [++s, m];
        [h, m] = m === 60 ? [0, ++h] : [h, m];

        m = m < 10 ? '0' + m : m;
        s = s < 10 ? '0' + s : s;

        let time = `${h}:${m}:${s}`;

        store.recordTime = (time);
        return true;
    }
}

export function orientation(k, store) {

    if(k === ' ') store.pause = !store.pause;
    if(store.pause) return;

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

export function movementSnake(store) {
    const {snakeHead, snakeSegments} = store;
    const newSegment = {...snakeHead};

    snakeSegments.push(newSegment);

    grow(store) && snakeSegments.splice(0, 1);

    switch (store.orientation) {
        case 'ArrowRight':
            snakeHead.x += 1;
            break;
        case 'ArrowLeft':
            snakeHead.x -= 1;
            break;
        case 'ArrowUp':
            snakeHead.y -= 1;
            break;
        case 'ArrowDown':
            snakeHead.y += 1;
            break;
        default:
            return
    }
    store.locationSnake = [snakeSegments, snakeHead];
}

function grow(store) {
    const {snakeHead, mouse__1, mouse__2} = store;

    if(snakeHead.x === mouse__1.x && snakeHead.y === mouse__1.y) {
        blood(mouse__1, store);
        newLocationMouse('_mouse__1', store);
        handleScore(store);
        return false
    }
    if(snakeHead.x === mouse__2.x && snakeHead.y === mouse__2.y) {
        blood(mouse__2, store);
        newLocationMouse('_mouse__2', store);
        handleScore(store);
        return false
    }
    return true;
}

function newLocationMouse(value, store) {

    const {fieldSize, columnSize, snakeHead, mouse__1, mouse__2, snakeSegments} = store;

    const arrayOfObjects = [snakeHead, mouse__1, mouse__2, ...snakeSegments];
    const occupiedFields = [];

    arrayOfObjects.map(item => {
        occupiedFields.push({x:item.x, y:item.y})
    });

    const arrayY = [...new Array(columnSize).keys()];
    const arrayX = [...new Array(fieldSize).keys()];
    const arrayOFTables=[];

    arrayX.map(x => {
        arrayY.map(y => arrayOFTables.push({x, y}))
    });

    for( let i of arrayOFTables ) {
        for( let k of occupiedFields ) {
            if(i.x === k.x && i.y === k.y){
                let index = arrayOFTables.indexOf(i);
                arrayOFTables.splice(index, 1)
            }
        }
    }

    const indexOfNewLocation = Math.floor(1 + Math.random() * (arrayOFTables.length - 1));

    store[value] = arrayOFTables[indexOfNewLocation];
}

function handleScore(store) {
    store.recordScore = Math.ceil(1000 / store.speed)
}

function blood(m, store) {
    let {x, y} = m;
    let num = store.speed < 350 ? 3 : 2;

    switch (store.orientation) {
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
    store._blood = {x, y};
    setTimeout(() => store._blood = {x: -1, y: -1}, 500)
}

export function isGameOver(store) {
    const {snakeSegments, snakeHead, fieldSize, columnSize} = store;

    for (let seg of snakeSegments) {
        if(seg.x === snakeHead.x && seg.y === snakeHead.y) {
           return true
        }
    }

    if(snakeHead.x < 0 || snakeHead.x > fieldSize - 1) {
        return true
    }

    if(snakeHead.y < 0 || snakeHead.y > columnSize - 1) {
        return true
    }
}



