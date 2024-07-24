import React from 'react'
import List from '../List/List'

function Goals() {

    const Fruits = [
        {
        Apple : "green"
    },
    {
        Apple : "red"
    },
    {
        Apple :"blue"
    }
]
  return (
    <div>
      <List  data = {Fruits}/>
    </div>
  )
}

export default Goals

