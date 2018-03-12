import React, { Component } from 'react'
import { Container, Dropdown, Header, Menu, Icon, Divider } from 'semantic-ui-react'

class Dashboard extends Component {
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
              <Menu.Item name='logout' as='a' />
            </Menu.Menu>
          </Container>
        </Menu>

        <Container text style={{ marginTop: '7em' }} textAlign='center'>
          <Header as='h1'>Control Center</Header>
          <Divider />
        </Container>
      </div>
    )
  }
}

export default Dashboard