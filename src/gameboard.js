import { Ship } from "./ship";

// import { Ship } from "../src/ship.js";
export class Gameboard{
    constructor(size){
        this.grid = []
        for(let i = 0; i < size; i++){
            let row = []
            for(let j = 0; j < size; j++){
                row.push(null)
            }
            this.grid.push(row)
        }
        this.misses = []
    }
    placeShip(ship,row,col,direction){
if(direction === "horizontal"){
    for (let i = 0; i < ship.length; i++){
        this.grid[row][col+i] = ship;
    }
} else if(direction === "vertical"){
    for (let i = 0; i < ship.length; i++){
        this.grid[row+i][col] = ship;
    }
}

}

receiveAttack(row,col){
   let target = this.grid[row][col]

if(target) { target.hit() }
}
}