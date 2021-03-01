import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import PlayerProfile from './Components/PlayerProfile/PlayerProfile';
import React, { useEffect, useState } from 'react';
import playerInfo from '../src/data/playerInfo.json';
import Club from '../src/Components/Club/Club';
import '../src/Components/Club/Club.css';

function App() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    setPlayers(playerInfo);
  }, [])

  const [club, setClub] = useState([]);
  const handleAddPlr = (player) => {
    const newPlayer = [...club, player];
    setClub(newPlayer);
  }

  return (
    <div className="body">
      <h1 className="d-flex justify-content-center">Select Players for your Club</h1>

      <div className="playerContainer">
        <div>
          {
            players.map(plr => <PlayerProfile handleAddPlr={handleAddPlr} player={plr}></PlayerProfile>)
          }
        </div>
        <div className="clubInfo">
          {
            <Club club={club}></Club>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
