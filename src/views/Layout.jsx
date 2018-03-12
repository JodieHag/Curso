import React from 'react';
import Header from '../components/Header/Header'
import './Layout.css';

const Layout = (props) => (
  <div className="App">
    <Header />
    <main>
      {props.children}
    </main>
  </div>
);

export default Layout;
