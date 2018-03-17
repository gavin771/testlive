import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Menu, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom'

class AppHeader extends Component {
  render () {
    return (
      <div>
        <Menu fixed='top' size='large'>
          <Container>
            <Menu.Item as={Link} header to={this.props.user ? "/dashboard" : "/"}>
              <Icon
                inverted
                circular
                size='large'
                name='tasks'
                color='green'
              />
              SheetRail
          </Menu.Item>
            <Menu.Menu position='right'>
              <Menu.Item name='settings' as={Link} to='/settings'>
                <Icon
                  name='setting'
                  color='black'
                />
                Settings
              </Menu.Item>
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