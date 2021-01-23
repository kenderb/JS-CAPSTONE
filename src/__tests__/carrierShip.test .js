
import Entity from '../spaceships/Entities';
import CarrierShip from '../spaceships/carrierShip';

test('CarrierShip is a subclass of Entity', () => {
  expect(CarrierShip.prototype instanceof Entity).toBe(true);
});