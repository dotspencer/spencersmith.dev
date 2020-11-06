const DIMENTION = 30;
const LINE_WIDTH = 5;
const DELAY = 15;

let finishEarly = false;

const overlay = document.querySelector('.overlay');
const svg = document.querySelector('svg#logo');

overlay.addEventListener('click', async () => {
  finishEarly = true;
  await new Promise(resolve => setTimeout(resolve, DELAY * 2));
  go();
});

async function go() {
  finishEarly = false;
  svg.innerHTML = '';

  const adjust = LINE_WIDTH / 2; // used to make sharp corners
  const borderWidth = adjust / 2;

  /* const canvas = document.querySelector('canvas') */
  const width = 200 - (borderWidth * 2);
  const height = 200 - (borderWidth * 2);

  const xSpace = width / DIMENTION;
  const xStart = borderWidth + xSpace / 2;
  const ySpace = height / DIMENTION;
  const yStart = borderWidth + ySpace / 2;

  let longestDist = 0;
  const tree = [];
  const visited = {};

  // add name
  const colorName = '#eaeaea';
  const name = [
    // [{x:17,y:5},{x:17,y:6},{x:17,y:7}], // I
    [{x:10,y:10}, {x:9,y:10}, {x:9,y:11}, {x:10,y:11}, {x:10,y:12}, {x:9,y:12}], // S
    [{x:11,y:10}, {x:11,y:12}, {x:11,y:10}, {x:12,y:10}, {x:12,y:11}, {x:11,y:11}], // P
    [{x:14,y:10},{x:13,y:10},{x:13,y:12},{x:14,y:12},{x:13,y:12},{x:13,y:11},{x:14,y:11}], // E
    [{x:15,y:12},{x:15,y:11},{x:15,y:10},{x:16,y:10},{x:16,y:11},{x:16,y:12}], // N
    [{x:18,y:10},{x:17,y:10},{x:17,y:12},{x:18,y:12}], // C
    [{x:20,y:10},{x:19,y:10},{x:19,y:12},{x:20,y:12},{x:19,y:12},{x:19,y:11},{x:20,y:11}], // E
    [{x:21,y:10}, {x:21,y:12}, {x:21,y:10}, {x:22,y:10}, {x:22,y:11}, {x:21,y:11}, {x:22,y:12}], // R

    [{x:16,y:14},{x:15,y:14},{x:15,y:15},{x:16,y:15},{x:16,y:16},{x:15,y:16}], // S
    [{x:17,y:16},{x:17,y:16},{x:17,y:14},{x:18,y:15},{x:19,y:14},{x:19,y:16}], // M
    // [{x:18,y:14},{x:18,y:14}], // M dot
    [{x:20,y:16},{x:20,y:15},{x:20,y:14}], // I
    [{x:22,y:16},{x:22,y:15},{x:22,y:14}], // T ver
    [{x:21,y:14},{x:23,y:14}], // T hor
    [{x:24,y:14},{x:24,y:16}], // H ver 1
    [{x:25,y:14},{x:25,y:16}], // H ver 2
    [{x:24,y:15},{x:25,y:15}], // H hor
  ];

  // draw name
  for (let i = 0; i < name.length; i++) {
    const letter = name[i];
    for (let j = 1; j < letter.length; j++) {
      if (finishEarly) return;
      const src = { ...letter[j-1] };
      const dest = { ...letter[j] };
      src.x -= 3;
      dest.x -= 3;
      src.y += 2;
      dest.y += 2;
      visited[toIndex(src.x, src.y)] = true;
      visited[toIndex(dest.x, dest.y)] = true;
      src.x = xStart + src.x * xSpace;
      src.y = yStart + src.y * ySpace;
      dest.x = xStart + dest.x * xSpace;
      dest.y = yStart + dest.y * ySpace;
      addPath(src, dest, colorName);
      await new Promise(resolve => setTimeout(resolve, DELAY));
    }
  }

  // above M
  visited[toIndex(15,16)] = true;

  let start;
  let end = 0;
  let numPicks = 0;

  while(start == null || visited[start]) {
    numPicks++;
    start = Math.floor(Math.random() * (DIMENTION * DIMENTION + 1));
  }

  explore(start, 0);
  await draw();

  function explore(index, dist) {
    visited[index] = true;
    const neighbors = getNeighbors(index);

    // keep track of the node furthest from start that's on the edge
    if (neighbors.length < 4 && dist > longestDist) {
      longestDist = dist;
      end = index;
    }

    for (let i = 0; i < neighbors.length; i++) {
      const next = neighbors[i];
      if (!visited[next]) {
        tree.push([index, next, dist]); // add pair to tree
        explore(next, dist + 1);
      }
    }
  }

  function getNeighbors(index) {
    const { row, column } = toRowColumn(index);
    const up = toIndex(row - 1, column);
    const down = toIndex(row + 1, column);
    const left = toIndex(row, column - 1);
    const right = toIndex(row, column + 1);
    return shuffle([up, down, left, right].filter(n => n !== null));
  }

  function toRowColumn(index) {
    const row = Math.floor(index / DIMENTION);
    const column = index % DIMENTION;
    return { row, column };
  }

  function toIndex(row, column) {
    if (row < 0 || row >= DIMENTION) return null;
    if (column < 0 || column >= DIMENTION) return null;
    return (row * DIMENTION) + column;
  }

  function shuffle(array) {
    for (let i = 0; i < array.length; i++) {
      const randomIndex = Math.floor(Math.random() * array.length);
      const temp = array[i];
      array[i] = array[randomIndex];
      array[randomIndex] = temp;
    }
    return array;
  }

  function addPath(src, dest, color) {
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('stroke', color);
    path.setAttribute('stroke-width', `${LINE_WIDTH}px`);
    path.setAttribute('stroke-linecap', 'round');
    path.setAttribute('stroke-linejoin', 'round');
    path.setAttribute('fill', 'none');

    // vertical
    if (src.x === dest.x) {
      path.setAttribute('d', [
        `M${src.x},${Math.min(src.y, dest.y)}`,
        `L${dest.x},${Math.max(src.y, dest.y)}`,
      ].join(' '));
    }
    // horizontal
    else {
      path.setAttribute('d', 'M0,0 L10,0 L10,10 L0,10');
      path.setAttribute('d', [
        `M${Math.min(src.x, dest.x)},${src.y}`,
        `L${Math.max(src.x, dest.x)},${dest.y}`,
      ].join(' '));
    }

    svg.insertBefore(path, svg.firstChild);
  }

  async function draw() {
    for (let i = 0; i < tree.length; i++) {
      if (finishEarly) return;
      const pair = tree[i];
      const src = toRowColumn(pair[0]);
      src.x = xStart + src.row * xSpace;
      src.y = yStart + src.column * ySpace;
      const dest = toRowColumn(pair[1]);
      dest.x = xStart + dest.row * xSpace;
      dest.y = yStart + dest.column * ySpace;

      const colorStart = [253, 200, 71]; // goldish
      const colorEnd = [20, 200, 230]; // blueish

      const depth = pair[2];
      const percentDepth = depth / longestDist;

      const r = colorStart[0] + ((colorEnd[0] - colorStart[0]) * percentDepth);
      const g = colorStart[1] + ((colorEnd[1] - colorStart[1]) * percentDepth);
      const b = colorStart[2] + ((colorEnd[2] - colorStart[2]) * percentDepth);
      addPath(src, dest, `rgb(${r},${g},${b})`);

      await new Promise(resolve => setTimeout(resolve, DELAY));
    }
  }

  function paintIndex(ctx, index, color, adjust, xStart, xSpace, yStart, ySpace) {
    const { row, column } = toRowColumn(index);
    const x = xStart + row * xSpace;
    const y = yStart + column * ySpace;
    ctx.fillStyle = color;
    ctx.fillRect(x - adjust, y - adjust, LINE_WIDTH, LINE_WIDTH);
    ctx.fillStyle = '#333';
  }
}
go();
