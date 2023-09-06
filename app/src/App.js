import { useState } from 'react'
import './css/App.css';
import Home from './components/Home';
import BeerList from './components/BeerList';
import Header from './components/Header';


function App() {

  const [toggle, setToggle] = useState(false)
  
  function userClick(){
    console.log("toggled")
    setToggle(current => !current)
  }

  const Menu = ()=>{
    return(
      <div>
        <h1>Menu</h1>
        <BeerList />
      </div>
    )
  }
  return (
    <div className="App">
      <Header />
      <Home />
      <Menu />
    </div>
  );
}

export default App;
