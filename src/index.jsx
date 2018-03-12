import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import './index.css';
import Layout from './views/Layout';
import CounterContainer from './components/Counter/CounterContainer'

export default class Root extends React.Component {
  render() {
    return (
      <Provider store={configureStore}>
        {/*<Layout />*/}
        <Layout>
          <CounterContainer />
        </Layout>
      </Provider>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById('root'));
