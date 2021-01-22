
import Entity from '../spaceships/Entities';
import Player from '../spaceships/player';

test('ChaserShip is a subclass of Entity', () => {
  expect(Player.prototype instanceof Entity).toBe(true);
});