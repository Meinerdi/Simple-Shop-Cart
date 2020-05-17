import React from 'react'

export const Products = (props) => {
    let onProductBuy = (product) => {
        props.addToCart(product)
    }

    return (
        <ul>
            {props.products.map(item => {
                return (
                    <li key={item.id}>
                        {item.name} <span>{item.price} $ </span>
                        <button id={item.id} onClick={() => {
                            onProductBuy(item)
                        }}>Add to cart</button>
                    </li>
                )
            })}
        </ul>
    )
}