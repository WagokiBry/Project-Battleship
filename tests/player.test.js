
import { Player } from "../src/player.js"

test("test if player exists with a gameboard",()=>{
    let player1 = new Player()
    

    expect(player1.gameboard).toBeTruthy()
})