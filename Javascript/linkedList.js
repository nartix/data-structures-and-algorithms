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
    return this.printList();
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this.printList();
  }

  printList() {
    const array = [];
    let currentNode = this.head;

    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(array);
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
    return this.printList();
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
    return index > 0 || typeof index === 'number';
  }

  remove(index) {
    if (!this.isIndexValid) {
      return this;
    }

    if (index === 0) {
      const nextNode = this.head.next;
      this.head = nextNode;
      this.length--;
      return this.printList;
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
    return this.printList();
  }
  reverse() {
    // !this.head.next does the same
    if (this.length === 1) {
      return this.head;
    }
    const values = this.printList();
    this.head.next = null;
    this.head = new Node(values[0]);
    this.tail = this.head;
    const length = this.length;
    this.length = 1;

    for (let i = 1; i < length; i++) {
      this.prepend(values[i]);
    }
    this.printList();
  }
  reverse2() {
    // 1 2 3 4
    // <-2
    // 2 1 3 4
    // <---3
    // move 3 to 2
    // 2 next to 3 next;
    // 3 2 1 4
    // <-----4
    // 4 3 2 1

    // val1 nex2
    // val2 nex3
    //

    if (!this.head || !this.head.next) {
      return this.head;
    }

    let prev = null;
    let current = this.head;
    this.tail = this.head; // The current head will become the new tail
    // 1 2 3 4
    while (current !== null) {
      let next = current.next; // Store next node
      current.next = prev; // Reverse the pointer
      prev = current; // Move prev forward
      current = next; // Move current forward
    }

    this.head = prev; // Set new head
    return this.printList(); // Print and return the reversed list
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(15);
myLinkedList.prepend(3);
myLinkedList.insert2(7, 99);
myLinkedList.remove(5);
// myLinkedList.reverse();
myLinkedList.reverse2();
console.log(myLinkedList);
// console.log(myLinkedList.printList());
