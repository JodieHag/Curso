import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import './index.css';
import App from './App';

export default class Root extends React.Component {
  render() {
    return (
      <Provider store={configureStore}>
        <App />
      </Provider>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById('root'));
