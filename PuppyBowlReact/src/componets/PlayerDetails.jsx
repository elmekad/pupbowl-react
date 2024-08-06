import React from "react";
import './PlayerDetails.css'; // Make sure to import the CSS file

function PlayerDetails({ player, setSelectedPlayer }) {
  return (
    <div className="player-details">
      <button onClick={() => setSelectedPlayer(null)}>Back to all players</button>
      <h2>{player.name}</h2>
      <img className="player-image" src={player.imageUrl} alt={`A picture of ${player.name}`} />
      <p>{player.breed}</p>
      <p>ID: {player.id}</p>
      <p>Status: {player.status}</p>
    </div>
  );
}

export default PlayerDetails;
