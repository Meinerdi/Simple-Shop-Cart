import { NavLink } from "react-router-dom"
import React from 'react'
import { connect } from "react-redux"


const Menu = (props) => {
    return (
        <ul>
            <li><NavLink to={'/products'}>Products</NavLink></li>
            <li><NavLink to={'/cart'}>Cart</NavLink> {props.totalCount}</li>
        </ul>
    )
}

let mapStateToProps = (state) => ({
    totalCount: state.cart.totalCount
})

export default connect(mapStateToProps)(Menu)