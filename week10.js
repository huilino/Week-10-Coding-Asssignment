let id = 0;

function dataEntry() {
    let firstName = document.getElementById("fname").value;
    let lastName = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    let address = document.getElementById("address").value;
    let subscription = document.getElementById("subscription").value;
    

    if(!firstName || !lastName || !email || !address || !subscription){
        alert("Please fill out all the boxes");
        return;
    }

    let myMagazine = document.getElementById("magazine");
    let row = myMagazine.insertRow(1);
    row.setAttribute("id", `item-${id}`);

    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    let cell6 = row.insertCell(5);  
     
    cell6.appendChild(createDeleteButton(id++));

    cell1.innerHTML = firstName;
    cell2.innerHTML = lastName;
    cell3.innerHTML = email;
    cell4.innerHTML = address;
    cell5.innerHTML = subscription;
    

    // Reset the form after submit button is clicked
    document.getElementById("fname").value="";
    document.getElementById("lname").value="";
    document.getElementById("email").value="";
    document.getElementById("address").value="";
    document.getElementById("subscription").value="";

}

function createDeleteButton(id){
    let btn = document.createElement("button");
    btn.className = "btn btn-primary";
    btn.id = id;
    btn.innerHTML = "Delete";
    btn.onclick = () => {
        console.log(`Deleting row with id : item-${id}`);
        let elementToDelete = document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
    };
        return btn;
}




    
