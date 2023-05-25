import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AnimeComponent.css';

const AnimePage = () => {
  const [animeList, setAnimeList] = useState([]);
  const [selectedAnime, setSelectedAnime] = useState(null);

  useEffect(() => {
    const fetchAnimeList = async () => {
      try {
        const response = await axios.get('https://kitsu.io/api/edge/anime');
        const animes = response.data.data.slice(0, 9);
        setAnimeList(animes);
      } catch (error) {
        console.error('Error al obtener la lista de animes:', error);
      }
    };
  
    fetchAnimeList();
  }, []);

  const handleOpenModal = (anime) => {
    setSelectedAnime(anime);
  };

  const handleCloseModal = () => {
    setSelectedAnime(null);
  };

  return (
    <div className="container">
      <h1>Anime List</h1>
      <div className="anime-grid">
        {animeList.map((anime, index) => (
          <div
            className={`anime-card ${selectedAnime === anime ? 'selected' : ''}`}
            key={anime.id}
            style={{ animationDelay: `${index * 0.1}s` }}
            onClick={() => handleOpenModal(anime)}
          >
            <img src={anime.attributes.posterImage.small} alt={anime.attributes.canonicalTitle} />
            <span>{anime.attributes.canonicalTitle}</span>
          </div>
        ))}
      </div>
      {selectedAnime && (
        <div className="modal-anime">
          <div className="modal-content-anime">
            <h2>{selectedAnime.attributes.canonicalTitle}</h2>
            <p>{selectedAnime.attributes.synopsis}</p>
            <button onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnimePage;