import React from 'react';
import { Provider } from 'react-redux';

import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';

import { store } from './todo/redux/store';
import { TodoPage } from './todo/components/todoPage/TodoPage';
import { About } from './about/components/about/About';
import { Footer } from './shared/components/footer/Footer';

import './App.scss';

function App() {
  const history = createBrowserHistory();

  return (
    <Provider store={store}>
      <div className="app">
        <h1>Todo app</h1>
        <hr></hr>
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={TodoPage}></Route>
            <Route exact path="/about" component={About}></Route>
          </Switch>

          <Footer />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
