function setListingInnerHtml(innerHtml) {
    document.getElementById("listing").innerHTML = innerHtml;
}

function setProductsOnListing(products) {
    const productsHtml = products.map((product) => renderProduct(product))
        .reduce((a, b) => a + b);
    setListingInnerHtml(productsHtml);
}

function displayProductsNotFoundMessage() {
    const noProductsFoundMessage = `<p id="products-not-found">Nie znaleziono produktów o podanych parametrach</p>`;
    setListingInnerHtml(noProductsFoundMessage);
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

    filteredList = searchByTags(filteredList);

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

function renderTagCheckbox(tagName) {
    return `<div>
                <input type="checkbox" name="${tagName}" value="${tagName}" class="tagCheckbox">
                ${tagName}
            </div>`;
}

function getSelectedTags() {
    const tagCheckboxes = document.getElementsByClassName("tagCheckbox");
    return Array.from(tagCheckboxes)
        .filter((checkbox) => checkbox.checked)
        .map((checkbox) => checkbox.value);
}

function getAllTagsFromProducts() {
    return Array.from(
        new Set(getProductList().map((product) => product.tags)
            .reduce((a, b) => a.concat(b))
            .map((tag) => tag.name))
    );
}

function displayTagsCheckboxes() {
    const tags = getAllTagsFromProducts(getProductList());
    const tagsHtml = tags
        .map(tag => renderTagCheckbox(tag))
        .reduce((a, b) => a + b);

    document.getElementById("tagList").innerHTML = tagsHtml;
}

function applyFilterPreferencesAndDisplayResult() {
    const rawProductList = getProductList();
    const filteredProductList = filterProductList(rawProductList);
    const sortedProductList = sortProductList(filteredProductList);

    if (sortedProductList.length > 0) {
        setProductsOnListing(sortedProductList);
    } else {
        displayProductsNotFoundMessage();
    }
}

function addEventListenersToSearchForm() {
    ["min-price", "max-price", "search-input", "sort-dropdown"]
        .forEach((id) => document.getElementById(id).addEventListener('input', applyFilterPreferencesAndDisplayResult));
    document.getElementById("search-button").addEventListener("click", fetchAndDisplayProductsIncludingFiltering);
}

function addEventListenersToTagCheckboxes() {
    const tagElements = document.getElementsByClassName("tagCheckbox");
    for (const tagElement of tagElements) {
        tagElement.addEventListener('input', applyFilterPreferencesAndDisplayResult);
    }
}

function fetchAndDisplayProductsIncludingFiltering() {
    fetchProducts().then(response => {
        displayTagsCheckboxes();
        addEventListenersToTagCheckboxes();
        applyFilterPreferencesAndDisplayResult();
    });
}

addEventListenersToSearchForm();
fetchAndDisplayProductsIncludingFiltering();
