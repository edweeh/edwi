// AdminPage.js
import React, { useState } from 'react';
import PetList from './PetList';
import AddPetForm from './Petform';

const AdminPage = () => {
  const [pets, setPets] = useState([]);

  const addPet = (newPet) => {
    setPets([...pets, newPet]);
  };

  return (
    <div>
      <h1>Admin Page</h1>
      <AddPetForm addPet={addPet} />
      <PetList pets={pets} />
    </div>
  );
};

export default AdminPage;
