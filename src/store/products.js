let initialState = {
    products: [
        { id: 1, name: 'Apple iPhone 7', price: 99, image: "https://lh3.googleusercontent.com/proxy/1TWbsf_wb5BaJOZB070Ark6pa6rqpeOlFHXR0z2rZMJ28IT9N_8J28saCVwI59bYW8vHdAqh7dHX7C-A5pP9LxdVE5hu2qUNtKx7a512iwqf1iLxKRkG" },
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