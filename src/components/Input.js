import React from 'react'
import styled, {css} from 'styled-components'

const inputMixin = css`
  & {
    display: flex;
    border: 1px solid red;
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


const RawTextField = props => (
  <div className={props.className}>
    <label>{props.label}</label>
    <input type='text' onChange={props.onChange} value={props.value} />
  </div>
)

export const TextField = styled(RawTextField)`
  ${props => inputMixin}
`

const RawTextArea = props => (
  <div className={props.className}>
    <label>{props.label}</label>
    <textarea type='text' onChange={props.onChange} value={props.value} row={5}/>
  </div>
)

export const TextArea = styled(RawTextArea)`
  ${props => inputMixin}
  textarea {
    height: 100px;
  }
`

