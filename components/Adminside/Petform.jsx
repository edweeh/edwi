import React, { useState } from 'react';

const PetForm = ({ addPet }) => {
  const [petName, setPetName] = useState('');
  const [petSpecies, setPetSpecies] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addPet({ name: petName, species: petSpecies });
    setPetName('');
    setPetSpecies('');
  };

  return (
    <div>
      <h2>Add Pet</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Pet Name"
          value={petName}
          onChange={(e) => setPetName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Species"
          value={petSpecies}
          onChange={(e) => setPetSpecies(e.target.value)}
          required
        />
        <button type="submit">Add Pet</button>
      </form>
    </div>
  );
};

export default PetForm;