function Ink() {

  Phaser.Sprite.call(this, game, player.x, player.y - game.groups.worldObjects.y, 'ink');
  this.anchor.setTo(0.5, 0.5);

  game.physics.enable(this, Phaser.Physics.ARCADE);
  this.body.gravity.y = 150;
  this.body.velocity = game.physics.arcade.velocityFromAngle(player.angle+90+game.rnd.between(-10,10), 300);

}
Ink.prototype = Object.create(Phaser.Sprite.prototype);

Ink.prototype.update = function() {

  this.scale.add(0.008,0.008);
  this.alpha -= 0.005;

  if(this.alpha <= 0)
    this.destroy();



};
