
import Entity from '../spaceships/Entities';
import EnemyLaser from '../spaceships/enemyLaser';

test('EnemyLaser is a subclass of Entity', () => {
  expect(EnemyLaser.prototype instanceof Entity).toBe(true);
});