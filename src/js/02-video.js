import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player', {
    id: 19231868,
    width: 640
});


const PLAYER_KEY = "videoplayer-current-time";

const playerTimeStorage = function(data) {
    localStorage.setItem(PLAYER_KEY, data.seconds)
}

player.on('timeupdate', throttle(playerTimeStorage,1000));



player
.setCurrentTime(localStorage.getItem(PLAYER_KEY))
.then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});

