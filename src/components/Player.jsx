import React, { useRef, useState } from 'react';

import { FaPlay, FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const Player = ({ currentSong, isPlaying, setIsPlaying }) => {
  const audioRef = useRef(null);

  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying((prevPlaying) => !prevPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying((prevPlaying) => !prevPlaying);
    }
  };

  const timeUpdateHandler = (e) => {
    const { currentTime, duration } = e.target;
    setSongInfo({
      ...songInfo,
      currentTime,
      duration,
    });
  };

  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
    );
  };

  const dragHandler = (e) => {};

  const [songInfo, setSongInfo] = useState({
    currentTime: null,
    duration: null,
  });

  return (
    <div className="min-h-[20vh] flex flex-col items-center justify-between">
      <div className="w-1/2 flex">
        <p className="p-4">{getTime(songInfo.currentTime)}</p>
        <input
          min={0}
          max={songInfo.duration}
          value={songInfo.currentTime}
          type="range"
          className="flex-1 py-4"
        />
        <p className="p-4">{getTime(songInfo.duration)}</p>
      </div>
      <div className="flex justify-between items-center p-4 w-[30%]">
        <FaAngleLeft size={30} className="cursor-pointer" />
        <FaPlay
          onClick={playSongHandler}
          size={30}
          className="cursor-pointer"
        />
        <FaAngleRight size={30} className="cursor-pointer" />
      </div>
      <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
      ></audio>
    </div>
  );
};

export default Player;
