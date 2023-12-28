// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted list. The list should be made by
// splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

// Example 1:
// https://leetcode.com/problems/merge-two-sorted-lists/

// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: list1 = [], list2 = []
// Output: []
// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]

// Constraints:

// The number of nodes in both lists is in the range [0, 50].
// -100 <= Node.val <= 100
// Both list1 and list2 are sorted in non-decreasing order.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
// var mergeTwoLists = function(list1, list2) {

// };

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
    // if (currentNode.next === null) {
    //   return this;
    // }
    vals.push(currentNode.val);
    currentNode = currentNode.next;
  }
  return vals;
}

const list1 = new ListNode(1);
addListNode(list1, 2);
addListNode(list1, 4);
console.log(traverseNode(list1));
const list2 = new ListNode(1);
addListNode(list2, 3);
addListNode(list2, 4);
console.log(traverseNode(list2));

var mergeTwoLists2 = function (list1, list2) {
  if (!list1 || !list2) return list1 || list2;

  let mergedList = new ListNode(-1),
    currentNode = mergedList;

  while (list1 && list2) {
    if (list1.val > list2.val) {
      console.log(list2.val, 'right');
      currentNode.next = list2;
      list2 = list2.next;
    } else {
      console.log(list1.val, 'left');
      currentNode.next = list1;
      list1 = list1.next;
    }
    currentNode = currentNode.next;
  }
  currentNode.next = list1 || list2;
  return mergedList.next;
};

var mergeTwoLists = function (list1, list2) {
  if (!list1 || !list2) return list1 || list2;

  let mergedList;
  let left = list1;
  let right = list2;
  while (left !== null || right !== null) {
    if (left && right) {
      if (left.val < right.val) {
        console.log(left.val, 'left');
        if (mergedList === undefined) {
          mergedList = new ListNode(left.val);
        } else {
          addListNode(mergedList, left.val);
        }
        left = left.next;
      } else {
        console.log(right.val, 'right');
        if (mergedList === undefined) {
          mergedList = new ListNode(right.val);
        } else {
          addListNode(mergedList, right.val);
        }
        right = right.next;
      }
    } else {
      if (left) {
        addListNode(mergedList, left.val);
        left = left.next;
      }
      if (right) {
        addListNode(mergedList, right.val);
        right = right.next;
      }
    }
  }
  console.log('merged list', mergedList);
  return mergedList;
};

// const mergedList = mergeTwoLists(list1, list2);
const mergedList = mergeTwoLists2(list1, list2);

console.log(traverseNode(mergedList));
