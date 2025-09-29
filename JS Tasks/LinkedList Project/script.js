// Linked List Node
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  push(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }

  pop() {
    if (!this.head) return null;
    if (this.head === this.tail) {
      const val = this.head.value;
      this.head = this.tail = null;
      return val;
    }
    let current = this.head;
    while (current.next !== this.tail) {
      current = current.next;
    }
    const val = this.tail.value;
    this.tail = current;
    this.tail.next = null;
    return val;
  }

  insertFirst(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }

  insertAfter(targetValue, newValue) {
    let current = this.head;
    while (current) {
      if (current.value == targetValue) {
        const node = new Node(newValue);
        node.next = current.next;
        current.next = node;
        if (current === this.tail) this.tail = node;
        return;
      }
      current = current.next;
    }
    alert("Value not found!");
  }

  reverse() {
    let prev = null,
      current = this.head,
      next = null;
    this.tail = this.head;
    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
  }

  toArray() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.value);
      current = current.next;
    }
    return arr;
  }
}

const list = new LinkedList();

function renderList() {
  const listDiv = document.getElementById("list");
  listDiv.innerHTML = "";
  let current = list.head;
  while (current) {
    const nodeDiv = document.createElement("div");
    nodeDiv.className = "node";
    nodeDiv.textContent = current.value;
    listDiv.appendChild(nodeDiv);
    if (current.next) {
      const arrow = document.createElement("div");
      arrow.className = "arrow";
      arrow.textContent = "→";
      listDiv.appendChild(arrow);
    }
    current = current.next;
  }
}

function pushNode() {
  const val = document.getElementById("valueInput").value.trim();
  if (val) {
    list.push(val);
    renderList();
  }
}

function popNode() {
  list.pop();
  renderList();
}

function insertFirst() {
  const val = document.getElementById("valueInput").value.trim();
  if (val) {
    list.insertFirst(val);
    renderList();
  }
}

function insertAfter() {
  const val = document.getElementById("valueInput").value.trim();
  const target = prompt("Insert after which value?");
  if (val && target) {
    list.insertAfter(target, val);
    renderList();
  }
}

function reverseList() {
  list.reverse();
  renderList();
}
