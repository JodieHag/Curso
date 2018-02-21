import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from 'App';

configure({ adapter: new Adapter() });

describe('App', () => {
  it('should be able to run tests', () => {
    expect(1 + 2).toEqual(3);
  });
});

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  describe('render', () => {
    it('should render the header', () => {
      const app = shallow(<App />);
      const brand = <h1 className="App-title">Welcome to React</h1>;

       expect(app.contains(brand)).toEqual(true);
    });
  });
});
