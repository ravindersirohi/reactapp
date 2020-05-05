import React from 'react';
import './home.scss';
import ListProfiles from '../profile/ListProfiles';

const Home = () => {
  return (
    <div className="home">
      <h2>PROFILES</h2>
      <ListProfiles />
    </div>
  );
}

export default Home;