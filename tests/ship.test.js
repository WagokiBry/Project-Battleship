import { ship } from '../src/ship.js';



test('ship starts with zero hit', () => {
  let testShip = new ship();
  expect(testShip.hits).toBe(0);
});

test('increasing hit method', () => {
  let testShip = new ship();
  testShip.hit();

  expect(testShip.hits).toBe(1);
  
});

test('checking if ship is sunk', () => {
  let testShip = new ship();
  testShip.hit();
  testShip.hit();
  testShip.hit();
  
  expect(testShip.isSunk()).toBeTruthy();
});
