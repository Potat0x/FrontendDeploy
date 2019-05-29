function searchByName(phrase, productList) {
    if (phrase === "" || phrase === undefined || phrase === null) {
        return productList;
    }
    return productList.filter(product => product.name.toLowerCase().includes(phrase.toLowerCase()));
}

function searchByPrice(min, max, productList) {
    const compare = (a, predicate, b) =>
        (isVoidOrEmpty(a) || isVoidOrEmpty(b)) || (isValidNumber(a) && isValidNumber(b) && predicate(Number(a), Number(b)));

    return productList.filter((product) => {
        const amount = product.price.amount;
        return compare(amount, lessThanOrEqual, max)
            && compare(amount, greaterThanOrEqual, min);
    });
}

function searchByTags(productList) {
    const selectedTags = getSelectedTags();
    return productList.filter((product) => checkIfProductContainsAllTags(product, selectedTags));
}

function checkIfProductContainsAllTags(product, selectedTags) {
    const productTags = product.tags.map((tag) => tag.name);
    for (const tag of selectedTags) {
        if (!productTags.includes(tag)) {
            return false;
        }
    }
    return true;
}
