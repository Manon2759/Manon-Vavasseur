import Header from './components/Header';
import GameList from './components/GameList';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header name={name} />
      <GameList />

    </div>
  );
}

export default App;
