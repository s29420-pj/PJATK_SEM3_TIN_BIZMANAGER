function onClickPrices() {
    let mainTitleElement = document.getElementById("mainTitle");
    let showPricesContent = document.getElementById("priceTable");
    let showNewProductButton = document.getElementById("newProductButton")
    let showNavSearch = document.getElementById("navSearch");
    let hideNewTaskButton = document.getElementById("newTaskButton");
    let hideTaskContainer = document.getElementById("taskContainer");
    let filteredProducts = "";

    mainTitleElement.textContent = "Prices";
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

function filterProducts() {
    let searchInput = document.getElementById("navSearch").getElementsByTagName("input")[0];
    let searchText = searchInput.value.toLowerCase();

    let filteredProducts = Products.filter(product =>
        product.id.toString().includes(searchText) ||
        product.name.toLowerCase().includes(searchText) ||
        product.quantity.toString().includes(searchText) ||
        product.price.toString().includes(searchText)
    );

    updateFilteredPriceTable(filteredProducts);
}

function updateFilteredPriceTable(filteredProducts) {
    let tableBody = document.getElementById('tablePriceBody');

    if (tableBody) {
        // Wyczyść aktualną zawartość tabeli
        tableBody.innerHTML = '';

        // Dodaj każdy kontakt jako nowy wiersz
        filteredProducts.forEach(function (product) {
            let row = document.createElement('tr');

            let cellID = document.createElement('td');
            cellID.textContent = product.id;

            let cellName = document.createElement('td');
            cellName.textContent = product.name;

            let cellQuantity = document.createElement('td');
            cellQuantity.textContent = product.quantity;

            let cellPrice = document.createElement('td');
            cellPrice.textContent = product.price;

            row.appendChild(cellID);
            row.appendChild(cellName);
            row.appendChild(cellQuantity);
            row.appendChild(cellPrice);

            tableBody.appendChild(row);
        });
    } else {
        console.error("Element with id 'tablePriceBody' not found");
    }
}

function updatePriceTable() {
    let tableBody = document.getElementById('tablePriceBody');

    if (tableBody) {
        // Wyczyść aktualną zawartość tabeli
        tableBody.innerHTML = '';

        // Dodaj każdy kontakt jako nowy wiersz
        Products.forEach(function (product) {
            let row = document.createElement('tr');

            let cellID = document.createElement('td');
            cellID.textContent = product.id;

            let cellName = document.createElement('td');
            cellName.textContent = product.name;

            let cellQuantity = document.createElement('td');
            cellQuantity.textContent = product.quantity;

            let cellPrice = document.createElement('td');
            cellPrice.textContent = product.price;

            row.appendChild(cellID);
            row.appendChild(cellName);
            row.appendChild(cellQuantity);
            row.appendChild(cellPrice);

            tableBody.appendChild(row);
        });
    } else {
        console.error("Element with id 'tablePriceBody' not found");
    }

}

function newProduct() {
    let id = Products.length;
    console.log("New Product Button clicked");
    let name = prompt("Product name:");
    let quantity = parseInt(prompt("Quantity:"));
    let price = parseFloat(prompt("Price:"));

    if (id === null || name === null || quantity === null || price === null) {
        alert("Data entry canceled.");
    } else {
        let newProduct = {
            id: id + 1,
            name: name,
            quantity: quantity,
            price: price,
        };

        Products.push(newProduct);

        console.log("Product added:\nID: " + newProduct.id + "\nProduct name: " + newProduct.name + "\nQuantity: " + newProduct.quantity + "\nPrice: " + newProduct.price );
        updatePriceTable();
    }
}