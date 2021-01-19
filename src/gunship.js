import Phaser from 'phaser';
import Entity from './Entities';

export default class GunShip extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, 'sprEnemy0', 'GunShip');
    this.body.velocity.y = Phaser.Math.Between(50, 100);
    this.play('sprEnemy0');
  }
}