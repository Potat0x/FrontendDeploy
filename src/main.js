getProductList().then(response => addProductsToListing(response.products));

function clearProductListing() {
    const listingElement = document.querySelector("#listing");
    listingElement.innerHTML = "";
}

function addProductsToListing(products) {
    const productsHtml = products.map((product) => renderProduct(product));
    const listingElement = document.querySelector("#listing");
    productsHtml.forEach((prodHtml) => listingElement.innerHTML += prodHtml);
}

function isPriceRangeValid(min, max) {
    const isMinPriceInputValid = isValidNumberOrEmpty(min);
    const isMaxPriceInputValid = isValidNumberOrEmpty(max);

    if (isMinPriceInputValid && isMaxPriceInputValid) {
        if (isValidNumber(min) && isValidNumber(max)) {
            return Number(min) <= Number(max);
        } else {
            return true;
        }
    } else {
        return false;
    }
}

function filterProductListing() {
    const name = document.getElementById("search-input").value;
    let filteredList = searchByName(name, getProductListDeprecated().products);

    const minPrice = document.getElementById("min-price").value;
    const maxPrice = document.getElementById("max-price").value;

    if (isPriceRangeValid(minPrice, maxPrice)) {
        filteredList = searchByPrice(minPrice, maxPrice, filteredList);
    }

    clearProductListing();
    addProductsToListing(filteredList);
}

(function addEventListeners() {
    document.getElementById("min-price").addEventListener('input', filterProductListing);
    document.getElementById("max-price").addEventListener('input', filterProductListing);
    document.getElementById("search-input").addEventListener('input', filterProductListing);
})();
