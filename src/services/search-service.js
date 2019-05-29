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
