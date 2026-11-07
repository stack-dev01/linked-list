class Node {
  constructor(value = null) {
    this.value = value;
    this.nextNode = null;
  }
}

export class LinkedList {
  constructor() {
    this.headNode = null;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.nextNode = this.headNode;
    this.headNode = newNode;
  }

  append(value) {
    const newNode = new Node(value);

    // case 1: list is empty
    if (this.headNode === null) {
      this.headNode = newNode;
      return;
    }

    // case 2: walk to the last node
    let current = this.headNode;
    while (current.nextNode !== null) {
      current = current.nextNode;
    }

    // attach the new node to the end
    current.nextNode = newNode;
  }
  size() {
  let count = 0;
  let current = this.headNode;
  while (current !== null) {
    count++;
    current = current.nextNode;
  }
  return count;
}

head() {
  if (this.headNode === null) return undefined;
  return this.headNode.value;
}

tail() {
  if (this.headNode === null) return undefined;

  let current = this.headNode;
  while (current.nextNode !== null) {
    current = current.nextNode;
  }
  return current.value;
}
at(index) {
  if (index < 0) return undefined;

  let current = this.headNode;
  let i = 0;
  while (current !== null) {
    if (i === index) return current.value;
    current = current.nextNode;
    i++;
  }
  return undefined;
}

pop() {
  if (this.headNode === null) return undefined;

  const removed = this.headNode;
  this.headNode = removed.nextNode;
  return removed.value;
}

contains(value) {
  let current = this.headNode;
  while (current !== null) {
    if (current.value === value) return true;
    current = current.nextNode;
  }
  return false;
}

findIndex(value) {
  let current = this.headNode;
  let i = 0;
  while (current !== null) {
    if (current.value === value) return i;
    current = current.nextNode;
    i++;
  }
  return -1;
}
toString() {
  if (this.headNode === null) return "";

  let result = "";
  let current = this.headNode;
  while (current !== null) {
    result += `( ${current.value} ) -> `;
    current = current.nextNode;
  }
  return result + "null";
}
insertAt(index, ...values) {
  if (index < 0 || index > this.size()) {
    throw new RangeError("Index out of bounds");
  }
  if (values.length === 0) return;

  // 1. build a small chain from the new values
  let first = null;
  let last = null;
  for (const value of values) {
    const node = new Node(value);
    if (first === null) {
      first = node;
    } else {
      last.nextNode = node;
    }
    last = node;
  }

  // 2. insert at the start
  if (index === 0) {
    last.nextNode = this.headNode;
    this.headNode = first;
    return;
  }

  // 3. insert after the node at index - 1
  let previous = this.headNode;
  for (let i = 0; i < index - 1; i++) {
    previous = previous.nextNode;
  }
  last.nextNode = previous.nextNode;
  previous.nextNode = first;
}

removeAt(index) {
  if (index < 0 || index >= this.size()) {
    throw new RangeError("Index out of bounds");
  }

  // removing the head
  if (index === 0) {
    this.headNode = this.headNode.nextNode;
    return;
  }

  // walk to the node just before the one being removed
  let previous = this.headNode;
  for (let i = 0; i < index - 1; i++) {
    previous = previous.nextNode;
  }
  previous.nextNode = previous.nextNode.nextNode;
}
}