import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {Menu} from './components/Menu/Menu';
import End from './components/Game/stages/End';
import ChooseSnake from './components/Menu/ChooseSnake';
import HighScore from './components/Menu/HighScore';
import {WrapperForGame} from './components/Game/stages/WrapperForGame'

function Routes(props) {

  return (
      <Switch >
          <Route exact path='/menu' component={Menu} />
          <Route path='/game' render={() => <WrapperForGame {...props}  />} />
          <Route path='/chooseSnake' render={() => <ChooseSnake {...props} />} />
          <Route path='/highScore' component={HighScore} />
          <Route path='/end' component={End} />
          <Redirect from='/' to='/menu' />
      </Switch>
  );
}

export default Routes;
