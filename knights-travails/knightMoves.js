import Position from "./position.js";

const moves = [
  new Position(1, 2),
  new Position(1, -2),
  new Position(-1, 2),
  new Position(-1, -2),
  new Position(2, 1),
  new Position(2, -1),
  new Position(-2, 1),
  new Position(-2, -1),
];

function betweenBounds(pos) {
  return pos.x >= 0 && pos.x < 8 && pos.y >= 0 && pos.y < 8;
}

function knightMoves(start, end) {
  const startPos = new Position(...start);
  const endPos = new Position(...end);

  const posQueue = [startPos];
  const visited = [startPos];

  while (posQueue.length) {
    // Get current state of square position and path
    const currentPos = posQueue.shift();

    // If end square is found, return path
    if (currentPos.equals(endPos)) {
      return console.log("Node found!");
    }

    // Calculate new position based on valid movements of the knight
    moves.forEach((move) => {
      const newPos = new Position(currentPos.x + move.x, currentPos.y + move.y);

      // New position is on the board and hasn't been visited yet.
      if (betweenBounds(newPos) && !visited.find((pos) => pos.equals(newPos))) {
        posQueue.push(newPos);
        visited.push(newPos);
      }
    });
  }
}

export default knightMoves;
