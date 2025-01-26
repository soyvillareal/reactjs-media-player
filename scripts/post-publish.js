const { join } = require('path');
const { unlink } = require('fs').promises;

const deleteSinglePlayer = async () => {
  await unlink(join('.', 'reactjs-media-player.js'));
};

deleteSinglePlayer();
