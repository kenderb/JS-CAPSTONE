import Phaser from 'phaser';
import Entity from './Entities';

export default class ChaserShip extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, 'sprEnemy1', 'chaserShip');
    this.body.velocity.y = Phaser.Math.Between(50, 100);
  }
}