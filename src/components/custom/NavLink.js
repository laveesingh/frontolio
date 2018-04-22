import React from 'react'
import { Link } from 'react-router-dom'

export const NavLink = ({children, ...props}) => (
  <Link {...props}>
    {children}
  </Link>
)

