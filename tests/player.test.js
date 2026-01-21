
import { Player } from "../src/player.js"
import { Ship } from "../src/ship.js"
import { Gameboard } from "../src/gameboard.js"

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