



function LinkedList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

function Node(val) {
  this.value = val;
  this.next = null;
}

// Add node to end of LinkedList

LinkedList.prototype.push = function (value) {
  let currentNode = this;
  let newNode = new Node(value);

  if (currentNode.head === null) {
    currentNode.head = newNode;
    currentNode.tail = newNode;
  } else {
    currentNode.tail.next = newNode;
    currentNode.tail = currentNode.tail.next;
  }

  currentNode.length += 1;
}

LinkedList.prototype.contains = function (value) {
  let current = this.head;

  while (current.value !== value) {
    if (current.next === null) {
      return false;
    }
    current = current.next;
  }
  return true;
}
