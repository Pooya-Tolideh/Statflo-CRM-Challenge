//Setup File

//react imports
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//redux imports
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';

//theme imports
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import CustomTheme from '../style/custom-theme.js';
import injectTapEventPlugin from 'react-tap-event-plugin';

import MainViewContainer from './containers/mainViewContainer.js';

injectTapEventPlugin();

const App = () => (
  <MuiThemeProvider muiTheme={CustomTheme}>
    <MainViewContainer />
  </MuiThemeProvider>

);

const store = createStore(reducers);

ReactDOM.render(
<Provider store={store}>
    <App/>
</Provider>
  , document.querySelector('.container'));




