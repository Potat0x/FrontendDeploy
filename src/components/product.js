function renderProduct(product) {
    return `<div class="product">
    <h2 class="product-title">${product.name}</h2>
    <div>${product.price.amount} ${product.price.currency}</div>
    <div class="product-description">${product.description.text}</div>
</div>`;
}
