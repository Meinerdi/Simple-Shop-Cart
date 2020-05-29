export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART'
export const INCREASE_PRODUCT_COUNT = 'INCREASE_PRODUCT_COUNT'
export const DECREASE_PRODUCT_COUNT = 'DECREASE_PRODUCT_COUNT'
export const DELETE_PRODUCT_FROM_CART = 'DELETE_PRODUCT_FROM_CART'
export const CLEAR_CART = 'CLEAR_CART'

export const addToCart = (product) => ({
    type: ADD_PRODUCT_TO_CART, product
})
export const increaseProductCount = (product) => ({
    type: INCREASE_PRODUCT_COUNT, product
})
export const decreaseProductCount = (product) => ({
    type: DECREASE_PRODUCT_COUNT, product
})
export const deleteFromCart = (product) => ({
    type: DELETE_PRODUCT_FROM_CART, product
})
export const clearCart = () => ({
    type: CLEAR_CART
})