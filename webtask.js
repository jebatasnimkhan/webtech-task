// DOM Lab Task
// ID: 23-54856-3
// Name: Jeba Tasnim Khan

let rollInput = document.getElementById("roll");
let nameInput = document.getElementById("name");
let addBtn = document.getElementById("addBtn");
let list = document.getElementById("studentList");
let totalText = document.getElementById("total");
let attendanceText = document.getElementById("attendance");
let searchInput = document.getElementById("search");


// Enable Add button only when name is typed
nameInput.addEventListener("input", function () {

    if (nameInput.value.trim() === "") {
        addBtn.disabled = true;
    } else {
        addBtn.disabled = false;
    }

});


// Add student
addBtn.onclick = function () {

    let roll = rollInput.value;
    let name = nameInput.value;

    if (roll === "" || name === "") {
        alert("Enter roll and name");
        return;
    }

    let li = document.createElement("li");

    let text = document.createElement("span");
    text.innerText = roll + " - " + name;


    // Present checkbox
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    checkbox.onchange = function () {

        if (checkbox.checked) {
            li.style.backgroundColor = "lightgreen";
        } else {
            li.style.backgroundColor = "";
        }

        updateAttendance();
    };


    // Edit button
    let editBtn = document.createElement("button");
    editBtn.innerText = "Edit";

    editBtn.onclick = function () {

        let newRoll = prompt("Edit roll:", roll);
        let newName = prompt("Edit name:", name);

        if (newRoll && newName) {
            roll = newRoll;
            name = newName;
            text.innerText = roll + " - " + name;
        }

    };


    // Delete button
    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";

    delBtn.onclick = function () {

        let confirmDelete = confirm("Are you sure you want to delete this student?");

        if (confirmDelete) {
            li.remove();
            updateTotal();
            updateAttendance();
        }

    };


    li.appendChild(checkbox);
    li.appendChild(text);
    li.appendChild(editBtn);
    li.appendChild(delBtn);

    list.appendChild(li);

    rollInput.value = "";
    nameInput.value = "";
    addBtn.disabled = true;

    updateTotal();
    updateAttendance();
};


// Update total students
function updateTotal() {

    let total = list.children.length;
    totalText.innerText = "Total students: " + total;

}


// Update attendance
function updateAttendance() {

    let present = 0;
    let items = list.children;

    for (let i = 0; i < items.length; i++) {

        let cb = items[i].querySelector("input");

        if (cb.checked) {
            present++;
        }

    }

    let total = items.length;
    let absent = total - present;

    attendanceText.innerText = "Present: " + present + ", Absent: " + absent;

}


// Search student
searchInput.addEventListener("input", function () {

    let value = searchInput.value.toLowerCase();
    let items = list.children;

    for (let i = 0; i < items.length; i++) {

        let text = items[i].innerText.toLowerCase();

        if (text.includes(value)) {
            items[i].style.display = "list-item";
        } else {
            items[i].style.display = "none";
        }

    }

});


// Sort students A-Z
function sortStudents() {

    let items = Array.from(list.children);

    items.sort(function (a, b) {

        let nameA = a.innerText.toLowerCase();
        let nameB = b.innerText.toLowerCase();

        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;

    });

    items.forEach(function (item) {
        list.appendChild(item);
    });

}


// Highlight first student
function highlightFirst() {

    let items = list.children;

    for (let i = 0; i < items.length; i++) {
        items[i].style.border = "";
    }

    if (items.length > 0) {
        items[0].style.border = "3px solid red";
    }

}