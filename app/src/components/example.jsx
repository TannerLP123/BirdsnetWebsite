import React from 'react'
import { useState } from 'react'
import BeerList from './BeerList'

const Main = () => {
  const [toggle, setToggle] = useState(false)
  
  function userClick(){

    console.log("toggled")
    setToggle(current => !current)
  }

  const Number1 = ()=>{
    return(
      <div>
        <h1>Meals</h1>
        <button onClick={userClick}>Beer List</button>
      </div>
    )
  }

  const Number2 = ()=>{
    return(
      <div>
        <BeerList />
        <button onClick={userClick}>Meals</button>
      </div>
    )
  }



  return(toggle?<Number1 />:<Number2/>)
}
export default Main