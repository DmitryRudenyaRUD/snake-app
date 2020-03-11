import React from 'react';
import {Loading} from './Loading';
import {useHistory} from "react-router-dom";

export function WrapperForGame(props) {
    const history = useHistory();
    const Game = React.lazy(() => new Promise( (resolve) => {
        setTimeout( () => resolve(import('./Game')), 1000)
    }));

    return(
        <React.Suspense fallback={<Loading />}>
            <Game store={props.store} history={history} />
        </React.Suspense>
    )
}