import React, { Component } from 'react'
import { Header, Divider, Container, Grid } from 'semantic-ui-react';

// Custom Components
import AppHeader from '../AppHeader'
import PersonalDetails from './PersonalDetails'
import TestRailDetails from './TestRailDetails'

class Settings extends Component {

  renderContent () {
    return (
      <Grid columns={2}>
        <Grid.Row>
          <Grid.Column mobile={16} tablet={16} computer={8} style={{marginBottom:'50px'}}>
            <PersonalDetails />
          </Grid.Column>
          <Grid.Column mobile={16} tablet={16} computer={8}>
            <TestRailDetails />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }

  render () {
    return (
      <div className="settings">
        <AppHeader />
        <Container text style={{ marginTop: '7em' }} textAlign='center'>
          <Header as='h1'>Settings</Header>
          <Divider />
        </Container>
        <Container style={{ marginTop: '3em' }}>
        {this.renderContent()}
        </Container>
      </div>
    )
  }
}

export default Settings