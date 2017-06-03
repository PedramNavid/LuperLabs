/* eslint-disable max-len */

import React, { Component } from 'react'
import { Container, Header, Image, Segment, Menu} from 'semantic-ui-react'

const luper_image_src = 'assets/images/luper.jpg'

class App extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
  <Container>
    <Container>
      <Header as='h1'>luperlabs</Header>
    </Container>

    <Menu>
      <Menu.Item name='help' active={activeItem === 'help'} onClick={this.handleItemClick}>
        how can we help you?
      </Menu.Item>
      <Menu.Item name='about' active={activeItem === 'about'} onClick={this.handleItemClick}>
        about us
      </Menu.Item>
      <Menu.Item name='members' active={activeItem === 'members'} onClick={this.handleItemClick}>
        members
      </Menu.Item>
      <Menu.Item name='contact' active={activeItem === 'contact'} onClick={this.handleItemClick}>
        contact
      </Menu.Item>
    </Menu>
    <Segment>
    hello
    </Segment>
  </Container>
)
}
}

export default App;
