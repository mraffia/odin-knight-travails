class Knight {
    constructor(value, neighbors = null) {
        this.value = value;
        this.neighbors = neighbors;
    }
}

class Board {
    constructor(sides = 8) {
        this.sides = sides;
        this.board = [];
    }

    generateBoard(sides) {
        this.board = [];
        for (let i = 0; i < sides; i++) {
            for (let j = 0; j < sides; j++) {
                this.board.push([i, j]);
            }
        }
    }
}

function knightMoves(start, end) {

}