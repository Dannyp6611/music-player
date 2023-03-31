import React from 'react';

import LibrarySong from './LibrarySong';

const Library = ({ songs, setCurrentSong, audioRef, isPlaying, setSongs }) => {
  return (
    <div className="fixed top-0 left-0 bg-white w-[20rem] h-full shadow-lg shadow-gray-600 overflow-scroll">
      <h2 className="pl-8">Library</h2>
      <div className="">
        {songs.map((song) => (
          <LibrarySong
            setCurrentSong={setCurrentSong}
            key={song.id}
            songs={songs}
            setSongs={setSongs}
            song={song}
            audioRef={audioRef}
            isPlaying={isPlaying}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
