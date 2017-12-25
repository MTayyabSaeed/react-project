import React from 'react';
import { ReactDOM, render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter, browserHistory } from 'react-router-dom';

import routes from './routes';

const element = (
    <AppContainer>
      <BrowserRouter history={browserHistory} routes={routes}/>
    </AppContainer>
);
export default ReactDOM.render(element, document.getElementById('app'));

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./routes', () => {
    const NextApp = require('./routes').default;
    render(
      <AppContainer>
        <NextApp/>
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
