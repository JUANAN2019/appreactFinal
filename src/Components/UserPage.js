import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';

const UserPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchRandomUsers = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/?results=4');
        const data = await response.json();
        setUsers(data.results);
      } catch (error) {
        console.log('Error al obtener los datos de usuarios aleatorios:', error);
      }
    };

    fetchRandomUsers();
  }, []);

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="container">
      <h1>Users of the world who have used our service</h1>
      <div className="button-container">
        <button className="refresh-button" onClick={handleRefresh}>
          Refresh
        </button>
      </div>
      <div className="grid-container">
        {users.map((user) => (
          <div className="grid-item" key={user.login.uuid}>
            <img src={user.picture.thumbnail} alt={user.name.first} />
            <span>
              {user.name.first} {user.name.last}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserPage;