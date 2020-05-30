import { SET_PRODUCTS, TOGGLE_FETCHING } from "../actions/products"

let initialState = {
    products: [],
    isFetching: true
}

export const products = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS:
            return {
                ...state,
                products: action.products
            }

        case TOGGLE_FETCHING:
            return {
                ...state,
                isFetching: action.boolean
            }

        default:
            return state
    }
}