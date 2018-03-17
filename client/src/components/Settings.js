import React, { Component } from 'react'
import { Header, Divider, Container } from 'semantic-ui-react';

import AppHeader from './AppHeader'

class Settings extends Component {
  render () {
    return (
      <div className="settings">
        <AppHeader />
        <Container text style={{ marginTop: '7em' }} textAlign='center'>
          <Header as='h1'>Settings</Header>
          <Divider />
        </Container>
      </div>
    )
  }
}

export default Settings