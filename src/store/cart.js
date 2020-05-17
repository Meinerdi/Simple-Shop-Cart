const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART'
const INCREASE_PRODUCT_COUNT = 'INCREASE_PRODUCT_COUNT'
const DECREASE_PRODUCT_COUNT = 'DECREASE_PRODUCT_COUNT'
const DELETE_PRODUCT_FROM_CART = 'DELETE_PRODUCT_FROM_CART'
const CLEAR_CART = 'CLEAR_CART'

let initialState = {
    inCart: [
    ],
    totalPrice: 0,
    totalCount: 0
}

export const cart = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT_TO_CART:
            return {
                ...state,
                inCart: state.inCart.some(n => n.id === action.product.id)
                    ? state.inCart.map(n => n.id === action.product.id
                        ? { ...n, count: n.count + 1 }
                        : n
                    )
                    : [...state.inCart, { ...action.product, count: 1 }],
                totalPrice: state.totalPrice + action.product.price,
                totalCount: state.totalCount + 1

            }

        case INCREASE_PRODUCT_COUNT:
            return {
                ...state,
                inCart: state.inCart.map(n => n.id === action.product.id
                    ? { ...n, count: n.count + 1 }
                    : n
                ),
                totalPrice: state.totalPrice + action.product.price,
                totalCount: state.totalCount + 1

            }

        case DECREASE_PRODUCT_COUNT:
            return {
                ...state,
                inCart: state.inCart.map(n => n.id === action.product.id
                    ? { ...n, count: n.count - 1 }
                    : n
                ),
                totalPrice: state.totalPrice - action.product.price,
                totalCount: state.totalCount - 1

            }

        case DELETE_PRODUCT_FROM_CART:
            return {
                ...state,
                inCart: state.inCart.filter(n => n.id !== action.product.id),
                totalPrice: state.totalPrice - action.product.price * action.product.count,
                totalCount: state.totalCount - action.product.count

            }

        case CLEAR_CART:
            return {
                ...state,
                inCart: [],
                totalPrice: 0,
                totalCount: 0

            }

        default:
            return state
    }
}

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