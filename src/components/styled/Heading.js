import styled, {css} from 'styled-components'
import {Heading1, Heading2} from '../custom'

const headingMixin = css`
  color: #666666;
  text-transform: uppercase;
  text-shadow: 2px 2px 5px #666666;
  font-family: Times New Roman;
`

let Heading11 = styled(Heading1)`
  ${props => headingMixin}
`

let Heading22 = styled(Heading2)`
  ${props => headingMixin}
`

export {Heading11 as Heading1}
export {Heading22 as Heading2}
