// Binary search tree

// Create base class
function BinarySearchTree() {
  this.value = value;
  this.left = null;
  this.right = null;
}

BinarySearchTree.prototype.insert = function (value) {
  let base = this;
  const node = new BinarySearchTree(value);
  
  while (base !== null) {
    if (base.value < value){
      if (base.right !== null){
        base = base.right;
      } else {
        base.right = node;
        base = null;
      }
    } else {
      if (base.left !== null){
        base = base.left;
      } else {
        base.left = node;
        base = null;
      }
    }
  }
};

BinarySearchTree.prototype.contains = function (value) {
  let current = this;

  while (current) {
    if (current.value === value) return true;
    else if (current.value < value) current = current.right;
    else current = current.left;
  }
  return false;
};

// applies a callback in order of depth first (preorder)
BinarySearchTree.prototype.depthFirstPre = function (callback) {
  let node = this;

  callback(node.value);
  if (node.left) node.left.depthFirstPre(callback);
  if (node.right) node.right.depthFirstPre(callback);
};

// applies a callback in order of depth first (in order)
BinarySearchTree.prototype.depthFirstIn = function (callback) {
  let node = this;

  if (node.left) node.left.depthFirstIn(callback);
  callback(node.value);
  if (node.right) node.right.depthFirstIn(callback);
};

// applies a callback in order of depth first (post order)
BinarySearchTree.prototype.depthFirstPost = function (callback) {
  let node = this;

  if (node.left) node.left.depthFirstPost(callback);
  if (node.right) node.right.depthFirstPost(callback);
  callback(node.value);
};

// applies a callback in order of breadth first
BinarySearchTree.prototype.breadthFirst = function (callback) {
  let current = this;
  let nodes = [];

  nodes.push(current);
  for (let i = 0; i < nodes.length; i += 1) {
    if (nodes[i].left) nodes.push(nodes[i].left);
    if (nodes[i].right) nodes.push(nodes[i].right);
  }

  nodes.map((node) => callback(node.value));
};