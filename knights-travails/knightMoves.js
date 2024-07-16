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

// Board bounds starts at 0 and ends at 7 (for both columns and rows)
function betweenBounds(pos) {
  return pos.x >= 0 && pos.x < 8 && pos.y >= 0 && pos.y < 8;
}

// Prints results at the provided start and end positions
function knightMoves(start, end) {
  // Start and end are initially arrays. Parse them into Position instances to handle x and y coordinates
  const startPos = new Position(...start);
  const endPos = new Position(...end);

  // First check of start and end are valid positions
  if (!(betweenBounds(startPos) && betweenBounds(endPos))) {
    console.log(
      "Not a valid position (Must be between 0 and 7 for columns and rows)"
    );
    return;
  }

  // Get the shortest path
  const path = calculateMoves(startPos, endPos);

  // Print result
  console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
  path.forEach((pos) => console.log(pos.toArray()));
}

function calculateMoves(startPos, endPos) {
  // Save visited positions to avoid repetitions and infinite loops
  const visited = [];
  // Save positions to a queue (based on BFS: Breadth First Search for a Graph)
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
        // Save new position and new path
        newPath.push(newPos);
        queue.push({ position: newPos, path: newPath });
      }
    });
  }
}

export default knightMoves;
