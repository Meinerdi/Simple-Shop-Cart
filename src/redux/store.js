import { combineReducers, createStore } from "redux";
import { cart } from './reducers/cart'
import { products } from './reducers/products'

let reducers = combineReducers({
    cart: cart,
    products: products
})

export const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)