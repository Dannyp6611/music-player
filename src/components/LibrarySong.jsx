import React from 'react';

const LibrarySong = ({
  songs,
  setSongs,
  song,
  setCurrentSong,
  audioRef,
  isPlaying,
}) => {
  const { name, cover, artist } = song;

  const songSelectHandler = () => {
    setCurrentSong(song);

    const newSongs = songs.map((s) => {
      if (s.id === song.id) {
        return {
          ...s,
          active: true,
        };
      }
      return {
        ...s,
        active: false,
      };
    });

    setSongs(newSongs);

    // check if song is playing
    if (isPlaying) {
      const playPromise = audioRef.current.play();
      playPromise.then(() => {
        audioRef.current.play();
      });
    }
  };

  return (
    <div
      onClick={songSelectHandler}
      className={`${
        song.active && 'bg-blue-100'
      } flex items-center pt-4 pr-8 pb-4 pl-8 cursor-pointer hover:bg-blue-200`}
    >
      <img src={cover} alt={name} className="w-[30%] rounded-full" />
      <div className="pl-4">
        <h3 className="text-base">{name}</h3>
        <h4 className="text-xs">{artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
