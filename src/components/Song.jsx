import React from 'react';

const Song = ({ currentSong }) => {
  const { cover, name, artist } = currentSong;

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center">
      <img src={cover} alt="song cover" className="w-[20%] rounded-full" />
      <h2 className="pt-12 pr-4 pb-4 pl-4">{name}</h2>
      <h3 className="text-base">{artist}</h3>
    </div>
  );
};

export default Song;
