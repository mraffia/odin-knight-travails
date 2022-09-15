# odin-knight-travails
Knight Travails project from Javascript section of the Full Stack Javascript Course on The Odin Project

## Implementation
Function `knightMoves` that shows the shortest possible way to get from one square (coordinate) to another in a 8x8 chessboard by outputting all squares the knight will stop on along the way. Unweighted graph and BFS is used.

Example:
- `knightMoves([0,0],[1,2]) == [0,0]->[1,2]`
- `knightMoves([0,0],[3,3]) == [0,0]->[2,1]->[3,3]`
- `knightMoves([3,3],[0,0]) == [3,3]->[1,2]->[0,0]`
- `knightMoves([3,3],[4,3]) == [3,3]->[5,4]->[3,5]->[4,3]`
- `knightMoves([0,0],[7,5]) == [0,0]->[2,1]->[4,2]->[6,3]->[7,5]->[5,6]->[7,7]`
- `knightMoves([0,0],[-1,0]) == OUT OF BOUNDS`
- `knightMoves([0,11],[0,0]) == OUT OF BOUNDS`