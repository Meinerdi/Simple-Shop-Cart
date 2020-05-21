import React from 'react'
import { connect } from "react-redux"
import { NavLink } from "react-router-dom"
import cart from '../../assets/images/cart.png'
import s from './Header.module.css'
import logo from '../../assets/images/logo.png'

const Header = (props) => {
    const { totalCount } = props

    return (
        <div className={s.header}>
            <img src={logo} alt="logo" className={s.logo} />
            <li className={s.cartIconHolder}>
                <NavLink to={'/cart'} className={s.cartLink}>
                    <img src={cart} alt={'cart'} className={s.cartIcon} />
                </NavLink>
                <span>{totalCount}</span>
            </li>
        </div>
    )
}

let mapStateToProps = (state) => ({
    totalCount: state.cart.totalCount
})

export default connect(mapStateToProps)(Header)