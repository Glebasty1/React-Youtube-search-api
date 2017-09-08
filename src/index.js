import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import store from './store';

import App from './components/App/index';
import DetailPage from './components/DetailPage/index';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path='/' component={App} />
        <Route path='/movie/:id' component={DetailPage} />
        <Redirect from='*' to='/'/>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
