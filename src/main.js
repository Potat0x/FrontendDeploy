getProductList().then(response => {
    const productsHtml = response.products.map((product) => renderProduct(product));
    const listingElement = document.querySelector("#listing");
    productsHtml.forEach((prodHtml) => listingElement.innerHTML += prodHtml);
});
