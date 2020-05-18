import { NavLink } from "react-router-dom"
import React from 'react'
import { connect } from "react-redux"
import cart from '../../assets/images/cart.png'
import s from './Menu.module.css'

const Menu = (props) => {
    return (
        <ul className={s.menu}>
            <li><NavLink to={'/products'}>Products</NavLink></li>
            <li className={s.cartIconHolder}>
                <NavLink to={'/cart'} className={s.cartLink}>
                    <img src={cart} alt={'cart'} className={s.cartIcon} />
                </NavLink>
                <span>{props.totalCount}</span>
            </li>
        </ul>
    )
}

let mapStateToProps = (state) => ({
    totalCount: state.cart.totalCount
})

export default connect(mapStateToProps)(Menu)