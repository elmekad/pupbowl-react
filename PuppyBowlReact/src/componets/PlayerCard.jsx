import React from "react";
import './PlayerCard.css';  

function PlayerCard({ player, onPlayerSelect, onDelete }) {
  return (
    <div className="player-card">
      <h2>{player.name}</h2>
      <img className="player-image" src={player.imageUrl} alt={`A picture of ${player.name}`} />
      <p>{player.breed}</p>
      <button onClick={() => onPlayerSelect(player.id)}>See details</button>
      <button onClick={() => onDelete(player.id)}>Remove from roster</button>
    </div>
  );
}

export default PlayerCard;
