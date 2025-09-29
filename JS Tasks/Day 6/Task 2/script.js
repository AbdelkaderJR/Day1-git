const linkedList = {
  head: null,
  tail: null,
};

function createNode(value) {
  return { value: value, next: null };
}

function push(value) {
  const newNode = createNode(value);
  if (!linkedList.head) {
    linkedList.head = newNode;
    linkedList.tail = newNode;
  } else {
    linkedList.tail.next = newNode;
    linkedList.tail = newNode;
  }
  printList();
}

function pop() {
  if (!linkedList.head) return;

  if (linkedList.head === linkedList.tail) {
    linkedList.head = null;
    linkedList.tail = null;
  } else {
    let current = linkedList.head;
    while (current.next !== linkedList.tail) {
      current = current.next;
    }
    current.next = null;
    linkedList.tail = current;
  }
  printList();
}

function printList() {
  const listDisplay = document.getElementById("listDisplay");
  listDisplay.innerHTML = "";
  let current = linkedList.head;
  while (current) {
    const nodeDiv = document.createElement("div");
    nodeDiv.className = "node";
    nodeDiv.innerText = current.value;
    listDisplay.appendChild(nodeDiv);
    current = current.next;
  }
}

const pushBtn = document.getElementById("pushBtn");
const popBtn = document.getElementById("popBtn");
const valueInput = document.getElementById("valueInput");

pushBtn.addEventListener("click", () => {
  const value = valueInput.value.trim();
  if (value) {
    push(value);
    valueInput.value = "";
  }
});

popBtn.addEventListener("click", () => {
  pop();
});
