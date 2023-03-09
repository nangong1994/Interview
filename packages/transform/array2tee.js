class Node {
  id;
  pId;
  val;
  children;

  /**
   * 
   * @param { string | number } id 
   * @param { string | number  } pId 
   * @param { any } val 
   */
  constructor(id, pId, val) {
    this.id = id;
    this.pId = pId;
    this.val = val;
    this.children = [];
  }

  /**
   * @returns { Node }
   */
  toJson() {
    return {
      id : this.id,
      pId: this.pId,
      val: this.val,
      children: this.children
    }
  }
}


class EntryObject {
  id;
  value;
  parentId;
}

/**
 * 
 * @param { EntryObject[] } array 
 * 
 * @returns { Node[] }
 */
function convertArray2Tree(array) {
  if (!array || !array.length) {
    return [];
  }

  const map = new Map();
  for (const o of array) {
    if (!o) {
      continue;
    }

    const node = new Node(o.id, o.parentId, o.value);
    map.set(node.id, node.toJson());
  }

  // maybe multi root nodes
  // so use array as return value type
  const tree = [];

  for (const key of map.keys()) {
    const o = map.get(key);

    if (!o) {
      continue;
    }

    const pId = o.pId;
    if (!pId || !map.get(pId)) {
      tree.push(o);
      continue;
    }

    const parent = map.get(pId);
    parent.children.push(o);
  }

  return tree;
}

module.exports = convertArray2Tree;
