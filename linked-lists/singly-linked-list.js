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
}

let firstList = new SinglyLinkedList();
firstList.push("1");
firstList.push("2");
firstList.push("3");
firstList.push("4");
firstList.push("5");
console.log(firstList);
firstList.pop();
firstList.pop();
firstList.pop();
firstList.pop();
console.log(firstList);
