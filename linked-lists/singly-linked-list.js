// A linked list is a data structure that contains a head, tail and length property
// A singly linked list refers to a linked list where each node is only connected in one direction to the next
// [1] -> [2] -> [3] -> [4] -> null

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    let oneBeforeCurrent;
    let current = this.head;
    while (current.next) {
      oneBeforeCurrent = current;
      current = current.next;
    }
    oneBeforeCurrent.next = null;
    this.tail = oneBeforeCurrent;
    this.length--;
    return current;
  }
  shift() {
    if (!this.head) return undefined;
    const removed = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }
    this.length--;
    return removed;
  }
  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  // Get takes an index and returns the value at that index
  get(index) {
    let counter = 0;
    let curr = this.head;
    // Guard clause
    if (index < 0 || index >= this.length) return null;

    while (counter !== index) {
      counter++;
      curr = curr.next;
    }
    return curr;
  }
  // Set takes an index and a value and updates the value at that index
  set(index, value) {
    const foundNode = this.get(index);

    if (foundNode) {
      foundNode.val = value;
      return true;
    }
    return false;
  }
  // Insert takes an index and a value and inserts a new node at that index
  insert(index, value) {
    // edge cases
    if (index < 0 || index >= this.length) return false;
    if (index === this.length) !!this.push(value);
    if (index === 0) !!this.unshift(value);

    const newNode = new Node(value);
    const prev = this.get(index - 1);
    const nextNode = prev.next;
    prev.next = newNode;
    nowNode.next = nextNode;
    this.length++;
    return true;
  }
  // Remove takes an index and removes the node at that index
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const prev = this.get(index - 1);
    const removed = this.get(index);
    prev.next = removed.next;
    this.length--;
    return removed.val;
  }
  // Reverse reverses the linked list in place
  reverse() {
    let curr = this.head;
    this.head = this.tail;
    this.tail = curr;
    let prev = null;
    let next;

    for (let i = 0; i < this.length; i++) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    return this;
  }
}

let firstList = new SinglyLinkedList();
firstList.push("1");
firstList.push("2");
firstList.push("3");
firstList.push("4");
console.log(firstList);
console.log("I removed", firstList.reverse());
