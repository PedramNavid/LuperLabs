/* eslint-disable max-len */

import React, { Component } from 'react'
import {Container, Header, Image, Segment, Menu} from 'semantic-ui-react'

class Intro extends Component {
    render() {
        return (
          <Container>
            <span>{this.state.width} x {this.state.height}</span>
          </Container>
        )
    }
    updateDimensions() {
        var w = window,
        d = document,
        documentElement = d.documentElement,
        body = d.getElementsByTagName('body')[0],
        width = w.innerWidth || documentElement.clientWidth || body.clientWidth,
        height = w.innerHeight|| documentElement.clientHeight|| body.clientHeight;

        //this.setState({width: width, height: height});
    }
    componentWillMount() {
        this.updateDimensions();
    }
    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions);
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }
}

export default Intro;
