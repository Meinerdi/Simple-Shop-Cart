import React from 'react'
import s from './Products.module.css'

export const Products = (props) => {
    let onProductBuy = (product) => {
        props.addToCart(product)
    }

    return (
        <ul className={s.productList}>
            {props.products.map(item => {
                return (
                    <li key={item.id} className={s.productItem}>
                        <img src={item.image} alt="product" className={s.itemImage} />
                        <span>{item.name}</span>
                        <span>{item.price} $ </span>
                        <button id={item.id} onClick={() => {
                            onProductBuy(item)
                        }}>Add to cart</button>
                    </li>
                )
            })}
        </ul>
    )
}