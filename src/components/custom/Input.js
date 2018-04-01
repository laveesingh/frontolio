import React from 'react'


export const TextField = props => (
  <div className={props.className}>
    <label>{props.label}</label>
    <input type='text' onChange={props.onChange} value={props.value} />
  </div>
)

export const TextArea = props => (
  <div className={props.className}>
    <label>{props.label}</label>
    <textarea type='text' onChange={props.onChange} value={props.value} row={5}/>
  </div>
)

