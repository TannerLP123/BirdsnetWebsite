import { useState } from 'react'
import './css/App.css';
import Home from './components/Home';
import Menu from './components/Menu'
import Header from './components/Header';


function App(){

  const [toggle, setToggle] = useState(false)

  function userClick(){
    console.log("toggled")
    setToggle(current => !current)
  }

  return (
    <div className="App">
      <Header/>
      <button onClick={userClick} >switch</button>
      {toggle?<Home />:<Menu />}
    </div>
  );
}

export default App;
