import './css/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import BeerList from './components/BeerList';
import Cocktails from './components/Cocktails';
import Food from './components/Food';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Header />} >
          <Route index element = {<Home />} />
          <Route path = "food" element = {<Food />} />
          <Route path = "beer" element = {<BeerList />} />
          <Route path = "ctails" element = {<Cocktails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;