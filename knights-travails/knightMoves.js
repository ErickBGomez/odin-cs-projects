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

  if (!(betweenBounds(startPos) && betweenBounds(endPos))) {
    console.log(
      "Not a valid position (Must be between 0 and 7 for columns and rows)"
    );
    return;
  }

  const path = calculateMoves(startPos, endPos);

  console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
  path.forEach((pos) => console.log(pos.toArray()));
}

function calculateMoves(startPos, endPos) {
  const visited = [];
  const queue = [{ position: startPos, path: [startPos] }];

  while (queue.length) {
    // Get current state of square position and path
    const current = queue.shift();
    const currentPos = current.position;
    const currentPath = current.path;
    visited.push(currentPos);

    // If end square is found, return path
    if (currentPos.equals(endPos)) return currentPath;

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
