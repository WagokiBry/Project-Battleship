// import { Ship } from "./ship";

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
        this.attackedCells = new Set()
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
    let key = `${row},${col}`
    if(this.attackedCells.has(key)){
        return
    }
    this.attackedCells.add(key)

   let target = this.grid[row][col]

   

if(target) { target.hit() }
else if(!target){
this.misses.push([row,col])
}
}

allShipsSunk(){
   let seenShips = new Set();

 for(let row = 0; row < this.grid.length;row++){
    for(let col = 0; col < this.grid[row].length;col++){
let cell = this.grid[row][col]
if(cell !==null){
    seenShips.add(cell)
}
    }
 }
 for(let ship of seenShips){
    if(!ship.isSunk()){
        return false
    }
    
 }
 return true
}

}