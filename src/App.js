/* eslint-disable max-len */

import React, { Component } from 'react'
import {Container, Header, Image, Segment, Menu} from 'semantic-ui-react'
import Intro from './intro'
import Help from './help'
import About from './about'
import Members from './members'
import Contact from './contact'

class App extends Component {
  state = { }

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
    <Segment hidden={activeItem}>
      <Intro />
    </Segment>
    <Segment hidden={activeItem !=='help'}>
      <Help />
    </Segment>
    <Segment hidden={activeItem !=='about'}>
      <About />
    </Segment>
    <Segment hidden={activeItem !=='members'}>
      <Members />
    </Segment>
    <Segment hidden={activeItem !=='contact'}>
      <Contact />
    </Segment>
  </Container>
)
}
}

export default App;
