function Kraken() {

  Phaser.Sprite.call(this, game, 200, 200, 'kraken');
  game.groups.player.add(this);
  this.anchor.setTo(0.5, 0.5);

  game.physics.enable(this, Phaser.Physics.ARCADE);
  this.body.gravity.y = 100;
  this.body.collideWorldBounds = true;
  this.body.bounce.setTo(0.4, 0.4);

}
Kraken.prototype = Object.create(Phaser.Sprite.prototype);

Kraken.prototype.update = function() {

  if(game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR))
  {
    this.body.velocity = Phaser.Point.add(this.body.velocity, game.physics.arcade.velocityFromAngle(this.angle-90, 15));
  }
  if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT))
  {
    this.angle -= 3;
  }
  if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT))
  {
    this.angle += 3;
  }


};
