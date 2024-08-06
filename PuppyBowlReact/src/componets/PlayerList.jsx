import React from "react";
import PlayerCard from "./PlayerCard.jsx";

function PlayerList({ players, onPlayerSelect, onDelete }) {
  return (
    <div className="player-list">
      {players.length > 0 ? (
        players.map(player => (
          <PlayerCard key={player.id} player={player} onPlayerSelect={onPlayerSelect} onDelete={onDelete} />
        ))
      ) : (
        <p>No players found</p>
      )}
    </div>
  );
}

export default PlayerList;
