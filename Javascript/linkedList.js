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
    if (index < 0 || typeof index !== 'number') {
      return this;
    }

    if (index >= this.length) {
      // this.tail.next = newNode;
      // this.tail = this.tail.next;
      return this.append(value);
    }

    let newNode = new Node(value);
    let replaceNode = new Node('');
    let currentNode = this.head;
    let currentIndex = 0;

    while (currentNode !== null) {
      console.log(currentNode.value, currentIndex);
      if (currentIndex === index) {
        replaceNode.value = currentNode.value;
        replaceNode.next = currentNode.next;
        currentNode.value = newNode.value;
        currentNode.next = replaceNode;
        this.length++;

        return this;
      }
      // if (currentIndex === index) {
      //   replaceNode.value = currentNode.value;
      //   replaceNode.next = currentNode.next;
      //   currentNode.value = newNode.value;
      //   currentNode.next = replaceNode;
      //   this.length++;

      //   return this;
      // }
      currentNode = currentNode.next;
      currentIndex++;
    }
  }

  insert2(index, value) {
    if (index < 0 || typeof index !== 'number') {
      return this;
    }

    if (index === 0) {
      return this.prepend(value);
    }

    if (index >= this.length) {
      return this.append(value);
    }

    const head = this.traverseToIndex(index - 1);
    const newNode = new Node(value);
    newNode.next = head.next;
    head.next = newNode;
    // index 1
    // 3  x 10
    //  \  /
    //   99
    this.length++;
  }

  traverseToIndex(index) {
    let count = 0;
    let currentNode = this.head;
    while (count !== index) {
      currentNode = currentNode.next;
      count++;
    }
    return currentNode;
  }

  isIndexValid(index) {
    if (index < 0 || typeof index !== 'number') {
      return false;
    }
    return true;
  }

  remove(index) {
    if (!this.isIndexValid) {
      return this;
    }

    if (index === 0) {
      const nextNode = this.head.next;
      this.head = nextNode;
      this.length--;
      return this;
    }

    index = index >= this.length ? this.length - 1 : index;

    const headNode = this.traverseToIndex(index - 1);
    const deleteNode = headNode.next;
    if (deleteNode.next === null) {
      headNode.next = null;
      this.tail = headNode;
    } else {
      headNode.next = deleteNode.next;
    }
    this.length--;
    return this;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(15);
myLinkedList.prepend(3);
myLinkedList.insert2(7, 99);
myLinkedList.remove(5);

console.log(myLinkedList);
console.log(myLinkedList.printList());
