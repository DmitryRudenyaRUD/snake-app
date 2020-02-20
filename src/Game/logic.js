import css from "./Cell.module.css";

export function handlerClasses(position, store) {
    const pos = position;
    const snake = store.snakeSegments;
    const head = store.snakeHead;
    const mouse__1 = store.mouse__1;
    const mouse__2 = store.mouse__2;
    const mouse__3 = store.mouse__3;

    snake.map((seg) => {
        if(seg.x === pos.x && seg.y === pos.y) return css.snake
    });

    switch (`${pos.x} ${pos.y}`) {
        case `${head.x} ${head.y}`:
            return css.head;
            break;
        case `${mouse__1.x} ${mouse__1.y}`:
            return css.mouse;
            break;
        case `${mouse__2.x} ${mouse__2.y}`:
            return css.mouse;
            break;
        case `${mouse__3.x} ${mouse__3.y}`:
            return css.mouse;
            break;
            default:
               return css.cell;
    }
}