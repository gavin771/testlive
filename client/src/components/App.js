import React, { Component } from 'react'
import { connect } from 'react-redux';

import * as actions from '../actions'
import Login from './Login'
import Dashboard from './Dashboard'

class App extends Component {

  componentDidMount () {
    this.props.fetchUser();
  }

  render () {
    return (
      <div>
        {this.props.user ? <Dashboard /> : <Login />}
      </div>
    )
  }
}

function mapStateToProps ({ user }) {
  return { user };
}

export default connect(mapStateToProps, actions)(App);