import React from 'react'
import s from './Cart.module.css'

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
        <div className={s.cart}>
            {props.inCart.length === 0 ? "Cart is empty" : props.inCart.map(item => {
                return (
                    <div key={item.id} className={s.productItem}>
                        <img src={item.image} alt="item" className={s.itemImage} />
                        <div className={s.infoHolder}>
                            <span>{item.name}</span>
                            <span>{item.price}$</span>
                            <div className={s.buttonHolder}>
                                <button disabled={
                                    props.inCart.find(product => product.id === item.id).count === 1 ? true : false
                                } onClick={() => onDecreaseButton(item)}>-</button>
                                {item.count}
                                <button onClick={() => onIncreaseButton(item)}>+</button>
                                <button onClick={() => onDeleteButton(item)}>Delete</button>
                            </div>

                        </div>
                    </div>
                )
            })}

            {props.inCart.length === 0 ? null : <button onClick={onClearButton}>Clear Cart</button>}
            {props.inCart.length === 0 ? null : <div>Total price: {props.totalPrice} $</div>}
            {props.inCart.length === 0 ? null : <button onClick={onCheckoutButton}>Checkout</button>}

        </div>
    )
}