import './css/App.css';
import Home from './components/Home';
import Example from './components/example';
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <Home />
        <Example />
      </header>
    </div>
  );
}

export default App;
