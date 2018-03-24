import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

class Navbar extends React.Component {
  render() {
    return (
      <div className={this.props.className}>
        <NavbarItem link='/blog' text='blog' />
        <NavbarItem link='/portfolio' text='portfolio' />
        <NavbarItem link='/tools' text='tools' />
      </div>
    )
  }
}

export default styled(Navbar)`
  & {
    background-color: white;
    height: 70px;
    box-shadow: 1px 1px 5px grey;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

let NavbarItem = props => <Link className={props.className} to={props.link}>{props.text}</Link>
NavbarItem = styled(NavbarItem)`
  & {
    font-weight: 650;
    color: #37a000;
    text-transform: uppercase;
    margin: 0px 25px;
    font-size: 24px;
    text-decoration: none;
  }
`
