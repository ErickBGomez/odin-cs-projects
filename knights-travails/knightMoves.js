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

function knightMoves(start, end) {
  const startPos = new Position(...start);
  const endPos = new Position(...end);

  const queue = [start, [start]];
  const visited = [];

  while (queue.length) {
    const [current, path] = queue.shift();
  }
}

export default knightMoves;
