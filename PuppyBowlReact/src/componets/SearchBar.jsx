import React from "react";

function SearchBar({ setSearchQuery }) {
  return (
    <input
      type="text"
      placeholder="Search for a player..."
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  );
}

export default SearchBar;
