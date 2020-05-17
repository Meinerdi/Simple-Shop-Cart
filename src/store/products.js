let initialState = {
    products: [
        { id: 1, name: 'Apple iPhone', price: 200 },
        { id: 2, name: 'Samsung S20', price: 580 },
        { id: 3, name: 'Nokia 3310', price: 899 }
    ]
}

export const products = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}