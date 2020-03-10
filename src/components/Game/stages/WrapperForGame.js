import React from 'react';
import {Loading} from './Loading';

export function WrapperForGame(props) {
    const Game = React.lazy(() => new Promise( (resolve) => {
        setTimeout( () => resolve(import('./Game')), 2000)
    }));

    return(
        <React.Suspense fallback={<Loading />}>
            <Game store={props.store} />
        </React.Suspense>
    )
}