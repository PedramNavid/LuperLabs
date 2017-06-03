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
      <Header as='h1'>LuperLabs</Header>
    </Container>

    <Menu>
      <Menu.Item name='help' active={activeItem === 'help'} onClick={this.handleItemClick}>
        How can we help you?
      </Menu.Item>
        <Menu.Item name='about' active={activeItem === 'about'} onClick={this.handleItemClick}>
          About LuperLabs
        </Menu.Item>
         <Menu.Item name='contact' active={activeItem === 'contact'} onClick={this.handleItemClick}>
           Contact
         </Menu.Item>
      </Menu>
  <Segment inverted>
    <Header as="h2">How can we help you?</Header>
    <p>
      We can't offer help or support. But keep on truckin'.
    </p>
  </Segment>
  <Segment>
    <Header as="h2">About LuperLabs</Header>
    <Image src={luper_image_src} size='small' float='left' shape='circular' /> 
    <p>
      Created by luper.
    </p>
    </Segment>
    <Segment inverted>
      <Header as="h2">Contact</Header>
      <p>Please don't.</p>
    </Segment>
  </Container>
)
}
}

export default App;
