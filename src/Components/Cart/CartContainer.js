import React from 'react'
import { connect } from "react-redux";
import { Cart } from "./Cart";
import { increaseProductCount, decreaseProductCount } from '../../store/cart'

const CartContainer = (props) => {
    return <Cart {...props} />
}

let mapStateToProps = (state) => ({
    inCart: state.cart.inCart,
    totalPrice: state.cart.totalPrice
})

export default connect(mapStateToProps, { increaseProductCount, decreaseProductCount })(CartContainer)