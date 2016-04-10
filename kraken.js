function Kraken() {

  Phaser.Sprite.call(this, game, 200, 600, 'kraken');
  game.groups.player.add(this);
  this.anchor.setTo(0.5, 0.5);

  game.physics.enable(this, Phaser.Physics.ARCADE);
  this.body.gravity.y = 150;
  this.body.collideWorldBounds = true;
  this.body.bounce.setTo(0.4, 0.4);

}
Kraken.prototype = Object.create(Phaser.Sprite.prototype);

Kraken.prototype.update = function() {

  //Keyboard controls
  if(game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR) || game.input.keyboard.isDown(Phaser.Keyboard.UP))
  {
    this.body.velocity = Phaser.Point.add(this.body.velocity, game.physics.arcade.velocityFromAngle(this.angle-90, 15));
    game.groups.ink.add(new Ink());
  }
  if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT))
  {
    this.angle -= 3;
  }
  if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT))
  {
    this.angle += 3;
  }

  if(this.y < 350)
  {
    game.groups.worldObjects.y += 350 - this.y;
    this.y = 350;
  }
  else if(this.y > 600)
  {
    game.groups.worldObjects.y += 600-this.y;
    this.y = 600;
  }


};
