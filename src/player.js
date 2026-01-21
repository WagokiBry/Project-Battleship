import { Gameboard } from "./gameboard.js" 

export class Player{
    constructor(){
this.gameboard = new Gameboard(10)
    }
    attack(enemyPlayer,row,col){
        enemyPlayer.gameboard.receiveAttack(row,col)
    }
}