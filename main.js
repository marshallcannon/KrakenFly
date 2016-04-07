var game = new Phaser.Game(600, 800, Phaser.AUTO, 'game', { preload: preload, create: create, update: update }, false, false);
var player;

function preload() {

  game.load.image('kraken', 'assets/textures/pixelKraken.png');

}

function create() {

  //Start physics
  game.physics.startSystem(Phaser.Physics.ARCADE);

  //Create groups
  game.groups = {};
  game.groups.backgrounds = game.add.group();
  game.groups.obstacles = game.add.group();
  game.groups.player = game.add.group();

  player = new Kraken();

}

function update() {



}
