function addToCart() {
    const productId = document.getElementById("product").value;
    const quantity = document.getElementById("quantity").value;
    const price = document.getElementById("price").value;

    const existingProductIndex = Cart.findIndex(item => item.productId === productId);

    if (existingProductIndex !== -1) {
        Cart[existingProductIndex].quantity += parseInt(quantity);
        Cart[existingProductIndex].totalPrice += parseFloat(price) * parseInt(quantity);
    } else {
        Cart.push({
            productId: productId,
            quantity: parseInt(quantity),
            totalPrice: parseFloat(price) * parseInt(quantity)
        });
    }

    console.log("Cart:", Cart);

    updateInvoiceTable();
    displaySum();
}
function updateProductList() {
    const productDropdown = document.getElementById("product");

    productDropdown.innerHTML = '<option value="">Select a product</option>';

    Products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        productDropdown.appendChild(option);
    });
}
function updatePriceAndQuantity() {
    const productId = document.getElementById("product").value;
    const quantityInput = document.getElementById("quantity");
    const priceInput = document.getElementById("price");

    const selectedProduct = Products.find(product => product.id == productId);

    if (selectedProduct) {
        quantityInput.value = 1;
        priceInput.value = selectedProduct.price.toFixed(2);
    }
}
function updateQuantityPrice() {
    const productId = document.getElementById("product").value;
    const quantityInput = document.getElementById("quantity");
    const priceInput = document.getElementById("price");

    const selectedProduct = Products.find(product => product.id == productId);

    priceInput.value = quantityInput.value * selectedProduct.price.toFixed(2);
}
function updateInvoiceTable() {
    const tableBody = document.getElementById('tableInvoiceBody');

    tableBody.innerHTML = '';

    Cart.forEach(function (cartItem, index) {
        const productInfo = Products.find(product => product.id == cartItem.productId);

        if (productInfo) {
            const row = document.createElement('tr');

            const cellNumber = document.createElement('td');
            cellNumber.textContent = index + 1;

            const cellProductName = document.createElement('td');
            cellProductName.textContent = productInfo.name;

            const cellQuantity = document.createElement('td');
            cellQuantity.textContent = cartItem.quantity;

            const cellPrice = document.createElement('td');
            cellPrice.textContent = cartItem.totalPrice.toFixed(2); // Użyj ceny z koszyka

            row.appendChild(cellNumber);
            row.appendChild(cellProductName);
            row.appendChild(cellQuantity);
            row.appendChild(cellPrice);

            tableBody.appendChild(row);
        }
    });
}
function displaySum() {
    let sumDisplay = document.getElementById('sumDisplay');
    let sum = 0;

    Cart.forEach(product => {
        sum += product.totalPrice;
    });

    if (sumDisplay) {
        sumDisplay.textContent = `Sum: ${sum.toFixed(2)}`;
    } else {
        console.error("Element with id 'sumDisplay' not found");
    }
}
function printInvoice() {
    window.print();
}