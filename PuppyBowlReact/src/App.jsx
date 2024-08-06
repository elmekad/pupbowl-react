import React, { useState, useEffect } from "react";
import PlayerList from "./componets/PlayerList.jsx";
import NewPlayerForm from "./componets/NewPlayerForm.jsx";
import PlayerDetails from "./componets/PlayerDetails.jsx";
import SearchBar from "./componets/SearchBar.jsx";

const cohortName = "2109-UNF-HY-WEB-PT/players";
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;

function App() {
  const [players, setPlayers] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchAllPlayers = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setPlayers(data.data.players);
    } catch (err) {
      console.error("Uh oh, trouble fetching players!", err);
    }
  };

  const fetchSinglePlayer = async (playerId) => {
    try {
      const response = await fetch(`${API_URL}/${playerId}`);
      const data = await response.json();
      setSelectedPlayer(data.data.player);
    } catch (err) {
      console.error(`Oh no, trouble fetching player #${playerId}!`, err);
    }
  };

  const addNewPlayer = async (playerObj) => {
    try {
      await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(playerObj),
      });
      fetchAllPlayers();
    } catch (err) {
      console.error("Oops, something went wrong with adding that player!", err);
    }
  };

  const removePlayer = async (playerId) => {
    try {
      await fetch(`${API_URL}/${playerId}`, {
        method: "DELETE",
      });
      fetchAllPlayers();
    } catch (err) {
      console.error(`Whoops, trouble removing player #${playerId} from the roster!`, err);
    }
  };

  useEffect(() => {
    fetchAllPlayers();
  }, []);

  const filteredPlayers = players.filter(player =>
    player.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="App">
      <SearchBar setSearchQuery={setSearchQuery} />
      {selectedPlayer ? (
        <PlayerDetails player={selectedPlayer} setSelectedPlayer={setSelectedPlayer} />
      ) : (
        <PlayerList players={filteredPlayers} onPlayerSelect={fetchSinglePlayer} onDelete={removePlayer} />
      )}
      <NewPlayerForm addNewPlayer={addNewPlayer} />
    </div>
  );
}

export default App;