import { Gameboard } from "../src/gameboard.js";

test("gameboard exists",()=>{
    let gameboard = new Gameboard(10)
    expect(gameboard.grid.length).toBe(10);
    expect(gameboard.grid[0].length).toBe(10);
    expect(gameboard.grid[0][0]).toBeNull();
})