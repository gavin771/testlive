import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Segment, Header, Grid, Image } from 'semantic-ui-react';

class PersonalDetails extends Component {

  componentDidMount () {

  }

  render () {
    //console.log(this.props.user)
    return (
      <div>
        <Header as='h3' attached='top'>
          <Header.Content>
            Personal Details
          </Header.Content>
        </Header>

        <Segment raised color="red" attached>
          <Grid columns="equal" divided>
            <Grid.Column width={6}>
              <Image src={this.props.user ? this.props.user.photo : ''} size='medium' circular />
            </Grid.Column>
            <Grid.Column verticalAlign='middle'>
              <Header as='h4' content='Name'/>
              {this.props.user ? this.props.user.displayName : ''}
              <Header as='h4' content='Email'/>
              {this.props.user ? this.props.user.email : ''}
            </Grid.Column>
          </Grid>
        </Segment>
      </div>
    )
  }
}

function mapStateToProps ({ user }) {
  return { user };
}

export default connect(mapStateToProps)(PersonalDetails)