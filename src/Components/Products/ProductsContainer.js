import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { addToCart } from '../../redux/actions/cart';
import { getProducts } from '../../redux/actions/products'
import { Products } from "./Products";

const ProductsContainer = (props) => {
    let { getProducts } = props

    useEffect(() => {
        getProducts()
    }, [getProducts])

    return <Products {...props} />
}

let mapStateToProps = (state) => ({
    products: state.products.products,
    isFetching: state.products.isFetching
})

const actions = { addToCart, getProducts }

export default connect(mapStateToProps, actions)(ProductsContainer)