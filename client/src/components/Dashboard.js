import React, { Component } from 'react'
import { Container, Header, Divider } from 'semantic-ui-react';

import AppHeader from './AppHeader';

class Dashboard extends Component {
  render () {
    return (
      <div>
        <AppHeader />

        <Container text style={{ marginTop: '7em' }} textAlign='center'>
          <Header as='h1'>Control Center</Header>
          <Divider />
        </Container>
      </div>
    )
  }
}

export default Dashboard