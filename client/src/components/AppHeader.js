import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Menu, Icon } from 'semantic-ui-react';

class AppHeader extends Component {
  render () {
    return (
      <div>
        <Menu fixed='top' size='large'>
          <Container>
            <Menu.Item as='a' header>
              <Icon
                inverted
                circular
                size='large'
                name='tasks'
                color='green'
              />
              SheetRail
          </Menu.Item>
            <Menu.Item name='settings' as='a' />
            <Menu.Menu position='right'>
              <Menu.Item name='logout' as='a' href='/auth/logout' />
            </Menu.Menu>
          </Container>
        </Menu>
      </div>
    )
  }
}

function mapStateToProps ({ user }) {
  return { user };
}

export default connect(mapStateToProps, null)(AppHeader)