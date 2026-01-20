class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  prepend(newValue) {
    const currentHead = this.head;
    const newNode = new linkedListNode(newValue);

    newNode.next = currentHead;
    this.head = newNode;

    if (!this.tail) {
      this.tail = newNode;
    }
    this.length++;
  }

  append(newValue) {
    const newNode = new linkedListNode(newValue);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  print() {
    const output = [];
    let currentNode = this.head;

    while (currentNode) {
      output.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return output.join(" -> ");
  }

  getByIndex(index) {
    if (!this.head && !this.tail) return null;
    if (index > this.length || index < 0) return null;

    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }
  insertAtIndex(index, value) {
    if (index === 0) {
      return this.prepend(value);
    }

    const prev = this.getByIndex(index - 1);

    if (prev == null) return null;

    prev.next = new linkedListNode(value, prev.next);
    this.length++;
  }
  removeAtIndex(index) {
    if (index === 0) {
      this.head = this.head.next;
      this.length--;
      return;
    }

    if (index > this.length || index < 0) return null;

    const prev = this.getByIndex(index - 1);
    prev.next = prev.next.next;
    this.length--;
  }
}

function linkedListNode(value, next) {
  this.value = value;
  this.next = next;
}

function createNodes(head, arrayOfNodesValues) {
  for (let i = 0; i < arrayOfNodesValues.length; i++) {
    let newNode = new linkedListNode(arrayOfNodesValues[i]);
    head.next = newNode;
    head = newNode;
  }
}

let list1 = new linkedListNode(1);
// createNodes(node1, [2, 3, 4, 5, 6]); // 1->2->3->4->5->6
createNodes(list1, [2, 3, 4, 5, 6]);

console.log(list1);

module.exports = LinkedList;
