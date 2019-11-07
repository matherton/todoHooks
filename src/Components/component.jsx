// component.jsx
import React from 'react'
 
export const CounterComponent = ({ count, onPlus, onMinus }) => (
  <div>
    <strong>Active: {count}</strong>
    <button type="button" onClick={onPlus}>+</button>
    <button type="button" onClick={onMinus}>-</button>
  </div>
)