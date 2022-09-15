class Knight {
    constructor(position) {
        this.position = position;
        this.availableMoves = [];
    }

    findAvailableMoves(sides, p, q) {
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
        this.actualBoard = [];
    }

    generateBoard() {
        for (let i = 0; i < this.sides; i++) {
            for (let j = 0; j < this.sides; j++) {
                let knight = new Knight([i, j]);
                knight.findAvailableMoves(this.sides, i, j);
                this.actualBoard.push(knight);
            }
        }
    }
}

function knightMoves(board, start, end) {
    if (start[0] === end[0] && start[1] === end[1]) {
        return `Start (${start}) and end (${end}) coordinate is the same. AKA you're already there.`;
    }

    let startStr = start.toString();
    let queue = [start];
    let visited = {};
    visited[startStr] = true;
    let predecessor = {};
    let tail = 0;

    while (tail < queue.length) {
        let position = queue[tail];
        tail++;
        let positionStr = position.toString();
        let availableMoves;

        for (let i = 0; i < board.length; i++) {
            if (board[i].position[0] === position[0] && board[i].position[1] === position[1]) {
                availableMoves = board[i].availableMoves;
            }
        }

        for (let i = 0; i < availableMoves.length; i++) {
            let visit = availableMoves[i];
            let visitStr = visit.toString();

            if (visited[visitStr]) {
                continue;
            }

            visited[visitStr] = true;

            if (visit[0] === end[0] && visit[1] === end[1]) {
                let path = [visit];

                while (!(position[0] === start[0] && position[1] === start[1])) {
                    path.push(position);
                    position = predecessor[positionStr];
                    positionStr = position.toString();
                } 


                path.push(position);
                path.reverse();
                
                let pathOutput = `You made it in ${path.length - 1} moves! Here's your path:\n`
                for (let i = 0; i < path.length; i++) {
                    if (i === 0) {
                        pathOutput += `${path[i]} --- start\n`;
                    } else if (i === path.length - 1) {
                        pathOutput += `${path[i]} --- end`;
                    } else {
                        pathOutput += `${path[i]}\n`;
                    }
                }

                return pathOutput;
            }

            predecessor[visitStr] = position;
            queue.push(visit);
        }
    }

    return `There is no path from ${start} to ${end}. (OUT OF BOUNDS)`;
}

let chessBoard = new Board();
chessBoard.generateBoard();

// TEST
console.log(knightMoves(chessBoard.actualBoard, [0, 0], [0, 0]));
console.log(knightMoves(chessBoard.actualBoard, [0, 0], [1, 2]));
console.log(knightMoves(chessBoard.actualBoard, [0, 0], [3, 3]));
console.log(knightMoves(chessBoard.actualBoard, [3, 3], [4, 3]));
console.log(knightMoves(chessBoard.actualBoard, [0, 0], [7, 5]));
console.log(knightMoves(chessBoard.actualBoard, [0, 0], [-1, 0]));
console.log(knightMoves(chessBoard.actualBoard, [0, 0], [0, 11]));