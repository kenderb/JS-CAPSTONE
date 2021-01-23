
import Entity from '../spaceships/Entities';
import ChaserShip from '../spaceships/chaserShip';

test('ChaserShip is a subclass of Entity', () => {
  expect(ChaserShip.prototype instanceof Entity).toBe(true);
});