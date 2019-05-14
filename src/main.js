console.log(getProductList());
const response = getProductList();

const productsHtml = response.products.map((product) => renderProduct(product));

const listingElement = document.querySelector("#listing");
productsHtml.forEach((prodHtml) => listingElement.innerHTML += prodHtml);

