import { Gameboard } from "../src/gameboard.js";
import { Ship } from "../src/ship.js";

test("gameboard exists",()=>{
    let gameboard = new Gameboard(10)
    expect(gameboard.grid.length).toBe(10);
    expect(gameboard.grid[0].length).toBe(10);
    expect(gameboard.grid[0][0]).toBeNull();
})

test("placing a ship horizontally on the board",()=>{
    let gameboard = new Gameboard(10);
    let ship = new Ship(3);
    gameboard.placeShip(ship,0,0,"horizontal")
  expect(gameboard.grid[0][0]).toBe(ship)
expect(gameboard.grid[0][1]).toBe(ship)
expect(gameboard.grid[0][2]).toBe(ship)
expect(gameboard.grid[0][3]).toBeNull()
})

test("placing a ship vertically on the board",()=>{
    let gameboard = new Gameboard(10);
    let ship = new Ship(3);
    gameboard.placeShip(ship,0,0,"vertical")
  expect(gameboard.grid[0][0]).toBe(ship)
expect(gameboard.grid[1][0]).toBe(ship)
expect(gameboard.grid[2][0]).toBe(ship)
expect(gameboard.grid[3][0]).toBeNull()
})

test("receiveAttack hits a ship",()=>{
    let gameboard = new Gameboard(10);
    let ship = new Ship(3);
    gameboard.placeShip(ship,0,0,"vertical")
    gameboard.receiveAttack(0,0)
  expect(ship.hits).toBe(1)
 })

 test("records missed attacks", () => {
  let gameboard = new Gameboard(10);
  gameboard.receiveAttack(0, 0);
expect(gameboard.misses).toContainEqual([0, 0]);

});

test("allShipsSunk returns false if at least one ship is still afloat", () => {
  let gameboard = new Gameboard(10);
  let destroyer = new Ship(3);
gameboard.placeShip(destroyer,0,0,"vertical")
destroyer.hit()
expect(gameboard.allShipsSunk()).toBe(false);
});

test("allShipsSunk returns true if all ships are sunk", () => {
  let gameboard = new Gameboard(10);
  let destroyer = new Ship(3);
  let carrier = new Ship(4)
gameboard.placeShip(destroyer,0,0,"vertical")
gameboard.placeShip(carrier,6,4,"horizontal")
destroyer.hit()
destroyer.hit()
destroyer.hit()
carrier.hit()
carrier.hit()
carrier.hit()
carrier.hit()
expect(gameboard.allShipsSunk()).toBe(true);
});