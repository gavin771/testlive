import React, { Component } from 'react'
import { Header, Segment, Grid, Button, Icon } from 'semantic-ui-react'

class Login extends Component {
  render () {
    return (
      <div className="login-form">
        <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
        <Grid
          textAlign='center'
          style={{ height: '100%' }}
          verticalAlign='middle'
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Segment padded>
              <Header as='h2' textAlign='center' content='SheetRail' />
              <p>Making it easier to collaborate on active test runs</p>
              <Button inverted color='red' href="/auth/google">
                <Icon name='google' /> Login with Google
                  </Button>
            </Segment>
          </Grid.Column>
        </Grid>
      </div >
    )
  }
}

export default Login