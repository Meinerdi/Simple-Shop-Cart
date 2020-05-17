import React from 'react';
import { connect } from "react-redux";
import { addToCart } from '../../store/cart';
import { Products } from "./Products";

const ProductsContainer = (props) => {
    return <Products {...props} />
}

let mapStateToProps = (state) => ({
    products: state.products.products
})

export default connect(mapStateToProps, { addToCart })(ProductsContainer)