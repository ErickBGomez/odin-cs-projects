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
  return pos.x >= 0 && pos.x <= 8 && pos.y >= 0 && pos.y <= 8;
}

function knightMoves(start, end) {
  const startPos = new Position(...start);
  const endPos = new Position(...end);

  const posQueue = [startPos];
  const pathQueue = [[startPos]];
  const visited = [startPos];

  while (queue.length) {
    // Get current state of square position and path
    const currentPos = posQueue.shift();
    const path = pathQueue.shift();

    // If end square is found, return path
    if (currentPos.equals(end)) return path;

    moves.forEach((move) => {
      const newPos = new Position(currentPos.x + move.x, currentPos.y + move.y);

      if (betweenBounds(newPos));
    });
  }
}

export default knightMoves;
