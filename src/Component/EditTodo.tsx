import React from 'react'
import './Component.css'

export const AddTodo = () => {
  return (
    <div className='box'>
      <input className='todo-input' type='text' placeholder='Write your task' />
      <button className='todo-add-btn'>Add</button>
    </div>
  )
}

