class DisjointSet {
  #size; // initial root node counts
  #deps; // store each root node depth
  #parents; // store parent node

  /**
   * 
   * @param { number } size 
   */
  constructor(size) {
    this.#size = size;
    this.#deps = [];
    this.#parents = [];
    this.#init();
  }

  /**
   * @description
   * Private method for initializing some global variables
   */
  #init() {
    // At beginning, just let parent node be element self.
    for (let i = 1; i <= this.#size; i++) {
      this.#deps[i] = 1; // init: all nodes are root node, and per root depth is 1.
      this.#parents[i] = i;
    }
  }

  /**
   * 
   * @param { T } element
   * @returns { T }
   */
  union(element1, element2) {
    const root1 = this.find(element1);
    const root2 = this.find(element2);

    // for the sake of performance:
    if (this.#deps[root1] <= this.#deps[root2]) {
      // change the root node of element1 to minimize tree`s depth
      this.#parents[root1] = root2;
    } else {
      this.#parents[root2] = root1;
    }

    if (this.#deps[root1] === this.#deps[root2] && root1 !== root2) {
      /**
       * e.g.
       *     root-1      root-2
       *       3           6
       *      / \         / \
       *     2   1       4   5
       * 
       * the depth of root-1 is equal to root-2`s
       * No matter root-2 append to root-1 or root-1 append to root-2,
       * the root depth always plus one
       */
      this.#deps[root2]++;
    }
  }

  /**
   * @description
   * Find the root element recursively
   * 
   * @param { T } element
   * @returns { T }
   */
  find(element) {
    if (this.#parents[element] === element) {
      return element;
    }

    // path compression
    // if the path where the element finding root node is too long
    // it will waste too much time.
    // What we concerns is actually the root node,
    // just let the path the shorter the better, e.g
    // 3 -> 8, root is 8, finding element is 3, just one step, root found !
    this.#parents[element] = this.find(this.#parents[element]);
    
    return this.#parents[element];
  }
}

module.exports = DisjointSet;
