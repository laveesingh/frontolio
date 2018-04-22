import React from 'react'
import styled from 'styled-components'
import {NavLink} from './styled'

class Navbar extends React.Component {

  componentWillMount() {
    const pathname = this.props.location.pathname
    if (pathname.match('blog')) {
      this.setState({ selectedNav: 'blog' })
    } else if (pathname.match('portfolio')) {
      this.setState({ selectedNav: 'portfolio' })
    } else {
      this.setState({ selectedNav: 'tools' })
    }
  }

  render() {
    return (
      <div className={this.props.className}>
        <NavLink className={this.state.selectedNav === 'blog' ? 'selected' : ''} to='/blog/list'> blog </NavLink>
        <NavLink className={this.state.selectedNav === 'portfolio' ? 'selected' : ''} to='/portfolio'> portfolio </NavLink>
        <NavLink className={this.state.selectedNav === 'tools' ? 'selected': ''} to='/tools'> tools </NavLink>
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
