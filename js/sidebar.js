function onClickInvoice() {
    let hideNavSearch = document.getElementById("navSearch");
    let changeTitleElement = document.getElementById("mainTitle");
    let hideNewContactButton = document.getElementById("newContactButton");
    let hideNewTaskButton = document.getElementById("newTaskButton");
    let hideNewProductButton = document.getElementById("newProductButton");
    let hideContactTable = document.getElementById("contactTable");
    let hideTaskContainer = document.getElementById("taskContainer");
    let hidePriceTable = document.getElementById("priceTable");
    let showInvoiceContainer = document.getElementById("invoiceContainer");

    hideNavSearch.style.display = "none";
    changeTitleElement.textContent = "New Invoice";
    hideNewContactButton.style.display = "none";
    hideNewTaskButton.style.display = "none";
    hideNewProductButton.style.display = "none";
    hideContactTable.style.display = "none";
    hideTaskContainer.style.display = "none";
    hidePriceTable.style.display = "none";
    showInvoiceContainer.style.display = "block";

    console.log("Changed tab to New Invoice.");
    updateProductList();
}
function onClickPrices() {
    let showNavSearch = document.getElementById("navSearch");
    let changeTitleElement = document.getElementById("mainTitle");
    let hideNewContactButton = document.getElementById("newContactButton");
    let hideNewTaskButton = document.getElementById("newTaskButton");
    let showNewProductButton = document.getElementById("newProductButton");
    let hideContactTable = document.getElementById("contactTable");
    let hideTaskContainer = document.getElementById("taskContainer");
    let showPriceTable = document.getElementById("priceTable");
    let hideInvoiceContainer = document.getElementById("invoiceContainer");

    showNavSearch.style.display = "flex";
    changeTitleElement.textContent = "Prices";
    hideNewContactButton.style.display = "none";
    hideNewTaskButton.style.display = "none";
    showNewProductButton.style.display = "flex";
    hideContactTable.style.display = "none";
    hideTaskContainer.style.display = "none";
    showPriceTable.style.display = "table";
    hideInvoiceContainer.style.display = "none";

    updatePriceTable();

    console.log("Changed tab to Prices.");
}
function onClickTasks() {
    let hideNavSearch = document.getElementById("navSearch");
    let changeTitleElement = document.getElementById("mainTitle");
    let hideNewContactButton = document.getElementById("newContactButton");
    let showNewTaskButton = document.getElementById("newTaskButton");
    let hideNewProductButton = document.getElementById("newProductButton");
    let hideContactTable = document.getElementById("contactTable");
    let showTaskContainer = document.getElementById("taskContainer");
    let hidePriceTable = document.getElementById("priceTable");
    let hideInvoiceContainer = document.getElementById("invoiceContainer");

    hideNavSearch.style.display = "none";
    changeTitleElement.textContent = "Tasks";
    hideNewContactButton.style.display = "none";
    showNewTaskButton.style.display = "flex";
    hideNewProductButton.style.display = "none";
    hideContactTable.style.display = "none";
    showTaskContainer.style.display = "flex";
    hidePriceTable.style.display = "none";
    hideInvoiceContainer.style.display = "none";

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