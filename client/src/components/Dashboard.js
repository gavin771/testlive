import React, { Component } from 'react'
import { Header, Divider, Container } from 'semantic-ui-react'

import AppHeader from './AppHeader'

class Dashboard extends Component {
  
  render () {
    return (
      <div className="dashboard">
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