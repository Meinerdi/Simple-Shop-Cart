import {
    ADD_PRODUCT_TO_CART,
    INCREASE_PRODUCT_COUNT,
    DECREASE_PRODUCT_COUNT,
    DELETE_PRODUCT_FROM_CART,
    CLEAR_CART
} from './../action-types/cart'

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