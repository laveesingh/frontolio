import styled from 'styled-components'
import {NavLink} from '../custom'

let NavLink1 = styled(NavLink)`
  & {
    font-weight: 650;
    color: #37a000;
    text-transform: uppercase;
    margin: ${props => props.margin ? props.margin : '5px 25px'};
    padding: 10px;
    font-size: ${props => props.fontSize ? props.fontSize : '24px'};
    text-decoration: none;
    text-shadow: 2px 2px 5px #37a000;
    &:hover {
      background-color: #37a000;
      color: white;
    text-shadow: 2px 2px 5px #cccccc;
    }
  }
`

export {NavLink1 as NavLink}
