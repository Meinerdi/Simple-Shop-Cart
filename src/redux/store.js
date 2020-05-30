import { combineReducers, createStore, applyMiddleware } from "redux";
import { cart } from './reducers/cart'
import { products } from './reducers/products'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

let reducers = combineReducers({
    cart: cart,
    products: products
})

export const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(
        thunkMiddleware
    ))
)