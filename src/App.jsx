import { useState } from 'react';
import data from './data';

// components
import { Song, Player } from './components';

function App() {
  const [songs, setSongs] = useState(data);
  const [currentSong, setCurrentSong] = useState(songs[0]);

  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player currentSong={currentSong} />
    </div>
  );
}

export default App;
