import React from 'react'
import {Heading2} from '../styled'

export const TextField = props => (
  <div className={props.className}>
    <Heading2>{props.label}</Heading2>
    <input type='text' onChange={props.onChange} value={props.value} />
  </div>
)

export const TextArea = props => (
  <div className={props.className}>
    <Heading2>{props.label}</Heading2>
    <textarea type='text' onChange={props.onChange} value={props.value} row={5}/>
  </div>
)

