export class Ship {
    constructor(length){
        this.hits = 0
        this.length = length
    }
    hit(){
        this.hits++
    }

    isSunk(){
        if(this.hits < this.length){
            return false
        }
        return true;
    }

}