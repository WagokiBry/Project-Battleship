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