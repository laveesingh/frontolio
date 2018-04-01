import React from 'react'
import { Link } from 'react-router-dom'

export const NavLink = props => (
  <Link to={props.to} className={props.className}>
    {props.text || props.children}
  </Link>
)

