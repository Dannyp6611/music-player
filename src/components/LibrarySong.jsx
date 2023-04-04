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

  const songSelectHandler = async () => {
    await setCurrentSong(song);

    // Add active song
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
      audioRef.current.play();
    }
  };

  return (
    <div
      onClick={songSelectHandler}
      className={`${
        song.active && 'bg-pink-400'
      } flex items-center pt-4 pr-8 pb-4 pl-8 cursor-pointer hover:bg-pink-300 transition-colors duration-500 ease`}
    >
      <img src={cover} alt={name} className="w-[30%] rounded-full" />
      <div className="pl-4">
        <h3 className="text-base font-bold text-gray-800">{name}</h3>
        <h4 className="text-xs font-bold text-gray-600">{artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
