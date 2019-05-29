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

function filterProductList(products) {
    const name = document.getElementById("search-input").value;
    let filteredList = searchByName(name, products);

    const minPrice = document.getElementById("min-price").value;
    const maxPrice = document.getElementById("max-price").value;

    if (isPriceRangeValid(minPrice, maxPrice)) {
        filteredList = searchByPrice(minPrice, maxPrice, filteredList);
    }

    return filteredList;
}

function sortProductList(products) {
    const sortType = document.getElementById("sort-dropdown").value;
    if (sortType === "default") {
        return products;
    } else {
        const sortTypeToComparator = {
            "descend": (a, b) => b - a,
            "ascend": (a, b) => a - b,
        };

        return sortedProductList = products.sort((p1, p2) => {
            return sortTypeToComparator[sortType](Number(p1.price.amount), Number(p2.price.amount));
        });
    }
}

function applyUserPreferences() {
    const rawProductList = getProductListDeprecated().products;
    const filteredProductList = filterProductList(rawProductList);
    const sortedProductList = sortProductList(filteredProductList);

    clearProductListing();
    addProductsToListing(sortedProductList);
}

(function addEventListeners() {
    ["min-price", "max-price", "search-input", "sort-dropdown"]
        .forEach((id) => document.getElementById(id).addEventListener('input', applyUserPreferences));
})();
