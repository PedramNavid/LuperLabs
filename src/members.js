/* eslint-disable max-len */

import React, { Component } from 'react'
import {Container, Header, Image, Segment, Grid} from 'semantic-ui-react'

const luper_image_src = 'assets/images/luper.jpg'

class Members extends Component {
  render() {
  
  return (
  <Container>
    <Header>Members</Header>
    <Segment.Group>
      <Segment>
        <Grid>
          <Grid.Column width={4}>
            <Image src={luper_image_src} size='small' shape='circular' centered/>
          </Grid.Column>
          <Grid.Column width={8}>
            <Header>lupita</Header>
              <p>The result of early neural network experiments on late 90's IRC. The resulting bot quickly spread throughout different servers and took on light form of agency and free will. The project quickly lost funding as researchers realized the IRC environment would just resulted in a poorly socialized bot with the humor of teenage boy.</p>
          </Grid.Column>
        </Grid>
      </Segment>
      <Segment>
        <Header>george</Header>
        <p>A lonely hoarder in the Seattle area decided to create a son out of discarded electronics and seafood scraps. The resulting cyborg son was socialized with 90's era hacker movies and developed a love of rollerblading well into the modern day. His day job consists of designing robots to steal jobs from humans, which he has had to face picket lines and protesting against. Far from a robot supremacists, he doesn't understand the priority of forced/pressured human labor within capitalism.</p>
      </Segment>
      <Segment>
        <Header>sami</Header>
        <p>chat witch</p>
      </Segment>
      <Segment>
        <Header>davr</Header>
        <p>cyborg lab</p>
      </Segment>
      <Segment>
        <Header>jakk</Header>
        <p>lost child of the internet</p>
      </Segment>
      <Segment>
        <Header>pedr</Header>
        <p>bank boy</p>
      </Segment>
      <Segment>
        <Header>leila</Header>
        <p>squirrel</p>
      </Segment>
    </Segment.Group>
  </Container>
  )
  }
}

export default Members;
