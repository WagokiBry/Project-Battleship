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
        
    }

}