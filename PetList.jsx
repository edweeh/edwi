import React from 'react';

const PetList = ({ pets }) => {
  return (
    <div>
      <h2>Pet List</h2>
      <ul>
        {pets.map(pet => (
          <li key={pet.id}>
            {pet.name} - {pet.species}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PetList;
