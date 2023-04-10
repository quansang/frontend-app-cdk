import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import { Navbar } from 'react-bootstrap';
import Routes from './Routes';

import './App.css';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className='App container'>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to='/'>Simple App</Link>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        <Routes />
      </div>
    );
  }
}

export default withRouter(App);
