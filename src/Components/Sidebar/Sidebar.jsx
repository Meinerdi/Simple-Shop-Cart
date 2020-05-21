import React from 'react'
import s from './Sidebar.module.css'
import { NavLink } from 'react-router-dom'

export const Sidebar = () => {
    return (
        <ul className={s.sidebar}>
            <li>
                <NavLink to={'/products'} className={s.button}>
                    <div className={s.circle} />
                    <span className={s.link}>Products</span>
                </NavLink>
            </li>
        </ul>
    )
}