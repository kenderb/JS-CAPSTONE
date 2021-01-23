
import Entity from '../spaceships/Entities';
import GunShip from '../spaceships/gunship';

test('GunShip is a subclass of Entity', () => {
  expect(GunShip.prototype instanceof Entity).toBe(true);
});