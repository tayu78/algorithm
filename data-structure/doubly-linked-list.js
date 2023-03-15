class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;

    return this;
  }

  pop() {
    if (!this.head) return undefined;
    const targetNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = targetNode.prev;
      this.tail.next = null;
      targetNode.prev = null;
    }
    this.length--;
    return targetNode;
  }

  shift() {
    if (!this.head) return undefined;
    const targetNode = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = targetNode.next;
      this.head.prev = null;
      targetNode.next = null;
    }
    this.length--;
    return targetNode;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      //   newNode.prev = null;  // no need because node's prev has originary  null value
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined;

    let target;
    if (this.length / 2 - index >= 0) {
      let counter = 0;
      target = this.head;
      while (counter < index) {
        target = target.next;
        counter++;
      }
    } else {
      let counter = this.length - 1;
      target = this.tail;
      while (counter > index) {
        target = target.prev;
        target--;
      }
    }

    return target;
  }

  set(index, val) {
    const node = this.get(index);
    if (!node) return false;
    node.val = val;
    return true;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);

    const insertingNode = new Node(val);
    const currentNode = this.get(index);
    insertingNode.next = currentNode;
    insertingNode.prev = currentNode.prev;
    currentNode.prev.next = insertingNode;
    currentNode.prev = insertingNode;

    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const targetNode = this.get(index);
    const beforeNode = targetNode.prev;
    const afterNode = targetNode.next;

    afterNode.prev = beforeNode;
    beforeNode.next = afterNode;
    targetNode.next = null;
    targetNode.prev = null;

    this.length--;

    return targetNode;
  }
}

const list = new DoublyLinkedList();
list.push(3);
list.push(5);
list.push(7);
list.push(10);
list.push(20);
// console.log(list.pop());
// console.log(list.shift());
// console.log(list.unshift(10));
// console.log(list.unshift(20));
// console.log(list.unshift(20));
// console.log("get>>>>>>>", list.get(1));
list.insert(1, 100);
console.log(list);
