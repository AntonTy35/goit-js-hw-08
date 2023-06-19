import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.on(
  'timeupdate',
  throttle(time => {
    localStorage.setItem('videoplayer-current-time', time.seconds);
  }, 1000)
);

const curentTime = localStorage.getItem('videoplayer-current-time');
if (curentTime) {
  player.setCurrentTime(curentTime);
}
