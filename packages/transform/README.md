<div align='center'>
  <h1>
    <b style='color: #58a6ff'>Data Structure Transformer</b>
  </h1>

  <p>This repository is for transforming some data structures.</p>
</div>

## Array to Tree
- **Requirements**
  1. There`re some Objects in an array;
  2. Each of them has same structure:
    2-1. id: current object id;
    2-2. parentId: current object parent`s id, specifying which object blongs to.
    2-3. value: current object value.
    ......
  3. Convert the array to a tree, the nodes on the tree, expected as:
    3-1. id: tree node id;
    3-2. children: chileren nodes;
    3-3. value: tree node value.

- **Implementation**
1. As required, define the tree node structure:
```javascript
// tree node struct
class Node {
  id;
  pId;
  val;
  children;

  constructor(...) {
    ...
  }
}
```

2. Try to Implement convert method: 
  It is easy to iterate the elements in the array, and find all element parent and appent self over and over again. This way will take too much time.
  One easy way is, using `Map`. `key` of map is the id of each element, and `value` is object itself. Then itetate all elements in array, using parentId to find the parent element in map. If node has no parent id, this node will be root node.
```javascript
function converArray2Tree(array) {
  // build map
  const map = new Map();
  for (const o of array) {
    if (!o) {
      continue;
    }
    map.set(o.id, new Node(...));
  }

  // maybe multi root nodes
  // so use array as return value type
  const tree = [];

  // find parent and append self on parent node
  for (const key of map.Keys()) {
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

    ...
  }
}
```
The method aboves use extra space(`Map` space) to store the objects, which offers a easy way to find parent object.  
```
Time : O(N), find parent is O(1);
space: O(N);
```

If there is a big array, that is not a good way to convert, because that way needs a big extra space. See all codes just [click the link](./array2tee.js).
