import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from '../reducers/index';

const middleware = applyMiddleware(thunk, promise());

export default createStore(reducers, {
  posts: {
    post: []
  }
}, composeWithDevTools(middleware));
