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
    expect(gameboard.grid[0][0]).toEqual(ship)
    expect(gameboard.grid[0][1]).toEqual(ship)
    expect(gameboard.grid[0][2]).toEqual(ship)
})