/* eslint-disable max-len */

import React, { Component } from 'react'
import {Container, Header, Image, Segment, Menu} from 'semantic-ui-react'

const intro_image_src = 'assets/images/raccoon_big.jpg'

class Intro extends Component {
  render() {
  
  return (
  <Container>
    <Image src={intro_image_src} size='large' shape='circular' centered/>
  </Container>
  )
  }
}

export default Intro;
