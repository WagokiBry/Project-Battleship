import { Ship } from '../src/ship.js';



test('Ship starts with zero hit', () => {
  let testShip = new Ship();
  expect(testShip.hits).toBe(0);
});

test('increasing hit method', () => {
  let testShip = new Ship();
  testShip.hit();

  expect(testShip.hits).toBe(1);
  
});

test('checking if Ship is sunk', () => {
  let testShip = new Ship();
  testShip.hit();
  testShip.hit();
  testShip.hit();
  
  expect(testShip.isSunk()).toBeTruthy();
});
