import { combineReducers, createStore } from "redux";
import { cart } from './cart'
import { products } from './products'

let reducers = combineReducers({
    cart: cart,
    products: products
})

export const store = createStore(reducers)