var selectedRow = null;

function onFormSubmit(e) {
    event.preventDefault();
    var formData = readFormData();
    if (selectedRow == null) {
        insertNewRecord(formData);
    }
    else {
        updateRecord(formData);
    }
    resetForm();
}

//Retreive the data
function readFormData() {
    var formData = {};
    formData["username"] = document.getElementById("username").value;
    formData["email"] = document.getElementById("email").value;
    formData["password"] = document.getElementById("password").value;
    formData["confirm-password"] = document.getElementById("confirm-password").value;
    formData["comment"] = document.getElementById("comment").value;
    return formData;
}

//Insert the data
function insertNewRecord(data) {
    var table = document.getElementById("storeList").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.username;
    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.email;
    var cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.comment;
    var cell4 = newRow.insertCell(3);
    cell4.innerHTML = `<button onclick="onEdit(this)">Edit</button> <button onClick = "onDelete(this)">Delete</button>`;
}

//Edit the data
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("username").value = selectedRow.cells[0].innerHTML;
    document.getElementById("email").value = selectedRow.cells[1].innerHTML;
    document.getElementById("comment").value = selectedRow.cells[2].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.username;
    selectedRow.cells[1].innerHTML = formData.email;
    selectedRow.cells[2].innerHTML = formData.comment;
}

//Delete the data
function onDelete(td) {
    if (confirm("Do you want to delete this record?")) {
        row = td.parentElement.parentElement;
        document.getElementById("storeList").deleteRow(row.rowIndex);
        resetForm();
    }
}

//Reset the data
function resetForm() {
    document.getElementById("username").value = "";
    document.getElementById("email").value = "";
    document.getElementById("comment").value = "";
    document.getElementById("password").value = "";
    document.getElementById("confirm-password").value = "";
    document.getElementById("Message").innerHTML = "";
    selectedRow = null;
}

var passConfirm = function () {
    if (document.getElementById("password").value === document.getElementById("confirm-password").value) {
        document.getElementById("Message").style.color = "Green";
        document.getElementById("Message").innerHTML = "Passwords match!";
    }
    else {
        document.getElementById("Message").style.color = "Red";
        document.getElementById("Message").innerHTML = "Passwords do NOT match!";
    }
}