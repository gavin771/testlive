import React, { Component } from 'react'
import { Segment, Header } from 'semantic-ui-react';

class TestRailDetails extends Component {
  render () {
    return (
      <div>
        <Header as='h3' attached='top'>
          <Header.Content>
            TestRail Details
          </Header.Content>
        </Header>

        <Segment raised color="teal" attached>

        </Segment>
      </div>
    )
  }
}

export default TestRailDetails