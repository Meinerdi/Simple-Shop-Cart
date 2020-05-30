import React from 'react'
import loader from '../../assets/images/loader.gif'
import s from './Loader.module.css'

export const Loader = () => {
    return (
        <div className={s.loader}>
            <img src={loader} alt="loader" className={s.loaderImage} />
        </div >
    )
}