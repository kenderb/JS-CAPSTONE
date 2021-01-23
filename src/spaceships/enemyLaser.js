import Entity from './Entities';
import laserConfig from './laserConfig';

export default class EnemyLaser extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, 'sprLaserEnemy0');
    this.body.velocity.y = 200;
  }

  update() {
    for (let i = 0; i < this.enemyLasers.getChildren().length; i += 1) {
      const laser = this.enemyLasers.getChildren()[i];
      laser.update();

      laserConfig(laser);
    }
  }
}