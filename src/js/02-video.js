import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate',
throttle(function (e) {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(e.seconds));
}, 1000)
);

const valueSecond = JSON.parse(localStorage.getItem('videoplayer-current-time')||0);
console.log(valueSecond);
player.setCurrentTime(valueSecond).then(function(second) {
  
}).catch(function (error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;
        default:
            // some other error occurred
            break;
    }
});

    

