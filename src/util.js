export const playAudio = (isPlaying, audioRef) => {
  if (isPlaying) {
    const playPromise = audioRef.current.play();
    playPromise.then(() => {
      audioRef.current.play();
    });
  }
};
