import React from 'react'

export const Cart = (props) => {

    let onIncreaseButton = product => {
        props.increaseProductCount(product)
    }

    let onDecreaseButton = product => {
        props.decreaseProductCount(product)
    }

    let onDeleteButton = product => {
        props.deleteFromCart(product)
    }

    let onClearButton = () => {
        props.clearCart()
    }

    let onCheckoutButton = () => {
        alert(JSON.stringify(props.inCart))
    }

    return (
        <div>
            {props.inCart.length === 0 ? "Cart is empty" : props.inCart.map(item => {
                return (
                    <div key={item.id}>
                        <span>{item.name} {item.price}$</span>
                        <button disabled={
                            props.inCart.find(product => product.id === item.id).count === 1 ? true : false
                        } onClick={() => onDecreaseButton(item)}>-</button>
                        {item.count}
                        <button onClick={() => onIncreaseButton(item)}>+</button>
                        <button onClick={() => onDeleteButton(item)}>Delete</button>
                    </div>
                )
            })}

            {props.inCart.length === 0 ? null : <button onClick={onClearButton}>Clear Cart</button>}
            {props.inCart.length === 0 ? null : <div>Total price: {props.totalPrice} $</div>}
            {props.inCart.length === 0 ? null : <button onClick={onCheckoutButton}>Checkout</button>}

        </div>
    )
}