var fetchedProducts = {};

function fetchProducts() {
    // const url = "127.0.0.1:8081/products";
    const url = "https://sampletext897123.herokuapp.com/products";
    // return Promise.resolve(getProductListDeprecated());
    return fetch(url)
        .then(response => {
            console.log(response);
            return response.json();
        })
        .then(json => {
            console.log(json);
            fetchedProducts = json.products;
            return json;
        })
        .catch(err => {
            console.error(err);
        });
}

function getProductList() {
    return fetchedProducts;
}

function getProductListDeprecated() {
    return {
        "products": [
            {
                "id": "product-id-1",
                "name": "Krzesło",
                "price": {
                    "amount": "45.99",
                    "currency": "PLN"
                },
                "description": {
                    "text": "Bardzo wygodne krzesło"
                },
                "image": {
                    "url": "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"
                },
                "tags": [
                    {
                        "name": "meble"
                    },
                    {
                        "name": "best deal"
                    },
                    {
                        "name": "drewno"
                    },
                    {
                        "name": "biurowe"
                    }
                ]
            },
            {
                "id": "product-id-2",
                "name": "Notatnik",
                "price": {
                    "amount": "9.00",
                    "currency": "EUR"
                },
                "description": {
                    "text": "Notatnik w którym można pisać ołówkiem. Długopisem też."
                },
                "image": {
                    "url": "https://images.unsplash.com/photo-1516414447565-b14be0adf13e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1566&q=80"
                },
                "tags": [
                    {
                        "name": "biurowe"
                    },
                    {
                        "name": "best deal"
                    }
                ]
            },
            {
                "id": "product-id-3",
                "name": "Kamień",
                "price": {
                    "amount": "1000.00",
                    "currency": "USD"
                },
                "description": {
                    "text": "Skała spoista, zwięzła bez względu na jej rodzaj genetyczny, wielkość frakcji i skład mineralogiczny."
                },
                "image": {
                    "url": "https://images.unsplash.com/photo-1447616061459-f7d9b9329bd6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                },
                "tags": [
                ]
            },
            {
                "id": "product-id-4",
                "name": "Drzewo",
                "price": {
                    "amount": "544.89",
                    "currency": "PLN"
                },
                "description": {
                    "text": "Na całym świecie rośnie obecnie około 3 bilionów 40 miliardów drzew."
                },
                "image": {
                    "url": "https://images.unsplash.com/photo-1458966480358-a0ac42de0a7a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                },
                "tags": [
                    {
                        "name": "rośliny"
                    },
                    {
                        "name": "drewno"
                    },
                    {
                        "name": "best deal"
                    }
                ]
            },
            {
                "id": "product-id-5",
                "name": "Kwiatek",
                "price": {
                    "amount": "22.00",
                    "currency": "EUR"
                },
                "description": {
                    "text": "Kwiatek, potrafi rosnąć."
                },
                "image": {
                    "url": "https://images.unsplash.com/photo-1507290439931-a861b5a38200?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2390&q=80"
                },
                "tags": [
                    {
                        "name": "rośliny"
                    },
                    {
                        "name": "best deal"
                    },
                    {
                        "name": "kwiaty"
                    }
                ]
            }
        ]
    };
}
