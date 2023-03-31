import React from 'react';

import { FaPlay, FaPause, FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const Player = ({
  songs,
  songInfo,
  setSongInfo,
  isPlaying,
  setIsPlaying,
  audioRef,
  currentSong,
  setCurrentSong,
}) => {
  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying((prevPlaying) => !prevPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying((prevPlaying) => !prevPlaying);
    }
  };

  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
    );
  };

  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };

  const skipTrackHandler = (direction) => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    if (direction === 'skip-forward') {
      setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    }
    if (direction === 'skip-back') {
      if ((currentIndex - 1) % songs.length === -1) {
        setCurrentSong(songs[songs.length - 1]);
        return;
      }
      setCurrentSong(songs[(currentIndex - 1) % songs.length]);
    }
  };

  return (
    <div className="min-h-[20vh] flex flex-col items-center justify-between">
      <div className="w-1/2 flex">
        <p className="p-4">{getTime(songInfo.currentTime)}</p>
        <input
          min={0}
          max={songInfo.duration || 0}
          value={songInfo.currentTime}
          onChange={dragHandler}
          type="range"
          className="flex-1 py-4"
        />
        <p className="p-4">{getTime(songInfo.duration)}</p>
      </div>
      <div className="flex justify-between items-center p-4 w-[30%]">
        <FaAngleLeft
          onClick={() => skipTrackHandler('skip-back')}
          size={30}
          className="cursor-pointer"
        />
        {isPlaying ? (
          <FaPause
            onClick={playSongHandler}
            size={30}
            className="cursor-pointer"
          />
        ) : (
          <FaPlay
            onClick={playSongHandler}
            size={30}
            className="cursor-pointer"
          />
        )}
        <FaAngleRight
          onClick={() => skipTrackHandler('skip-forward')}
          size={30}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Player;
