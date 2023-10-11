import React, { useState } from 'react';
import BeerList from './BeerList';
import Food from './Food';

const Menu=()=>{

  const [toggle, setToggle] = useState(false);

  function userClick() {
    console.log("toggled");
    setToggle(current => !current);
  }

  return(
    <div>
      <h1>Menu</h1>
      {toggle?<button className = "switch-menu-button1" onClick={userClick}>Fuel Your Gut</button>:
      <button className = "switch-menu-button2" onClick={userClick}>Fill Your Cup</button>}
      {toggle?<BeerList />:<Food />}
    </div>
  )
}

export default Menu