// DOM Lab Task
// ID: 23-54856-3
// Name: Jeba Tasnim Khan

let roll = document.getElementById("roll");
let nameInput = document.getElementById("name");
let addBtn = document.getElementById("addBtn");
let list = document.getElementById("studentList");
let total = document.getElementById("total");
let attendance = document.getElementById("attendance");
let search = document.getElementById("search");


// Disable Add button if name is empty
nameInput.addEventListener("input", function () {

    if (nameInput.value === "") {
        addBtn.disabled = true;
    } else {
        addBtn.disabled = false;
    }

});


// Add student
addBtn.onclick = function () {

    let r = roll.value;
    let n = nameInput.value;

    if (r === "" || n === "") {
        alert("Enter roll and name");
        return;
    }

    let li = document.createElement("li");
    li.innerText = r + " - " + n + " ";


    // Present checkbox
    let check = document.createElement("input");
    check.type = "checkbox";

    check.onchange = function () {

        if (check.checked) {
            li.style.backgroundColor = "lightgreen";
        } else {
            li.style.backgroundColor = "";
        }

        updateAttendance();
    };


    // Edit button
    let edit = document.createElement("button");
    edit.innerText = "Edit";

    edit.onclick = function () {

        let newRoll = prompt("Edit roll:", r);
        let newName = prompt("Edit name:", n);

        if (newRoll && newName) {
            r = newRoll;
            n = newName;
            li.firstChild.nodeValue = r + " - " + n + " ";
        }

    };


    // Delete button
    let del = document.createElement("button");
    del.innerText = "Delete";

    del.onclick = function () {

        if (confirm("Are you sure you want to delete this student?")) {
            li.remove();
            updateTotal();
            updateAttendance();
        }

    };


    li.appendChild(check);
    li.appendChild(edit);
    li.appendChild(del);

    list.appendChild(li);

    roll.value = "";
    nameInput.value = "";
    addBtn.disabled = true;

    updateTotal();
    updateAttendance();
};


// Update total students
function updateTotal() {

    let count = list.children.length;
    total.innerText = "Total students: " + count;

}


// Update attendance
function updateAttendance() {

    let items = list.children;
    let present = 0;

    for (let i = 0; i < items.length; i++) {

        let cb = items[i].querySelector("input");

        if (cb.checked) {
            present++;
        }

    }

    let absent = items.length - present;

    attendance.innerText = "Present: " + present + ", Absent: " + absent;

}


// Search student
search.addEventListener("input", function () {

    let text = search.value.toLowerCase();
    let items = list.children;

    for (let i = 0; i < items.length; i++) {

        let student = items[i].innerText.toLowerCase();

        if (student.includes(text)) {
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

        let A = a.innerText.toLowerCase();
        let B = b.innerText.toLowerCase();

        if (A < B) return -1;
        if (A > B) return 1;
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