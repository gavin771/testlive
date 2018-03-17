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
          <Grid.Column>
            <PersonalDetails />
          </Grid.Column>
          <Grid.Column>
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