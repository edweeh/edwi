import React, { useState } from 'react';

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('home');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <nav>
      <ul>
        <li className={activeTab === 'home' ? 'active' : ''} onClick={() => handleTabClick('home')}>
          Home
        </li>
        <li className={activeTab === 'about' ? 'active' : ''} onClick={() => handleTabClick('about')}>
          About
        </li>
        <li className={activeTab === 'contact' ? 'active' : ''} onClick={() => handleTabClick('contact')}>
          Contact
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

