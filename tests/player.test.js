
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

// test("players take turns attacking each other", () => {
//     // Step 1: create players
//     let player1 = new Player();
//     let player2 = new Player();

//     // Step 2: add ships to both players' boards
//     let ship1 = new Ship(3);
//     let ship2 = new Ship(3);

//     player1.gameboard.placeShip(ship1, 0, 0, "horizontal");
//     player2.gameboard.placeShip(ship2, 0, 0, "horizontal");

//     // Next step: simulate the first attack
//     // Step 2: Player1 attacks Player2
// player1.attack(player2, 0, 0);

// // Check that the ship was hit
// expect(ship2.hits).toBe(1);

// });

test("player gets another turn if they hit a ship", () => {
  let player1 = new Player();
  let player2 = new Player();

  // Place a ship on player2's board
  let ship = new Ship(3);
  player2.gameboard.placeShip(ship, 0, 0, "horizontal");

  // Make sure player1 starts with their turn
  player1.isTurn = true;
  player2.isTurn = false;

  // Player1 attacks and hits the ship
  player1.attack(player2, 0, 0);
  expect(ship.hits).toBe(1);
  expect(player1.isTurn).toBe(true);   // still player1's turn
  expect(player2.isTurn).toBe(false);

  // Player1 attacks next part of the same ship
  player1.attack(player2, 0, 1);
  expect(ship.hits).toBe(2);
  expect(player1.isTurn).toBe(true);   // still player1's turn
  expect(player2.isTurn).toBe(false);

  // Player1 attacks a cell that misses
  player1.attack(player2, 5, 5);
  expect(player1.isTurn).toBe(false);  // turn switches
  expect(player2.isTurn).toBe(true);
});