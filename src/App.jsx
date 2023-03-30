import { useState } from 'react';
import data from './data';

// components
import { Song, Player } from './components';

function App() {
  const [songs, setSongs] = useState(data);

  console.log(songs);

  return (
    <div className="App">
      <Song />
      <Player />
    </div>
  );
}

export default App;
