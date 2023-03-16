import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const TIME_KEY = 'videoplayer-current-time';

player.on(
  'timeupdate',
  throttle(() => {
    player
      .getCurrentTime()
      .then(seconds => {
        localStorage.setItem(TIME_KEY, seconds);
      })
      .catch(function (error) {
        // an error occurred
      });
  }, 1000)
);
const currentTime = localStorage.getItem(TIME_KEY);

if (currentTime) player.setCurrentTime(currentTime) || 0;
