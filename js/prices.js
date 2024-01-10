function filterProducts() {
    let searchInput = document.getElementById("navSearch").getElementsByTagName("input")[0];
    let searchText = searchInput.value.toLowerCase();

    let filteredProducts = Products.filter(product =>
        product.id.toString().includes(searchText) ||
        product.name.toLowerCase().includes(searchText) ||
        product.price.toString().includes(searchText)
    );

    updateFilteredPriceTable(filteredProducts);
}
function updateFilteredPriceTable(filteredProducts) {
    let tableBody = document.getElementById('tablePriceBody');

    if (tableBody) {
        tableBody.innerHTML = '';

        filteredProducts.forEach(function (product) {
            let row = document.createElement('tr');

            let cellID = document.createElement('td');
            cellID.textContent = product.id;

            let cellName = document.createElement('td');
            cellName.textContent = product.name;

            let cellPrice = document.createElement('td');
            cellPrice.textContent = product.price;

            row.appendChild(cellID);
            row.appendChild(cellName);
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
        tableBody.innerHTML = '';

        Products.forEach(function (product) {
            let row = document.createElement('tr');

            let cellID = document.createElement('td');
            cellID.textContent = product.id;

            let cellName = document.createElement('td');
            cellName.textContent = product.name;

            let cellPrice = document.createElement('td');
            cellPrice.textContent = product.price;

            row.appendChild(cellID);
            row.appendChild(cellName);
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
    let price = parseFloat(prompt("Price:"));

    if (id === null || name === null || price === null) {
        alert("Data entry canceled.");
    } else {
        let newProduct = {
            id: id + 1,
            name: name,
            price: price,
        };

        Products.push(newProduct);

        console.log("Product added:\nID: " + newProduct.id + "\nProduct name: " + newProduct.name + "\nPrice: " + newProduct.price );
        updatePriceTable();
    }
}