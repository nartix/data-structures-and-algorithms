// https://leetcode.com/problems/reverse-linked-list/

// Given the head of a singly linked list, reverse the list, and return the reversed list.

// Example 1:

// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]
// Example 2:

// Input: head = [1,2]
// Output: [2,1]
// Example 3:

// Input: head = []
// Output: []

// Constraints:

// The number of nodes in the list is the range [0, 5000].
// -5000 <= Node.val <= 5000

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function addListNode(node, val) {
  let currentNode = node;
  while (currentNode !== null) {
    if (currentNode.next === null) {
      currentNode.next = new ListNode(val);
      return this;
    }
    currentNode = currentNode.next;
  }
}

function traverseNode(node) {
  let vals = [];
  let currentNode = node;
  while (currentNode !== null) {
    vals.push(currentNode.val);
    currentNode = currentNode.next;
  }
  return vals;
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var reverseList = function (head) {
  if (!head || !head.next) return head;

  // 1 > 2 > 3 > 4
  // 1 < 2   3 > 4
  // 1 < 2 < 3   4
  // 1 > 2 > 3 > 4
  // 2 > 1   3 > 4
  // create temp pointer to hold  2 > 1
  // 3 > 2 > 1   4

  let prev = null;
  let current = head;
  while (current) {
    let next = current.next; // 2>3>4...
    current.next = prev; // null
    prev = current; // 1>2>3...
    current = next;
  }
  head = prev;
};

const list1 = new ListNode(1);
addListNode(list1, 2);
addListNode(list1, 3);
addListNode(list1, 4);
console.log(traverseNode(list1));
reverseList(list1);
console.log(list1);
