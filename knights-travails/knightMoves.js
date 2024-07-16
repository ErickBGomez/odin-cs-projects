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

  const visited = [];
  const queue = [{ position: startPos, path: [startPos] }];

  while (queue.length) {
    // Get current state of square position and path
    const current = queue.shift();
    const currentPos = current.position;
    const currentPath = current.path;
    visited.push(currentPos);

    // If end square is found, return path
    if (currentPos.equals(endPos)) {
      console.log("Node found!");
      return currentPath;
    }

    // Calculate new position based on valid movements of the knight
    moves.forEach((move) => {
      const newPos = new Position(currentPos.x + move.x, currentPos.y + move.y);
      const newPath = currentPath.slice();

      // New position is on the board and hasn't been visited yet.
      if (betweenBounds(newPos) && !visited.find((pos) => pos.equals(newPos))) {
        newPath.push(newPos);
        queue.push({ position: newPos, path: newPath });
      }
    });
  }
}

export default knightMoves;
