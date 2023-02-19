window.onload = function() {
  const mainDOM = document.getElementById('chess-outerline');
  const size = 9;
  const className = 'chess-element'
  for( let i = 0; i < 9; i++) {
    mainDOM.append(...createContent(size, {className: className}));
  }
}

/**
 * @param {number} size
 * @param {Object} options
 * @returns { HTMLElement[]}
 */
function createContent(size, options) {
  if (!size) {
    return [];
  }

  let n = size;
  const ret = [];
  const className = (options && options.className) || '';
  while (n > 0) {
    const ele = document.createElement('div');
    ele.className = className;
    ele.draggable = true;
    const img = new Image(45, 45);
    const idx = Math.floor(Math.random() * 10)
    img.src = './assets/svg/' + idx + '.svg';
    ele.append(img);
    ele.ondragstart = ondragstart.bind(window);
    ele.ondragend = onDragEnd.bind(window);
    ret.push(ele);
    n--;
  }

  return ret;
}

let startX = 0
let startY = 0;
/**
 * 
 * @param {MouseEvent} e 
 */
function ondragstart(e) {
  startX = e.offsetX;
  startY = e.offsetY;
}

/**
 * 
 * @param {MouseEvent} e 
 */
function onDragEnd(e) {
  const endX = e.offsetX;
  const endY = e.offsetY;
  console.log('dragX Distance: ', Math.floor(endX - startX));
  console.log('dragY Distance: ', Math.floor(endY - startY));
}