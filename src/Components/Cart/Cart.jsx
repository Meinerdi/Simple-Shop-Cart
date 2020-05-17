import React from 'react'

export const Cart = (props) => {
    let onIncreaseButton = product => {
        props.increaseProductCount(product)
    }

    let onDecreaseButton = product => {
        props.decreaseProductCount(product)
    }

    return (
        <div>
            {props.inCart.length === 0 ? "Cart is empty" : props.inCart.map(item => {
                return (
                    <div key={item.id}>
                        <span>{item.name} {item.price}$</span>
                        <button onClick={() => onIncreaseButton(item)}>+</button>
                        {item.count}
                        <button onClick={() => onDecreaseButton(item)}>-</button>
                    </div>
                )
            })}
            <div>Total price: {props.totalPrice} $</div>
        </div>
    )
}