import styled from 'styled-components'
import {Button} from '../custom'

let Button1 = styled(Button)`
  & {
    height: 40px;
    border: none;
    box-shadow: 0px 0px 10px grey;
    background-color: #37a000;
    color: white;
    font-weight: 600;
    font-size: 18px;
    cursor: pointer;
    padding: 0px 25px;
    margin: 20px
    &:hover {
      opacity: 0.8;
    }
  }
`

export {Button1 as Button}

