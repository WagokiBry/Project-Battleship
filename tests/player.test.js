
import { Player } from "../src/player.js"
import { Ship } from "../src/ship.js"
// import { Gameboard } from "../src/gameboard.js"

test("test if player exists with a gameboard",()=>{
    let player1 = new Player()
    

    expect(player1.gameboard).toBeTruthy()
})

test("player can attack enemy gameboard",()=>{
    let player1Board = new Player();
   

    let enemyPlayer = new Player()
    let enemyShip = new Ship(3)
    enemyPlayer.gameboard.placeShip(enemyShip,5,6,"horizontal")

    player1Board.attack(enemyPlayer,5,6)
    expect(enemyShip.hits).toBe(1)
})

test("players take turns attacking each other", () => {
    // Step 1: create players
    let player1 = new Player();
    let player2 = new Player();

    // Step 2: add ships to both players' boards
    let ship1 = new Ship(3);
    let ship2 = new Ship(3);

    player1.gameboard.placeShip(ship1, 0, 0, "horizontal");
    player2.gameboard.placeShip(ship2, 0, 0, "horizontal");

    // Next step: simulate the first attack
});
