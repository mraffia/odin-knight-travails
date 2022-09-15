class Knight {
    constructor(position) {
        this.position = position;
        this.availableMoves = [];
    }

    findPossibleMoves(sides, p, q) {
        let n = sides;
        let m = sides;
    
        let X = [ 2, 1, -1, -2, -2, -1, 1, 2 ];
        let Y = [ 1, 2, 2, 1, -1, -2, -2, -1 ];
    
        for (let i = 0; i < 8; i++) {
            let x = p + X[i];
            let y = q + Y[i];
    
            if (x >= 0 && y >= 0 && x < n && y < m) {
                this.availableMoves.push([x, y]);
            }
        }
    
        return this.availableMoves;
    }
}

class Board {
    constructor(sides = 8) {
        this.sides = sides;
        this.board = [];
    }

    generateBoard() {
        for (let i = 0; i < this.sides; i++) {
            for (let j = 0; j < this.sides; j++) {
                let knightPiece = new Knight([i, j]);
                knightPiece.findPossibleMoves(this.sides, i, j);
                this.board.push(knightPiece);
            }
        }
    }
}

let chessBoard = new Board(8);
chessBoard.generateBoard();

console.log(chessBoard.board);

// function knightMoves(start, end) {
//     let knight = new Knight();

//     if (start === end) {
//         return [start];
//     }

//     let queue = [start];
//     let visited = { start: true }
//     let predecessor = {};
//     let tail = 0;

//     while (tail < queue.length) {
//         let u = queue[tail++];
//         let availableMoves = knight.availableMoves[u];

//         for (let i = 0; i < availableMoves.length; i++) {
//             let v = availableMoves[i];

//             if (visited[v]) {
//                 continue;
//             }

//             visited[v] = true;

//             if (v === end) {
//                 let path = [v];

//                 while (u !== start) {
//                     path.push(u);
//                     u = predecessor[u];
//                 } 

//                 path.push(u);
//                 path.reverse();
                
//                 return path.join(' &rarr; ');
//             }

//             predecessor[v] = u;
//             queue.push(v);
//         }
//     }

//     return "There is no path from " + start + " to " + target;
// }