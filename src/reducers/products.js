let initialState = {
    products: [
        { id: 1, name: 'Apple iPhone 7', price: 99, image: "https://www.dlf.pt/png/big/34/344606_iphone-7-plus-png.png" },
        { id: 2, name: 'Samsung Galaxy S20', price: 580, image: "https://sintetiki.net/images/product/20373/1605/s20-grey.png" },
        { id: 3, name: 'Nokia 3310', price: 899, image: "https://craftmann.ru/upload/iblock/8a6/Nokia-3310-400px.png" }
    ]
}

export const products = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}