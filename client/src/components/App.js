import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import { Container } from 'semantic-ui-react';

import * as actions from '../actions'
import Login from './Login'
import Dashboard from './Dashboard'
import AppHeader from './AppHeader'
import Settings from './Settings'

class App extends Component {

  componentDidMount () {
    this.props.fetchUser();
  }

  renderView (user) {
    switch (this.props.user) {
      case null:
        return;
      case false:
        return (<Login />)
      default:
        return (<Dashboard />)
    }
  }

  render () {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            {this.props.user ? <AppHeader /> : null}
            <Container text style={{ marginTop: '7em' }} textAlign='center'>

              <Route exact path="/" component={Login} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route path="/settings" component={Settings} />

            </Container>
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