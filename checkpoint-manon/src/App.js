import Header from './components/Header';
import GameList from './components/GameList';
import './App.css';
import GameDetails from './components/GameDetails';
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GameList />}> </Route>
          <Route path="/games/:id" element={<GameDetails />}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
