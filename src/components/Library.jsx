import React from 'react';

import LibrarySong from './LibrarySong';

const Library = ({
  libraryStatus,
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
}) => {
  return (
    <div
      className={`fixed top-0 left-0 bg-white w-[20rem] h-full shadow-lg shadow-gray-600 overflow-scroll transform ${
        libraryStatus
          ? 'translate-x-0 opacity-1'
          : '-translate-x-full opacity-0'
      } transition-all duration-200 ease-in-out`}
    >
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
