function onClickContacts() {
    let mainTitleElement = document.getElementById("mainTitle");
    let newContactButton = document.getElementById("newContactButton");
    let showContactContent = document.getElementById("contactTable");
    let hideNewTaskButton = document.getElementById("newTaskButton");
    let hideTaskContainer = document.getElementById("taskContainer");


    if (mainTitleElement) {
        mainTitleElement.textContent = "Contacts";
    } else {
        console.error("Element with id 'mainTitle' not found");
    }

    if (newContactButton) {
        newContactButton.style.display = "flex";
    } else {
        console.error("Element with id 'newContactButton' not found");
    }

    if (showContactContent) {
        showContactContent.style.display = "table";
    } else {
        console.error("Element with id 'contactTable' not found");
    }

    if (hideNewTaskButton) {
        hideNewTaskButton.style.display = "none";
    } else {
        console.error("Element with id 'newTaskButton' not found");
    }

    if (hideTaskContainer) {
        hideTaskContainer.style.display = "none";
    } else {
        console.error("Element with id 'taskContainer' not found");
    }

    console.log("Changed tab to Contacts.");

    updateTable();
}

function newContact() {
    console.log("New Contact Button clicked");
    alert("Please enter your contact details in the windows that appear.");
    let name = prompt("Name:");
    let surname = prompt("Surname:");
    let email = prompt("E-mail:");
    let phoneNumber = prompt("Phone Number:");

    if (name === null || surname === null || email === null || phoneNumber === null) {
        alert("Data entry canceled.");
    } else {
        let newContact = {
            name: name,
            surname: surname,
            email: email,
            phoneNumber: phoneNumber
        };

        Contacts.push(newContact);

        alert("Contact added:\nName: " + name + "\nSurname: " + surname + "\nE-mail: " + email + "\nPhone Number: " + phoneNumber);
        updateTable();
    }
}

function updateTable() {
    let tableBody = document.getElementById('tableBody');

    if (tableBody) {
        // Wyczyść aktualną zawartość tabeli
        tableBody.innerHTML = '';

        // Dodaj każdy kontakt jako nowy wiersz
        Contacts.forEach(function (contact) {
            let row = document.createElement('tr');

            let cellName = document.createElement('td');
            cellName.textContent = contact.name;

            let cellSurname = document.createElement('td');
            cellSurname.textContent = contact.surname;

            let cellEmail = document.createElement('td');
            cellEmail.textContent = contact.email;

            let cellPhoneNumber = document.createElement('td');
            cellPhoneNumber.textContent = contact.phoneNumber;

            row.appendChild(cellName);
            row.appendChild(cellSurname);
            row.appendChild(cellEmail);
            row.appendChild(cellPhoneNumber);

            tableBody.appendChild(row);
        });
    } else {
        console.error("Element with id 'tableBody' not found");
    }
}
