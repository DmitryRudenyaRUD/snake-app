import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {Menu, ChooseSnake, HighScore} from './Menu/Menu';
import End from './Game/End';
import Game from "./Game/Game";

function View(props) {

  return (
      <Switch >
          <Route exact path='/menu' component={Menu} />
          <Route path='/game' render={() => <Game {...props}  />} />
          <Route path='/chooseSnake' render={() => <ChooseSnake {...props} />} />
          <Route path='/highScore' component={HighScore} />
          <Route path='/end' component={End} />
          <Redirect from='/' to='/menu' />
      </Switch>
  );
}

export default View;
