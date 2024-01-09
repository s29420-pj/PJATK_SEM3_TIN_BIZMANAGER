function onClickInvoice() {
    let mainTitleElement = document.getElementById("mainTitle");
    let mainContentDiv = document.getElementById("mainContentDiv");
    let newContactButton = document.getElementById("newContactButton");
    let hideContactContent = document.getElementById("contactTable");
    mainTitleElement.textContent = "New Invoice";
    mainContentDiv.style.display = "block";
    mainContentDiv.style.justifyContent = "center";
    mainContentDiv.style.alignContent = "center";
    newContactButton.style.display = "none";
    hideContactContent.style.display = "none";
}
function onClickPrices() {
    let mainTitleElement = document.getElementById("mainTitle");
    let mainContentDiv = document.getElementById("mainContentDiv");
    let showPricesContent = document.getElementById("priceTable");
    let showNewProductButton = document.getElementById("newProductButton")
    let showNavSearch = document.getElementById("navSearch");
    let hideNewTaskButton = document.getElementById("newTaskButton");
    let hideTaskContainer = document.getElementById("taskContainer");
    let filteredProducts = "";

    mainTitleElement.textContent = "Prices";
    mainContentDiv.style.display = "inline";
    console.log("Changed tab to Prices.");

    if (mainTitleElement) {
        mainTitleElement.textContent = "Prices";
    } else {
        console.error("Element with id 'mainTitle' not found");
    }

    if (showPricesContent) {
        showPricesContent.style.display = "table";
    } else {
        console.error("Element with id 'priceTable' not found");
    }

    if (showNewProductButton) {
        showNewProductButton.style.display = "flex";
    } else {
        console.error("Element with id 'newProductButton' not found");
    }

    if (showNavSearch) {
        showNavSearch.style.display = "flex";
    } else {
        console.error("Element with id 'navSearch' not found");
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

    updatePriceTable();
}
function onClickTasks() {
    let mainTitleElement = document.getElementById("mainTitle");
    let mainContentDiv = document.getElementById("mainContentDiv");
    let newContactButton = document.getElementById("newContactButton");
    let hideContactContent = document.getElementById("contactTable");
    let showNewTaskButton = document.getElementById("newTaskButton");
    let showTaskContainter = document.getElementById("taskContainer");

    mainTitleElement.textContent = "Tasks";
    mainContentDiv.style.display = "inline";
    newContactButton.style.display = "none";
    hideContactContent.style.display = "none";

    if (showNewTaskButton) {
        showNewTaskButton.style.display = "flex";
    } else {
        console.error("Element with id 'newTaskButton' not found");
    }

    if (showTaskContainter) {
        showTaskContainter.style.display = "flex";
    } else {
        console.error("Element with id 'taskContainer' not found");
    }

    console.log("Changed tab to Tasks.")
    updateTasks();
}
function onClickContacts() {
    let hideNavSearch = document.getElementById("navSearch");
    let changeTitleElement = document.getElementById("mainTitle");
    let showNewContactButton = document.getElementById("newContactButton");
    let hideNewTaskButton = document.getElementById("newTaskButton");
    let hideNewProductButton = document.getElementById("newProductButton");
    let showContactTable = document.getElementById("contactTable");
    let hideTaskContainer = document.getElementById("taskContainer");
    let hidePriceTable = document.getElementById("priceTable");
    let hideInvoiceContainer = document.getElementById("invoiceContainer");

    hideNavSearch.style.display = "none";
    changeTitleElement.textContent = "Contacts";
    showNewContactButton.style.display = "flex";
    hideNewTaskButton.style.display = "none";
    hideNewProductButton.style.display = "none";
    showContactTable.style.display = "table";
    hideTaskContainer.style.display = "none";
    hidePriceTable.style.display = "none";
    hideInvoiceContainer.style.display = "none";

    console.log("Changed tab to Contacts.");

    updateTable();
}