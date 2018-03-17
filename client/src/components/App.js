import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'

import * as actions from '../actions'
import Login from './Login'
import Dashboard from './Dashboard'
import Settings from './Settings'

class App extends Component {

  componentDidMount () {
    this.props.fetchUser();
  }

  render () {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Login} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route path="/settings" component={Settings} />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

function mapStateToProps ({ user }) {
  return { user };
}

export default connect(mapStateToProps, actions)(App);