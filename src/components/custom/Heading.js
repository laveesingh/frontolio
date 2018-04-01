import React from 'react'


export const Heading1 = ({children, ...props}) => (
  <h2 {...props}> { children } </h2>
)

export const Heading2 = ({children, ...props}) => (
  <h4 {...props}> { children } </h4>
)

