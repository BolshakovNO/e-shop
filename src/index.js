import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import injectTapEventPlugin from 'react-tap-event-plugin'

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store, { history } from 'store/Store'

import './index.css'

injectTapEventPlugin();

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <App />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.querySelector('#root')
);
registerServiceWorker();
