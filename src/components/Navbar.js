import React from 'react'
import styled from 'styled-components'
import {NavLink} from './styled'

class Navbar extends React.Component {
  render() {
    return (
      <div className={this.props.className}>
        <NavLink to='/blog' text='blog' />
        <NavLink to='/portfolio' text='portfolio' />
        <NavLink to='/tools' text='tools' />
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
