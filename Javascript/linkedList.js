class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head;

    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  insert(index, value) {
    let newNode = new Node(value);
    let replaceNode = {};
    let currentNode = this.head;
    let currentIndex = 0;

    if (index === this.length) {
      let lastNode = this.tail;
      lastNode.next = newNode;
      this.tail = lastNode.next;
      return this;
    }

    while (currentNode !== null) {
      if (currentIndex === index) {
        replaceNode.value = currentNode.value;
        replaceNode.next = currentNode.next;
        currentNode.value = newNode.value;
        currentNode.next = replaceNode;
        this.length++;

        return this;
      }
      currentNode = currentNode.next;
      currentIndex++;
    }
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(15);
myLinkedList.prepend(1);
myLinkedList.insert(4, 99);

console.log(myLinkedList);
console.log(myLinkedList.printList());
