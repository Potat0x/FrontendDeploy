const priceMapper = (price) => {
    const priceFormatters = {
        "PLN": (_amount) => _amount.replace(".", ",") + " zł",
        "EUR": (_amount) => "€ " + _amount,
        "USD": (_amount) => "$ " + _amount
    };

    const { currency, amount } = price;
    const formatter = priceFormatters[currency.toUpperCase()];

    if (formatter != undefined) {
        return formatter(amount);
    } else {
        console.error("Error: unknown currency, price=" + JSON.stringify(price, null, 4));
        return `>>błąd: nieznana waluta "${currency}", wartość: ${amount}<<`;
    }
};

function renderProduct(product) {
    return `<div class="product">
                <img class="product-image" src="${product.image.url}"/>
                    <div class="product-info">
                        <h2 class="product-title">${product.name}</h2>
                        <div>${priceMapper(product.price)}</div>
                    <div class="product-description">${product.description.text}</div>
                </div>
            </div>`;
}
