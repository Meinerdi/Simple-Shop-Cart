import React from 'react';
import { connect } from "react-redux";
import { clearCart, decreaseProductCount, deleteFromCart, increaseProductCount } from '../../actions/cart';
import { Cart } from "./Cart";

const CartContainer = (props) => {
    return <Cart {...props} />
}

let mapStateToProps = (state) => ({
    inCart: state.cart.inCart,
    totalPrice: state.cart.totalPrice
})

const actions = { increaseProductCount, decreaseProductCount, deleteFromCart, clearCart }

export default connect(mapStateToProps, actions)(CartContainer)