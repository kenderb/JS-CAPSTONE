
import Phaser from 'phaser';
import Entity from '../spaceships/Entities';

test('Entity is a subclass of Sprite', () => {
  expect(Entity.prototype instanceof Phaser.GameObjects.Sprite).toBe(true);
});
