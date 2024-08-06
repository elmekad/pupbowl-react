import React, { useState } from "react";

function NewPlayerForm({ addNewPlayer }) {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewPlayer({ name, breed, imageUrl });
    setName("");
    setBreed("");
    setImageUrl("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </label>
      <label>
        Breed:
        <input type="text" value={breed} onChange={(e) => setBreed(e.target.value)} required />
      </label>
      <label>
        Image URL:
        <input type="url" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} required />
      </label>
      <button type="submit">Add New Player</button>
    </form>
  );
}

export default NewPlayerForm;
