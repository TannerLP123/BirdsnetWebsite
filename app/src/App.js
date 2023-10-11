import { useState } from 'react'
import './css/App.css';
import Home from './components/Home';
import Menu from './components/Menu';
import Header from './components/Header';


function App(){

  const [toggle, setToggle] = useState(false);

  function userClick(){
    console.log("toggled");
    setToggle(current => !current);
  }

  return (
    <div className="App">
      <Header/>
      {toggle?<button onClick={userClick} >Home Page</button>:<button onClick={userClick}>View the Menu</button>}
      {toggle?<Menu />:<Home />}
    </div>
  );
}

export default App;