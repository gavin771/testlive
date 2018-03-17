import React, { Component } from 'react'
import { Segment, Header } from 'semantic-ui-react';

class PersonalDetails extends Component {
  render () {
    return (
      <div>
        <Header as='h3' attached='top'>
          <Header.Content>
            Personal Details
          </Header.Content>
        </Header>

        <Segment raised color="red" attached>

        </Segment>
      </div>
    )
  }
}

export default PersonalDetails