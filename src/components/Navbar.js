import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {Grid, Col, Row} from 'react-bootstrap'

class Navbar extends React.Component {

  render() {
    return (
      <Grid fluid className={this.props.className}>
        <Row>
          <Col md={5}>
            <NavLink 
              to='/'>
              laveesingh.com
            </NavLink>
          </Col>
          <Col mdOffset={2} md={1}>
            <NavLink 
              to='/blog/list'>
              Blog
            </NavLink>
          </Col>
          <Col md={1}>
            <NavLink 
              to='/portfolio'>
              About
            </NavLink>
          </Col>
          <Col md={1}>
            <NavLink 
              to='/tools'>
              Tools
            </NavLink>
          </Col>
          <Col md={1}>
            <NavLink 
              to='/contact'>
              Contact
            </NavLink>
          </Col>
        </Row>
      </Grid>
    )
  }
}

const NavLink = styled(Link)`
  & {
    font-size: 20px;
    color: #eeeeee;
    font-weight: 600;
    &:focus {
      color: #eeeeee;
      text-decoration: none;
    }
    &:hover {
      color: #eeeeee;
      text-decoration: underline;
    }
  }
  
`

export default styled(Navbar)`
  & {
    background-color: white;
    background-image: linear-gradient(312deg, #14134e 0%, #512d5a 68%, #843b61 100%);
    height: 60px;
    box-shadow: 1px 1px 5px grey;
    .row {
      height: 50px;
      margin: 5px;
      padding: 10px;
    }
  }
`
