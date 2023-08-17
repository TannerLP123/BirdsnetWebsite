import React from 'react'

const Main = () => {

  function conditional(){
    num = 1;
    if(num == 1){ return true
    }else{ return false}
  }

  const Number1 = ()=>{
    return(
      <div>
        Number 1
      </div>
    )
  }

  const Number2 = ()=>{
    return(
      <div>
        Number 2
      </div>
    )
  }



  return(conditional?<Number1 />:<Number2/>)
}
export default Main