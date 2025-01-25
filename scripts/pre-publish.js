const { join } = require('path');
const { writeFile } = require('fs').promises;

const generateSinglePlayers = async () => {
  const file = `
      var createMediaPlayer = require('./lib/MediaPlayer').createMediaPlayer
      var Player = require('./lib/core/PlayerCore').default
      module.exports = createMediaPlayer([{
        key: 'core',
        canPlay: Player.canPlay,
        lazyPlayer: Player
      }])
    `;
  await writeFile(join('.', 'core.js'), file);
};

generateSinglePlayers();
