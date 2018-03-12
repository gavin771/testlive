import React, { Component } from 'react'
import { connect } from 'react-redux';

import * as actions from '../actions'
import Login from './Login'
import Dashboard from './Dashboard'

class App extends Component {

  componentDidMount () {
    this.props.fetchUser();
  }

  renderView (user) {
    switch (this.props.user) {
      case null:
        return;
      case false:
        return ( <Login /> )
      default:
        return ( <Dashboard /> )
    }
  }

  render () {
    return (
      <div>
        {this.renderView(this.props.user)}
      </div>
    )
  }
}

function mapStateToProps ({ user }) {
  return { user };
}

export default connect(mapStateToProps, actions)(App);