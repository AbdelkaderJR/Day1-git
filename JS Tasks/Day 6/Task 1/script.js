function Employee(name, position, office, age, startDate) {
  this.name = name;
  this.position = position;
  this.office = office;
  this.age = age;
  this.startDate = startDate;
}

const employees = [
  new Employee(
    "Abdelrahman",
    "Nodejs Developer",
    "Alexandria",
    23,
    "1/12/2025"
  ),
  new Employee("Sasa", "Java Developer", "Eldakahlia", 24, "1/12/2026"),
  new Employee("Fares", "Frontend Backend", "Eldakahlia", 22, "1/12/2024"),
  new Employee("Mostafa", "Tester", "Kafr El-Sheikh", 23, "1/01/2024"),
  new Employee("Zaha", "AI", "", 23, "1/01/2024"),
  new Employee("Kareem", "GIS", "Port said", 23, "1/01/2024"),
  new Employee("Jemy", "Secutiry", "Port said", 23, "1/01/2024"),
  new Employee("Ahmed", "OS", "Ismalia", 23, "1/01/2024"),
  new Employee("Omar", "CS", "Suez", 23, "1/01/2024"),
];

function displayEmployees() {
  const tableBody = document
    .getElementById("employeeTable")
    .getElementsByTagName("tbody")[0];
  tableBody.innerHTML = "";
  employees.forEach((employee) => {
    const row = tableBody.insertRow();
    row.insertCell(0).textContent = employee.name;
    row.insertCell(1).textContent = employee.position;
    row.insertCell(2).textContent = employee.office;
    row.insertCell(3).textContent = employee.age;
    row.insertCell(4).textContent = employee.startDate;
  });
}

function sortTable(colIndex, order) {
  let table = document.getElementById("employeeTable");
  let rows = Array.from(table.tBodies[0].rows);
  let type = table.tHead.rows[0].cells[colIndex].dataset.type;

  rows.sort((a, b) => {
    let valA = a.cells[colIndex].innerText;
    let valB = b.cells[colIndex].innerText;

    if (type === "number") {
      valA = Number(valA);
      valB = Number(valB);
    } else if (type === "date") {
      valA = new Date(valA);
      valB = new Date(valB);
    }

    if (valA < valB) return order === "asc" ? -1 : 1;
    if (valA > valB) return order === "asc" ? 1 : -1;
    return 0;
  });

  rows.forEach((row) => table.tBodies[0].appendChild(row));
}

document
  .getElementById("employeeForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    let name = document.getElementById("name").value;
    let position = document.getElementById("position").value;
    let office = document.getElementById("office").value;
    let age = document.getElementById("age").value;
    let startDate = document.getElementById("startDate").value;

    employees.push(new Employee(name, position, office, age, startDate));
    displayEmployees();
    this.reset();
  });

displayEmployees();

//use linked list in js objects contain push and pop and have represntation in fronend
// inherit in es5 from construct fn to construct fun
