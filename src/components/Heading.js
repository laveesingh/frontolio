import React from 'react'
import styled, {css} from 'styled-components'


let Heading1 = ({children, ...props}) => (
  <h2 {...props}> { children } </h2>
)


const Heading2 = ({children, ...props}) => (
  <h4 {...props}> { children } </h4>
)

const headingMixin = css`
  color: #666666;
  text-transform: uppercase;
  text-shadow: 2px 2px 5px #666666;
  font-family: Times New Roman;
`

export const Heading1 = styled(Heading1)`
  ${props => headingMixin}
`

export const Heading2 = styled(Heading2)`
  ${props => headingMixin}
`
