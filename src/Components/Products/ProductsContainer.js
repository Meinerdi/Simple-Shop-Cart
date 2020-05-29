import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { addToCart } from '../../redux/actions/cart';
import { Products } from "./Products";

const ProductsContainer = (props) => {
    useEffect(() => {
        console.log("loaded")
    })

    return <Products {...props} />
}

let mapStateToProps = (state) => ({
    products: state.products.products
})

const actions = { addToCart }

export default connect(mapStateToProps, actions)(ProductsContainer)