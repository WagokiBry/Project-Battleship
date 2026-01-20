import { ship } from './ship.js';

jest.mock('./ship.js', () => {
  return {
    ship: jest.fn().mockImplementation(() => {
      return {
        length: 3,
        hits: 0,
        increaseHits() {
          this.hits++;
        },

        isSunk(length, hits) {
         
          if (this.hits === this.length) {
            
            return true;
          }
          return false;
        },
      };
    }),
  };
});

console.log(new ship());

test('ship starts with zero hits', () => {
  let testShip = new ship();
  expect(testShip.hits).toBe(0);
});

test('increasing hits method', () => {
  let testShip = new ship();
  testShip.increaseHits();
  // expect(testShip.increaseHits()).toHaveBeenCalledTimes(1);
  expect(testShip.hits).toBe(1);
  
});

test('checking if ship is sunk', () => {
  let testShip = new ship();
  testShip.increaseHits();
  testShip.increaseHits();
  testShip.increaseHits();
  
  expect(testShip.isSunk()).toBeTruthy();
});
