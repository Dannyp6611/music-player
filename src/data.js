import { v4 as uuidv4 } from 'uuid';

import SummerTime from './audio_files/summertime-sadness.mp3';
import Mariners from './audio_files/mariners.mp3';
import DoinTime from './audio_files/doin-time.mp3';
import CinnamonGirl from './audio_files/cinnamon-girl.mp3';
import FuckIt from './audio_files/fuck-it.mp3';
import Love from './audio_files/love.mp3';
import WhiteMustang from './audio_files/white-mustang.mp3';
import VideoGames from './audio_files/video-games.mp3';
import Norman from './audio_files/norman-fucking-rodwell.mp3';
import Happiness from './audio_files/happiness-butterfly.mp3';
import LSD from './audio_files/L$D.mp3';

const myMusic = [
  {
    name: 'SummerTime Sadness',
    cover:
      'https://cdns-images.dzcdn.net/images/cover/4c2c6143c3e83a01ea73517c57d1d138/500x500.jpg',
    artist: 'Lana Del Rey',
    audio: SummerTime,
    color: ['#205950', '#2ab3bf'],
    id: uuidv4(),
    active: true,
  },
  {
    name: 'Mariners Apartment Complex',
    cover:
      'https://media.pitchfork.com/photos/5b9965ecec087f2ca7e0b15d/1:1/w_500,h_500,c_limit/Mariners%20Apartment%20Complex%20cover.jpg',
    artist: 'Lana Del Rey',
    audio: Mariners,
    color: ['#EF8EA9', '#ab417f'],
    id: uuidv4(),
    active: false,
  },
  {
    name: 'Fuck it, I love you',
    cover: 'https://i.redd.it/1jwk396x7zi31.jpg',
    artist: 'Lana Del Rey',
    audio: FuckIt,
    color: ['#CD607D', '#c94043'],
    id: uuidv4(),
    active: false,
  },
  {
    name: 'Norman Fucking Rockwell',
    cover:
      'https://www.interviewmagazine.com/wp-content/uploads/2019/07/nfr.png',
    artist: 'Lana Del Rey',
    audio: Norman,
    color: ['#EF8EA9', '#ab417f'],
    id: uuidv4(),
    active: false,
  },
  {
    name: 'Video Games',
    cover: 'https://i.scdn.co/image/ab67616d0000b273a1c37f3fd969287c03482c3b',
    artist: 'Lana Del Rey',
    audio: VideoGames,
    color: ['#CD607D', '#c94043'],
    id: uuidv4(),
    active: false,
  },
  {
    name: 'Cinnamon Girl',
    cover: 'https://i1.sndcdn.com/artworks-000502686648-t2jc3m-t500x500.jpg',
    artist: 'Lana Del Rey',
    audio: CinnamonGirl,
    color: ['#205950', '#2ab3bf'],
    id: uuidv4(),
    active: false,
  },
  {
    name: 'White Mustang',
    cover: 'https://i1.sndcdn.com/artworks-000236606780-nwncdc-t500x500.jpg',
    artist: 'Lana Del Rey',
    audio: WhiteMustang,
    color: ['#205950', '#2ab3bf'],
    id: uuidv4(),
    active: false,
  },
  {
    name: 'Love',
    cover:
      'https://upload.wikimedia.org/wikipedia/en/8/8b/Lana_Del_Rey_-_Love.png',
    artist: 'Lana Del Rey',
    audio: Love,
    color: ['#205950', '#2ab3bf'],
    id: uuidv4(),
    active: false,
  },
  {
    name: 'Happiness Is A Butterfly',
    cover: 'https://live.staticflickr.com/65535/50644440438_cbf792dba8_b.jpg',
    artist: 'Lana Del Rey',
    audio: Happiness,
    color: ['#205950', '#2ab3bf'],
    id: uuidv4(),
    active: false,
  },
  {
    name: 'Doin Time',
    cover: 'https://i1.sndcdn.com/artworks-000547703550-khysia-t500x500.jpg',
    artist: 'Lana Del Rey',
    audio: DoinTime,
    color: ['#205950', '#2ab3bf'],
    id: uuidv4(),
    active: false,
  },
  {
    name: 'L$D',
    cover: 'https://i1.sndcdn.com/artworks-000128072393-80q613-t500x500.jpg',
    artist: 'A$AP Rocky',
    audio: LSD,
    color: ['#205950', '#2ab3bf'],
    id: uuidv4(),
    active: false,
  },
];

export default myMusic;
