import styled, {css} from 'styled-components'
import {TextField, TextArea} from '../custom'

const inputMixin = css`
  & {
    display: flex;
    align-items: center;
    justify-content: center;
    label {
      text-transform: uppercase;
      margin: 0px 10px;
      font-size: 18px;
      color: #666666;
      font-weight: 600;
    }
    input, textarea {
      height: 30px;
      margin: 10px;
      border-radius: 2px;
      border: none;
      box-shadow: 1px 1px 5px #666666;
      padding: 0px 5px;
      width: 400px;
    }
  }
`

let TextField1 = styled(TextField)`
  ${props => inputMixin}
`

let TextArea1 = styled(TextArea)`
  ${props => inputMixin}
  textarea {
    height: 100px;
  }
`

export { TextField1 as TextField }
export { TextArea1 as TextArea }
