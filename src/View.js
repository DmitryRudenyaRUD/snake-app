import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import {Menu, ChooseSnake, HighScore} from './Menu/Menu';
import Game from "./Game/Game";

function View(props) {

  return (
      <Switch>
          <Route exact path='/menu' component={Menu} />
          <Route path='/game' render={() => <Game {...props.store} />}  />
          <Route path='/chooseSnake' component={ChooseSnake} />
          <Route path='/highScore' component={HighScore} />
          <Redirect from='/' to='/menu' />
      </Switch>
  );
}

export default View;
