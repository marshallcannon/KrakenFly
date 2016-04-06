var game = new Phaser.Game(600, 800, Phaser.AUTO, 'game', { preload: preload, create: create, update: update }, false, false);

function preload() {

  game.load.image('kraken', 'assets/textures/pixelKraken.png');

}

function create() {

  var kraken = game.add.sprite(200, 200, 'kraken');

}

function update() {

}
