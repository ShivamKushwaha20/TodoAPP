import React from 'react'
import './Homepage.css'
import { AddTodo } from '../../Component/EditTodo'

const HomePage = () => {
  return (
    <>
      <div className='heading'>
        <p>Remember</p>
      </div>
      <div className='container'>
        <AddTodo />
      </div>
      <div className='cardContainer'>

      </div>

    </>
  )
}

export default HomePage
