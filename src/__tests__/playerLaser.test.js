
import Entity from '../spaceships/Entities';
import playerLaser from '../spaceships/playerLaser';

test('playerLaser is a subclass of Entity', () => {
  expect(playerLaser.prototype instanceof Entity).toBe(true);
});