import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

  if (localStorage.getItem('current-time')){
    player.setCurrentTime(parseFloat(localStorage.getItem('current-time')))
  }


player.on(
  'timeupdate',
   throttle((e)=>{
    localStorage.setItem('current-time', e.seconds)
}, 1000));

