var game = new Phaser.Game(600, 800, Phaser.AUTO, 'game', { preload: preload, create: create, update: update }, false, false);
var player;

function preload() {

  game.load.image('kraken', 'assets/textures/pixelKraken.png');
  game.load.image('ink', 'assets/textures/ink.png');
  game.load.image('temp', 'assets/textures/temp.png');

  game.load.bitmapFont('font', 'assets/fonts/font.png', 'assets/fonts/font.fnt');

}

function create() {

  //Start physics
  game.physics.startSystem(Phaser.Physics.ARCADE);

  //Background Color
  game.stage.backgroundColor = 0x000088;

  //Create groups
  game.groups = {};
  game.groups.backgrounds = game.add.group();
  game.groups.worldObjects = game.add.group();
  game.groups.obstacles = game.add.group();
  game.groups.ink = game.add.group();
  game.groups.player = game.add.group();
  game.groups.ui = game.add.group();

  //Nest groups
  game.groups.worldObjects.add(game.groups.obstacles);
  game.groups.worldObjects.add(game.groups.ink);

  player = new Kraken();

  game.groups.obstacles.add(new Phaser.Sprite(game, 100, 100, 'temp'));

  game.score = 0;
  game.scoreText = game.add.bitmapText(50, 50, 'font', game.score.toString() + 'm');

}

function update() {

  game.score = Math.floor(game.groups.worldObjects.y/100);
  game.scoreText.text = game.score.toString() + 'm';

}
