import React, { useState } from 'react';

import EpisodesList from './components/EpisodesList/index';
import Header from './components/Header/index';
import './App.css';

const App = () => {
  const [episodeToSearch, setEpisodeToSearch] = useState('');
  const onSearch = (episodeName) => {
    setEpisodeToSearch(episodeName);
  }

  
  return (
    <div className="App">
      <Header 
        onSearch={onSearch}
      />
      <EpisodesList
        episodeToSearch={episodeToSearch}
      />
    </div>
  );
}

export default App;
