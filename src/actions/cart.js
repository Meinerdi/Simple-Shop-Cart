import {
    ADD_PRODUCT_TO_CART,
    INCREASE_PRODUCT_COUNT,
    DECREASE_PRODUCT_COUNT,
    DELETE_PRODUCT_FROM_CART,
    CLEAR_CART
} from './../action-types/cart'

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