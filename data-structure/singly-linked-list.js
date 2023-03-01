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
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.length++;

    return this;
  }

  pop() {
    if (!this.head) {
      return undefined;
    }
    let current = this.head;
    let tmp = this.head;
    while (current.next) {
      tmp = current;
      current = current.next;
    }
    this.tail = tmp;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (!this.head) return undefined;
    let removingNode = this.head;
    this.head = removingNode.next;
    this.length--;

    if (this.length === 0) this.tail = null;
    return removingNode;
  }

  unshift(val) {
    const currentHead = this.head;
    const newNode = new Node(val);
    if (!currentHead) this.tail = newNode;
    this.head = newNode;
    this.head.next = currentHead;
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index > this.length || index === undefined) return null;
    let value = this.head;
    let i = 0;
    while (i < index) {
      value = value.next;
      i++;
    }
    return value;
  }

  set(index, val) {
    const targetNode = this.get(index);
    if (!targetNode) return false;
    targetNode.val = val;
    return true;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val); // return true;
    if (index === 0) return !!this.unshift(val);

    const newNode = new Node(val);
    const prev = this.get(index - 1);
    const next = prev.next;

    prev.next = newNode;
    newNode.next = next;
    this.length++;

    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();
    const prev = this.get(index - 1);
    const targetNode = prev.next;
    prev.next = targetNode.next;

    this.length--;

    return targetNode;
  }

  reverse() {
    let current = this.head;
    let next;
    let prev = null;
    [this.head, this.tail] = [this.tail, this.head];
    for (let i = 0; i < this.length; i++) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    return this;
  }
}
const list = new SinglyLinkedList();
list.push("HELLO");
list.push("GOOD BYE");
list.push("!");
// console.log(list.pop());
// console.log(list.shift());
// list.unshift("yeah");
// list.set(1, "Set");
// list.insert(1, "insert");
list.reverse();
// console.log("get result: ", list.get(0));
// console.log(list.remove(1));
// console.log(list);
