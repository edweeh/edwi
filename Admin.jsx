import React, { useState, useEffect } from 'react';
import PetList from './PetList'; // Correcting the casing of PetList
import PetForm from './PetForm'; // Correcting the casing of PetForm
import axios from 'axios'; // Use axios or fetch for API requests

const Admin = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    fetchPets();
  }, []);

  const fetchPets = async () => {
    try {
      const response = await axios.get('/admin/pets'); // Replace with your API endpoint
      setPets(response.data);
    } catch (error) {
      console.error('Error fetching pets:', error);
    }
  };

  const addPet = async (newPetData) => {
    try {
      const response = await axios.post('/admin/pets', newPetData); // Replace with your API endpoint
      console.log('New Pet Added:', response.data);
      fetchPets(); // Refresh pet list after adding
    } catch (error) {
      console.error('Error adding pet:', error);
    }
  };

  // Other functions for updating/deleting pets can be added similarly

  return (
    <div>
      <h1>Admin - Pet Store</h1>
      <PetList pets={pets} />
      <PetForm addPet={addPet} />
      {/* Additional components for updating/deleting pets */}
    </div>
  );
};

export default Admin;
